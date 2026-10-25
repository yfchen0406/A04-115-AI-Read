window.SearsAnimationConfig = {
  enabled: new URLSearchParams(window.location.search).get("effects") !== "0",
  fadeInMs: 220,
  fadeOutMs: 220,
  mobileBreakpointPx: 760,
  typeEnabled: {
    "year-timeline": true,
    "number-counter": true,
    "before-after": true,
    "capital-flow": true,
    "breaking-news": true,
    "map-expansion": false,
    "product-evolution": true,
    "decision-fork": false,
    "reveal-question": true,
    "key-phrase": true,
    "evidence-card": true,
    "emotional-pause": true
  }
};