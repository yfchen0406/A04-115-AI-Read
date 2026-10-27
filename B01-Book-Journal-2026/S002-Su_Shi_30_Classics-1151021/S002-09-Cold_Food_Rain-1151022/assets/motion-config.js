(() => {
  'use strict';
  const rows = [
    ['left','light',24,42,.18], ['push','fluff',54,26,.22], ['push','light',53,42,.16], ['down','fluff',48,35,.18], ['up','shadow',43,34,.15],
    ['right','water',70,72,.16], ['left','warm',60,55,.14], ['pull','petals',48,50,.17], ['push','light',48,35,.15], ['diagonal','ink',52,60,.14],
    ['pull','dust',50,48,.14], ['diagonal','water',74,73,.15], ['down','paper',49,72,.13], ['right','dust',50,48,.12], ['reveal','light',71,45,.14],
    ['push','ink',50,76,.12], ['left','dust',47,47,.14], ['pull','light',72,42,.13], ['down','water',75,76,.14], ['up','fluff',55,45,.18],
    ['push','light',34,35,.12], ['right','dust',67,30,.13], ['up','fluff',62,26,.15], ['diagonal','light',50,38,.13], ['diagonal','fluff',71,28,.14],
    ['push','shadow',56,44,.12], ['pull','light',70,28,.13], ['up','light',48,40,.12], ['left','fluff',48,32,.14], ['push','shadow',65,34,.12],
    ['pull','light',65,25,.12], ['up','light',52,34,.12], ['right','fluff',55,30,.14], ['right','water',73,70,.12], ['pull','water',76,23,.15],
    ['push','water',52,75,.16], ['diagonal','paper',52,70,.12], ['left','water',70,76,.13], ['right','water',45,72,.14], ['push','paper',56,66,.12],
    ['left','light',60,35,.13], ['right','warm',50,45,.14], ['left','warm',52,44,.14], ['pull','warm',52,48,.13], ['pull','dust',50,42,.12],
    ['right','paper',55,68,.12], ['up','fluff',50,35,.15], ['push','paper',56,70,.12], ['down','twilight',76,38,.12], ['diagonal','warm',52,70,.13],
    ['push','glow',80,50,.16], ['pull','light',74,45,.13], ['left','dust',54,45,.12], ['right','paper',57,65,.12], ['left','paper',50,68,.12],
    ['push','fluff',52,36,.14], ['up','fluff',55,30,.14], ['pull','fluff',75,34,.11], ['right','glow',60,55,.14], ['diagonal','light',52,35,.13]
  ];
  const effects = {};
  rows.forEach(([move,effect,x,y,strength], index) => {
    const shotId = `IMG${String(index + 1).padStart(3, '0')}`;
    effects[shotId] = { move, effect, focus: [x, y], point: [x, y], strength, seed: index + 3, count: 3 + (index % 3), radius: 16 + (index % 5) * 2, tone: effect === 'twilight' ? '190,212,244' : (effect === 'ink' ? '67,54,42' : '255,238,190') };
  });
  window.MOTION_EFFECTS = effects;
  window.MOTION_POEM_CUES = [
    { cueId: 26, shotId: 'IMG021', text: '梨花淡白柳深青，柳絮飛時花滿城。', position: 'verse-upper-left' },
    { cueId: 27, shotId: 'IMG022', text: '惆悵東欄一株雪，人生看得幾清明。', position: 'verse-upper-right' },
    { cueId: 30, shotId: 'IMG023', text: '梨花淡白柳深青。', position: 'verse-upper-right' },
    { cueId: 34, shotId: 'IMG025', text: '柳絮飛時花滿城。', position: 'verse-upper-right' },
    { cueId: 38, shotId: 'IMG027', text: '惆悵東欄一株雪。', lineBreakAt: 4, position: 'verse-upper-mid-left' },
    { cueId: 43, shotId: 'IMG030', text: '人生看得幾清明。', lineBreakAt: 4, position: 'verse-upper-left-safe' },
    { cueId: 50, shotId: 'IMG035', text: '人生看得幾清明。', position: 'verse-upper-right' },
    { cueId: 79, shotId: 'IMG058', text: '人生看得幾清明。', position: 'verse-upper-right' }
  ];
})();
