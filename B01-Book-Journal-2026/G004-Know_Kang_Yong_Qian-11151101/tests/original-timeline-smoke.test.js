'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const inlineScripts = [...html.matchAll(/<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi)].map(match => match[1]);
const script = inlineScripts.find(source => source.includes('function drawEvents(era)'));
assert.ok(script, 'original timeline script exists');

class Card {
  constructor(markup) {
    this.markup = markup;
    this.attributes = { 'aria-expanded': 'false' };
    this.classes = new Set(['event', 'reveal', 'visible']);
    this.handlers = {};
    this.classList = {
      toggle: name => this.classes.has(name) ? (this.classes.delete(name), false) : (this.classes.add(name), true),
      contains: name => this.classes.has(name),
    };
  }
  addEventListener(type, handler) { this.handlers[type] = handler; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  activate(type, event = {}) { this.handlers[type](event); }
}
class Tab {
  constructor(era) { this.dataset = { era }; this.attributes = {}; this.handlers = {}; }
  addEventListener(type, handler) { this.handlers[type] = handler; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  click() { this.handlers.click(); }
}
const cards = [];
function host() {
  const element = { style: {}, textContent: '', onclick: null, innerHTML: '' };
  return element;
}
const eventHost = host();
Object.defineProperty(eventHost, 'innerHTML', {
  set(markup) {
    cards.splice(0, cards.length);
    const pattern = /<div class="event reveal visible"[\s\S]*?<\/div><\/div>/g;
    for (const match of markup.matchAll(pattern)) cards.push(new Card(match[0]));
  },
});
const eras = ['all', '康熙', '雍正', '乾隆'].map(era => new Tab(era));
const quizArea = host();
const nextQuiz = host();
const miscHosts = new Map(['kxChapters', 'yzChapters', 'qlChapters', 'quizArea', 'nextQuiz', 'progress', 'toTop'].map(id => [id, host()]));
miscHosts.set('events', eventHost);
miscHosts.set('quizArea', quizArea);
miscHosts.set('nextQuiz', nextQuiz);
const document = {
  getElementById: id => miscHosts.get(id) || host(),
  querySelectorAll: selector => selector === '.event' ? cards : selector === '#eraTabs .tab' ? eras : selector === '.quiz-option' ? [] : [],
};
vm.runInNewContext(script, { document, window: { addEventListener() {}, scrollTo() {} }, IntersectionObserver: class { observe() {} unobserve() {} }, setTimeout() {}, clearTimeout() {} });

assert.equal(cards.length, 16, 'all original event cards render');
assert.match(cards[0].markup, /1661 · 康熙/);
let prevented = 0;
cards[0].activate('click');
assert.equal(cards[0].attributes['aria-expanded'], 'true', 'click expands event');
cards[0].activate('keydown', { key: 'Enter', preventDefault() { prevented++; } });
assert.equal(cards[0].attributes['aria-expanded'], 'false', 'Enter collapses event');
cards[0].activate('keydown', { key: ' ', preventDefault() { prevented++; } });
assert.equal(cards[0].attributes['aria-expanded'], 'true', 'Space expands event');
assert.equal(prevented, 2, 'keyboard activation prevents page scrolling');

for (const [index, expected, era] of [[1, 6, '康熙'], [2, 3, '雍正'], [3, 7, '乾隆'], [0, 16, 'all']]) {
  eras[index].click();
  assert.equal(cards.length, expected, `${era} filter renders ${expected} events`);
  assert.equal(eras[index].attributes['aria-selected'], 'true', `${era} filter announces selection`);
  assert.ok(eras.filter((_, i) => i !== index).every(tab => tab.attributes['aria-selected'] === 'false'));
}
console.log('PASS original timeline: 16 cards, click/keyboard details, and all three emperor filters.');
