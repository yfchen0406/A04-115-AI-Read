const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const scenesDb = JSON.parse(read('data/historical-scenes.json'));
const sourceDb = JSON.parse(read('data/historical-scene-sources.json'));
const eventsDb = JSON.parse(read('data/historical-events.json'));
const eventIds = new Set(eventsDb.events.map(event => event.id));
const eventsById = new Map(eventsDb.events.map(event => [event.id,event]));
const mapRouteIds = new Set([
  ...JSON.parse(read('data/maps/trade-routes.geojson')).features.map(feature => feature.properties.id),
  ...JSON.parse(read('data/maps/military-campaigns.geojson')).features.map(feature => feature.properties.id),
]);

test('historical scene records carry valid date windows, sources, and existing timeline event references', () => {
  assert.equal(scenesDb.scenes.length, 29);
  for (const scene of scenesDb.scenes) {
    assert.ok(scene.start_year >= scenesDb.period[0] && scene.end_year <= scenesDb.period[1], scene.id);
    assert.ok(scene.start_year <= scene.end_year, scene.id);
    assert.ok(scene.steps.length >= 2, scene.id);
    assert.ok(sourceDb.sources[scene.source_id], `${scene.id} missing source ${scene.source_id}`);
    if (scene.event_id) {
      assert.ok(eventIds.has(scene.event_id), `${scene.id} missing event ${scene.event_id}`);
      const eventYear=eventsById.get(scene.event_id).year;
      assert.ok(eventYear >= scene.start_year && eventYear <= scene.end_year, `${scene.id} event year outside scene range`);
    }
    for (const step of scene.steps) {
      assert.ok(step.year >= scene.start_year && step.year <= scene.end_year, `${scene.id} step year ${step.year}`);
      if (step.event_id) {
        assert.ok(eventIds.has(step.event_id), `${scene.id} step missing event ${step.event_id}`);
        assert.equal(eventsById.get(step.event_id).year,step.year,`${scene.id} step event/year mismatch`);
      }
      if (step.route_id) assert.ok(mapRouteIds.has(step.route_id), `${scene.id} step missing map route ${step.route_id}`);
    }
    if (scene.route_id) assert.ok(mapRouteIds.has(scene.route_id), `${scene.id} missing map route ${scene.route_id}`);
  }
});

test('scene catalogue covers the requested Qing, scroll, machine, trade, war, and compare types', () => {
  const byType = type => scenesDb.scenes.filter(scene => scene.scene_type === type);
  assert.ok(scenesDb.scenes.some(scene => scene.category === '康熙宮廷'));
  assert.ok(scenesDb.scenes.some(scene => scene.category === '雍正宮廷'));
  assert.ok(scenesDb.scenes.some(scene => scene.category === '乾隆宮廷'));
  assert.equal(byType('scroll').length, 2);
  assert.deepEqual(new Set(byType('machine').map(scene => scene.machine)), new Set(['newcomen','watt','jenny','waterframe','loom']));
  assert.ok(scenesDb.scenes.some(scene => scene.id === 'canton-port' && scene.scene_type === 'trade'));
  assert.ok(byType('military').length >= 7);
  assert.ok(byType('comparison').length >= 2);
});

test('original historical data and first-to-fourth phase modules remain present and are not in the new engine', () => {
  const html = read('index.html');
  assert.match(html, /id="historical-scenes"/);
  assert.match(html, /historical-scene-engine\.js/);
  assert.match(html, /historical-scenes\.css/);
  for (const id of ['global-history','historical-map','kangxi','yongzheng','qianlong','economic-dashboard','quiz']) assert.match(html, new RegExp(`id="${id}"`));
  for (const script of ['historical-time-controller.js','historical-map.js','historical-events.js','qing-animations.js','economic-dashboard.js']) assert.match(html, new RegExp(script.replaceAll('.','\\.')));
  assert.match(read('js/historical-map.js'), /focusFeature: \(kind,id\) => focusFeature\(kind,String\(id\)\)/);
});

test('motion controls, reduced motion, full screen, speed settings, scene cleanup, and timeline sync are implemented', () => {
  const js = read('js/historical-scene-engine.js');
  for (const marker of ['HistoricalTimeController','HistoricalMap?.focusFeature','qingmotionchange','prefers-reduced-motion','requestFullscreen','cancelAnimationFrame','5200 / state.speed','destroy()']) assert.ok(js.includes(marker), marker);
  assert.match(read('index.html'), /<option value="0\.5">0\.5 倍<\/option>/);
  assert.match(js, /pointerdown/);
  assert.match(js, /ScrollTrigger/);
  assert.match(js, /setInterval\(\(\) => \{ state\.step=/);
  assert.match(js, /getAttribute\('aria-pressed'\)==='true'/);
  assert.match(js, /relatedSource/);
});
