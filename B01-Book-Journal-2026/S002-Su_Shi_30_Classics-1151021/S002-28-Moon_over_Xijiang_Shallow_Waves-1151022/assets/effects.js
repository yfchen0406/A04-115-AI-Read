(() => {
  const motion = {
    "001": [1.004, 1.038, 0, 0, 0, 0, 1, 1],
    "002": [1.012, 1.043, 0, -0.22, 0, 0, 1, 1],
    "003": [1.028, 1.006, 0.25, -0.15, 0, 0, 1, 1],
    "004": [1.008, 1.025, 0.18, -0.35, 0, 0, 1, 1],
    "005": [1.034, 1.004, 0.25, -0.2, 0, 0, 1, 1],
    "006": [1.006, 1.035, 0, 0.15, 0, -0.18, 1, 1],
    "007": [1.012, 1.018, 0.25, -0.25, 0, 0, 1, 1],
    "008": [1.025, 1.025, -0.2, 0.3, 0, 0, 1, 1],
    "009": [1.018, 1.018, 0, 0, 0.18, -0.2, 1, 1],
    "010": [1.008, 1.018, -0.25, 0.25, 0, 0, 1, 1],
    "011": [1.004, 1.03, -0.12, 0, 0.05, -0.05, 1, 1],
    "012": [1.026, 1.006, 0.15, -0.12, 0, 0, 1, 1],
    "013": [1.003, 1.037, 0, 0.08, 0.05, -0.05, 1, 1],
    "014": [1.012, 1.012, -0.28, 0.28, 0.12, -0.12, 1, 1],
    "015": [1.018, 1.018, -0.22, 0.22, 0, 0, 1, 1],
    "016": [1.028, 1.008, 0.22, -0.2, 0, 0, 1, 1],
    "017": [1.006, 1.035, -0.12, 0, 0, 0, 1, 1],
    "018": [1.012, 1.022, 0.12, -0.16, -0.12, 0.12, 1, 1],
    "019": [1.016, 1.016, 0.3, -0.3, 0, 0, 1, 1],
    "020": [1.038, 1.004, 0, 0, 0.15, -0.12, 1, 1],
    "021": [1.006, 1.024, 0, 0, 0, 0, 1, 1],
    "022": [1.026, 1.008, 0.22, -0.18, 0, 0, 1, 1],
    "023": [1.006, 1.028, 0.12, -0.08, 0, 0, 1, 1],
    "024": [1.008, 1.008, 0, 0, 0, 0, 0.96, 1.015],
    "025": [1.006, 1.026, 0, 0.12, 0, 0, 1, 1],
    "026": [1.028, 1.005, 0, 0, 0, 0.1, 1, 1],
    "027": [1.008, 1.018, -0.2, 0.26, 0, 0, 1, 1],
    "028": [1.004, 1.03, -0.16, 0, 0, 0, 1, 1],
    "029": [1.04, 1.006, 0.08, -0.08, 0, 0, 1, 1],
    "030": [1.025, 1.008, 0, 0.14, 0, 0, 1, 1],
    "031": [1.006, 1.03, 0, 0, 0, 0.08, 1, 1],
    "032": [1.016, 1.016, -0.22, 0.22, 0, 0, 1, 1],
    "033": [1.025, 1.006, 0.18, -0.18, 0, 0, 1, 1],
    "034": [1.014, 1.014, 0.22, -0.22, 0, 0, 1, 1],
    "035": [1.012, 1.025, 0, 0, 0, -0.1, 1, 1],
    "036": [1.026, 1.006, -0.12, 0.12, 0, 0, 1, 1],
    "037": [1.014, 1.014, -0.28, 0.28, 0.08, -0.04, 0.995, 1.01],
    "038": [1.01, 1.034, 0, 0, 0, 0, 1, 1],
    "039": [1.014, 1.014, 0.25, -0.25, 0, 0, 1, 1],
    "040": [1.004, 1.034, 0, 0, 0, -0.12, 1, 1],
    "041": [1.028, 1.006, 0, 0.22, 0, 0, 1, 1],
    "042": [1.01, 1.024, -0.18, 0.08, 0, 0, 1, 1],
    "043": [1.006, 1.028, -0.12, 0.12, 0, 0, 1, 1],
    "044": [1.008, 1.008, 0, 0, 0, 0, 0.99, 1.01],
    "045": [1.004, 1.03, 0, 0, 0, 0, 1, 1.025],
  };

  const overlays = {
    S004: { image: "002", lines: ["可惜一溪風月，", "莫教踏碎瓊瑤。"], top: 1.5, left: 31, width: 38, align: "center", fontSize: "clamp(13px, 2vw, 38px)" },
    S005: { image: "003", lines: ["可惜一溪風月，"], bottom: 18, right: 7, width: 43, align: "right", backing: true },
    S006: { image: "004", lines: ["可惜一溪風月，", "莫教踏碎瓊瑤。"], top: 12, left: 25, width: 42, align: "center" },
    S021: { image: "013", lines: ["照野瀰瀰淺浪。"], top: 14, right: 8, width: 46, align: "right" },
    S023: { image: "014", lines: ["我欲醉眠芳草。"], top: 12, left: 23, width: 54, align: "center", backing: true },
    S024: { image: "015", lines: ["障泥未解玉驄驕。"], top: 8, left: 22, width: 32, align: "center", fontSize: "clamp(13px, 1.9vw, 36px)" },
    S025: { image: "015", lines: ["障泥未解玉驄驕。"], top: 8, left: 22, width: 32, align: "center", fontSize: "clamp(13px, 1.9vw, 36px)" },
    S029: { image: "018", lines: ["照野瀰瀰淺浪，", "橫空隱隱層霄。"], top: 7, left: 31, width: 42, align: "center" },
    S030: { image: "018", lines: ["障泥未解玉驄驕，", "我欲醉眠芳草。"], top: 7, left: 31, width: 42, align: "center" },
    S031: { image: "019", lines: ["可惜一溪風月，", "莫教踏碎瓊瑤。"], top: 7, left: 31, width: 42, align: "center" },
    S032: { image: "019", lines: ["解鞍欹枕綠楊橋，", "杜宇一聲春曉。"], top: 7, left: 31, width: 42, align: "center" },
    S035: { image: "021", lines: ["可惜一溪風月，", "莫教踏碎瓊瑤。"], bottom: 17, right: 6, width: 48, align: "right", backing: true },
    S036: { image: "022", lines: ["可惜一溪風月，", "莫教踏碎瓊瑤。"], top: 6, left: 31, width: 38, align: "center" },
    S037: { image: "023", lines: ["解鞍欹枕綠楊橋。"], top: 13, right: 7, width: 47, align: "right" },
    S038: { image: "023", lines: ["杜宇一聲春曉。"], top: 13, right: 7, width: 47, align: "right" },
    S046: { image: "028", lines: ["杜宇一聲春曉。"], top: 13, right: 7, width: 45, align: "right" },
  };

  const smooth = (value) => {
    const p = Math.max(0, Math.min(1, value));
    return p * p * (3 - 2 * p);
  };

  window.B28_EFFECTS = {
    motion(scene, seconds) {
      const values = motion[scene.id];
      if (!values) return null;
      const duration = Math.max(0.001, scene.endSeconds - scene.startSeconds);
      const p = smooth((seconds - scene.startSeconds) / duration);
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        return { scale: 1.01, translate: "0% 0%", filter: "none", transformOrigin: "50% 50%" };
      }
      const lerp = (from, to) => from + (to - from) * p;
      return {
        scale: lerp(values[0], values[1]),
        translate: `${lerp(values[2], values[3])}% ${lerp(values[4], values[5])}%`,
        filter: `brightness(${lerp(values[6], values[7])})`,
        transformOrigin: "50% 50%",
      };
    },
    poemOverlay(timeline, seconds) {
      const cue = timeline.subtitles.find((item) => item.startSeconds <= seconds && seconds < item.endSeconds);
      if (!cue) return null;
      const overlay = overlays[cue.id];
      if (!overlay) return null;
      const scene = timeline.scenes.find((item) => item.startSeconds <= seconds && seconds < item.endSeconds);
      if (!scene || scene.id !== overlay.image) return null;
      const progress = (seconds - cue.startSeconds) / Math.max(0.001, cue.endSeconds - cue.startSeconds);
      const fade = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? 1 : Math.min(1, Math.max(0, (seconds - cue.startSeconds) / 0.25), Math.max(0, (cue.endSeconds - seconds) / 0.25));
      return {
        ...overlay,
        cueId: cue.id,
        opacity: smooth(fade),
        style: {
          ...(overlay.top === undefined ? { bottom: `${overlay.bottom}%` } : { top: `${overlay.top}%` }),
          ...(overlay.left === undefined ? { right: `${overlay.right}%` } : { left: `${overlay.left}%` }),
          width: `${overlay.width}%`,
          textAlign: overlay.align,
          ...(overlay.fontSize ? { fontSize: overlay.fontSize } : {}),
        },
      };
    },
  };
})();
