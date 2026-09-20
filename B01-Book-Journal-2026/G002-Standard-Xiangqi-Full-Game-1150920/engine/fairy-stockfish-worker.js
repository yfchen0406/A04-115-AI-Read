let engine = null;
let boot = null;

const waitForEngine = (test) => new Promise((resolve) => {
  const listener = (line) => {
    const text = String(line);
    if (test(text)) {
      engine.removeMessageListener(listener);
      resolve();
    }
  };
  engine.addMessageListener(listener);
});

const start = async () => {
  importScripts('./stockfish.js');
  engine = await Stockfish();
  engine.addMessageListener((line) => self.postMessage(String(line)));
  const uciReady = waitForEngine((line) => line === 'uciok');
  engine.postMessage('uci');
  await uciReady;
  engine.postMessage('setoption name UCI_Variant value xiangqi');
  const ready = waitForEngine((line) => line === 'readyok');
  engine.postMessage('isready');
  await ready;
  self.postMessage('__fairy_ready__');
};

self.onmessage = async (event) => {
  boot ??= start();
  await boot;
  if (typeof event.data === 'string' && event.data !== '__fairy_boot__') engine.postMessage(event.data);
};