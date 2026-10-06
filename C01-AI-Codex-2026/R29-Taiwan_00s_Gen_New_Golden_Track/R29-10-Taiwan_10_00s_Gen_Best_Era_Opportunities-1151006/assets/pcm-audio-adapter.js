/* Offline-only Web Audio adapter. The original MP3 bytes are supplied by
   narration-data.js; decoding once makes chapter seeks sample-accurate. */
(() => {
  let encodedAudio = window.R029_NARRATION_MP3_BASE64;
  const NativeAudioContext = window.AudioContext || window.webkitAudioContext;
  if (!encodedAudio || !NativeAudioContext || !window.HTMLMediaElement) {
    window.R029_PCM_AUDIO_STATUS = 'native-unavailable';
    return;
  }

  const nativeCreateElement = Document.prototype.createElement;
  const nativeMedia = {
    src: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'src'),
    currentSrc: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentSrc'),
    currentTime: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime'),
    duration: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'duration'),
    paused: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'paused'),
    ended: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'ended'),
    seeking: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'seeking'),
    readyState: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'readyState'),
    playbackRate: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate'),
    volume: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'volume'),
    muted: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'muted'),
    error: Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'error'),
    play: HTMLMediaElement.prototype.play,
    pause: HTMLMediaElement.prototype.pause,
    load: HTMLMediaElement.prototype.load,
  };
  const engines = new WeakMap();
  const fire = (element, type) => element.dispatchEvent(new Event(type));
  const clamp = (value, max) => Math.max(0, Math.min(Number(value) || 0, max));

  class PcmAudioEngine {
    constructor(element, sourceUrl) {
      this.element = element;
      this.sourceUrl = sourceUrl;
      this.context = new NativeAudioContext({ sampleRate: 24_000 });
      this.gain = this.context.createGain();
      this.gain.connect(this.context.destination);
      this.buffer = null;
      this.position = 0;
      this.startedAt = 0;
      this.source = null;
      this.paused = true;
      this.ended = false;
      this.seeking = false;
      this.readyState = 0;
      this.volume = 1;
      this.muted = false;
      this.playbackRate = 1;
      this.error = null;
      this.preparePromise = null;
      this.playRequest = 0;
      this.tick = 0;
      this.destroyed = false;
      this.element.dataset.pcmAudio = 'decoding';
      this.refreshGain();
      window.R029_PCM_AUDIO_STATUS = 'decoding';
      this.prepare();
    }

    get currentTime() {
      if (this.paused || !this.buffer) return this.position;
      return clamp(this.position + this.context.currentTime - this.startedAt, this.buffer.duration);
    }

    prepare() {
      if (this.preparePromise) return this.preparePromise;
      this.preparePromise = (async () => {
        try {
          let binary = atob(encodedAudio);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
          binary = '';
          encodedAudio = '';
          window.R029_NARRATION_MP3_BASE64 = '';
          this.buffer = await this.context.decodeAudioData(bytes.buffer);
          this.readyState = 4;
          this.position = clamp(this.position, this.buffer.duration);
          window.R029_PCM_AUDIO_STATUS = 'ready';
          this.element.dataset.pcmAudio = 'web-audio';
          this.element.dataset.pcmSampleRate = String(this.buffer.sampleRate);
          this.element.dataset.pcmDuration = String(this.buffer.duration);
          this.element.dataset.pcmBufferBytes = String(this.buffer.length * this.buffer.numberOfChannels * 4);
          fire(this.element, 'loadedmetadata');
          fire(this.element, 'loadeddata');
          fire(this.element, 'canplay');
          fire(this.element, 'seeked');
          return true;
        } catch (error) {
          this.error = error;
          this.readyState = 0;
          window.R029_PCM_AUDIO_STATUS = 'decode-failed';
          this.restoreNative(error);
          return false;
        }
      })();
      return this.preparePromise;
    }

    refreshGain() {
      if (this.gain) this.gain.gain.value = this.muted ? 0 : this.volume;
    }

    setCurrentTime(value) {
      this.position = this.buffer ? clamp(value, this.buffer.duration) : Math.max(0, Number(value) || 0);
      this.ended = false;
      if (this.buffer) queueMicrotask(() => fire(this.element, 'seeked'));
      else void this.prepare();
    }

    async play() {
      const playRequest = ++this.playRequest;
      const resumePromise = this.context.state === 'suspended' ? this.context.resume() : Promise.resolve();
      const ready = await this.prepare();
      if (playRequest !== this.playRequest) return;
      if (!ready) return nativeMedia.play.call(this.element);
      await resumePromise;
      if (playRequest !== this.playRequest) return;
      if (this.ended || this.position >= this.buffer.duration) this.position = 0;
      if (!this.paused) return;
      const source = this.context.createBufferSource();
      source.buffer = this.buffer;
      source.connect(this.gain);
      this.source = source;
      this.startedAt = this.context.currentTime;
      this.paused = false;
      this.ended = false;
      const activeSource = source;
      source.onended = () => {
        if (this.source !== activeSource || this.paused) return;
        this.position = this.buffer.duration;
        this.source = null;
        this.paused = true;
        this.ended = true;
        clearInterval(this.tick);
        this.tick = 0;
        fire(this.element, 'timeupdate');
        fire(this.element, 'ended');
        fire(this.element, 'pause');
      };
      source.start(0, this.position);
      fire(this.element, 'play');
      fire(this.element, 'playing');
      this.tick = window.setInterval(() => fire(this.element, 'timeupdate'), 200);
    }

    pause() {
      // Invalidate play() calls that are still waiting for the full MP3 decode.
      this.playRequest += 1;
      if (this.paused) return;
      this.position = this.currentTime;
      this.paused = true;
      const source = this.source;
      this.source = null;
      if (source) {
        source.onended = null;
        try { source.stop(); } catch {}
      }
      clearInterval(this.tick);
      this.tick = 0;
      fire(this.element, 'pause');
    }

    restoreNative(error) {
      const element = this.element;
      const state = element.__r029PcmState;
      if (!state || !state.active) return;
      state.active = false;
      state.error = error;
      element.dataset.pcmAudio = 'native-fallback';
      nativeMedia.src?.set?.call(element, this.sourceUrl);
      nativeMedia.volume?.set?.call(element, this.volume);
      nativeMedia.muted?.set?.call(element, this.muted);
      nativeMedia.currentTime?.set?.call(element, this.position);
      nativeMedia.load?.call(element);
      if (!this.paused) nativeMedia.play.call(element).catch(() => {});
      fire(element, 'error');
    }

    destroy() {
      this.destroyed = true;
      this.pause();
      if (this.context.state !== 'closed') void this.context.close();
    }
  }

  function install(element) {
    if (engines.has(element)) return;
    const state = { active: false, sourceUrl: '', error: null, overrideFailed: false };
    element.__r029PcmState = state;
    engines.set(element, null);

    const ensureEngine = (sourceUrl) => {
      if (!state.active) {
        try {
          const engine = new PcmAudioEngine(element, sourceUrl);
          state.active = true;
          state.sourceUrl = sourceUrl;
          engines.set(element, engine);
          return engine;
        } catch (error) {
          state.error = error;
          window.R029_PCM_AUDIO_STATUS = 'context-failed';
          return null;
        }
      }
      return engines.get(element);
    };

    const descriptors = {
      src: {
        get() { return state.active ? state.sourceUrl : nativeMedia.src?.get?.call(element) ?? ''; },
        set(value) {
          const url = String(value);
          if (!state.overrideFailed && /narration\.mp3(?:$|[?#])/i.test(url)) {
            const absolute = new URL(url, document.baseURI).href;
            if (ensureEngine(absolute)) return;
          }
          nativeMedia.src?.set?.call(element, value);
        },
      },
      currentSrc: { get() { return state.active ? state.sourceUrl : nativeMedia.currentSrc?.get?.call(element) ?? ''; } },
      currentTime: {
        get() { return state.active ? engines.get(element)?.currentTime ?? 0 : nativeMedia.currentTime?.get?.call(element) ?? 0; },
        set(value) { const engine = state.active ? engines.get(element) : null; if (engine) engine.setCurrentTime(value); else nativeMedia.currentTime?.set?.call(element, value); },
      },
      duration: { get() { return state.active ? engines.get(element)?.buffer?.duration ?? Number.NaN : nativeMedia.duration?.get?.call(element) ?? Number.NaN; } },
      paused: { get() { return state.active ? engines.get(element)?.paused ?? true : nativeMedia.paused?.get?.call(element) ?? true; } },
      ended: { get() { return state.active ? engines.get(element)?.ended ?? false : nativeMedia.ended?.get?.call(element) ?? false; } },
      seeking: { get() { return state.active ? engines.get(element)?.seeking ?? false : nativeMedia.seeking?.get?.call(element) ?? false; } },
      readyState: { get() { return state.active ? engines.get(element)?.readyState ?? 0 : nativeMedia.readyState?.get?.call(element) ?? 0; } },
      playbackRate: {
        get() { return state.active ? engines.get(element)?.playbackRate ?? 1 : nativeMedia.playbackRate?.get?.call(element) ?? 1; },
        set(value) {
          const engine = state.active ? engines.get(element) : null;
          if (!engine) { nativeMedia.playbackRate?.set?.call(element, value); return; }
          engine.playbackRate = 1;
          if (Number(value) !== 1) fire(element, 'ratechange');
        },
      },
      volume: {
        get() { return state.active ? engines.get(element)?.volume ?? 1 : nativeMedia.volume?.get?.call(element) ?? 1; },
        set(value) { const engine = state.active ? engines.get(element) : null; if (engine) { engine.volume = Math.max(0, Math.min(1, Number(value) || 0)); engine.refreshGain(); } else nativeMedia.volume?.set?.call(element, value); },
      },
      muted: {
        get() { return state.active ? engines.get(element)?.muted ?? false : nativeMedia.muted?.get?.call(element) ?? false; },
        set(value) { const engine = state.active ? engines.get(element) : null; if (engine) { engine.muted = Boolean(value); engine.refreshGain(); } else nativeMedia.muted?.set?.call(element, value); },
      },
      error: { get() { return state.active ? engines.get(element)?.error ?? null : state.error ?? nativeMedia.error?.get?.call(element) ?? null; } },
    };
    for (const [name, descriptor] of Object.entries(descriptors)) {
      try { Object.defineProperty(element, name, { configurable: true, ...descriptor }); }
      catch { state.overrideFailed = true; }
    }
    try {
      const nativeSetAttribute = element.setAttribute.bind(element);
      Object.defineProperty(element, 'setAttribute', {
        configurable: true,
        value(name, value) {
          if (String(name).toLowerCase() === 'src' && /narration\.mp3(?:$|[?#])/i.test(String(value))) {
            element.src = value;
            return;
          }
          return nativeSetAttribute(name, value);
        },
      });
      Object.defineProperty(element, 'play', { configurable: true, value() { const engine = state.active ? engines.get(element) : null; return engine ? engine.play() : nativeMedia.play.call(element); } });
      Object.defineProperty(element, 'pause', { configurable: true, value() { const engine = state.active ? engines.get(element) : null; return engine ? engine.pause() : nativeMedia.pause.call(element); } });
      Object.defineProperty(element, 'load', { configurable: true, value() { const engine = state.active ? engines.get(element) : null; return engine ? engine.prepare() : nativeMedia.load.call(element); } });
    } catch {
      state.overrideFailed = true;
      window.R029_PCM_AUDIO_STATUS = 'element-override-failed';
    }
    if (state.overrideFailed) window.R029_PCM_AUDIO_STATUS = 'element-override-failed';
  }

  Document.prototype.createElement = function createElementWithPcmAudio(name, ...args) {
    const element = nativeCreateElement.call(this, name, ...args);
    if (String(name).toLowerCase() === 'audio') install(element);
    return element;
  };

  const unlockAudioFromGesture = () => {
    for (const element of document.querySelectorAll('audio')) {
      const engine = engines.get(element);
      if (engine?.context?.state === 'suspended') void engine.context.resume().catch(() => {});
    }
  };
  document.addEventListener('pointerdown', unlockAudioFromGesture, true);
  document.addEventListener('keydown', unlockAudioFromGesture, true);

  window.addEventListener('pagehide', () => {
    for (const engine of document.querySelectorAll('audio')) engines.get(engine)?.destroy();
  }, { once: true });
  window.R029_PCM_AUDIO_STATUS = 'adapter-ready';
})();
