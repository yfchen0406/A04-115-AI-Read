'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const eventData = JSON.parse(fs.readFileSync(path.join(root, 'data/historical-events.json'), 'utf8'));
const locations = JSON.parse(fs.readFileSync(path.join(root, 'data/historical-map-event-locations.json'), 'utf8')).locations;
const features = eventData.events.map(event => {
  const place = locations[event.id];
  if (!place) throw new Error(`Missing map location for ${event.id}`);
  return {
    type: 'Feature',
    id: event.id,
    properties: {
      id: event.id,
      name: event.title,
      event_id: event.id,
      region: event.region,
      polity: place.polity,
      start_year: event.year,
      end_year: event.year,
      control_type: 'event_location_only',
      confidence: place.confidence,
      source_id: 'historical-event-records',
      source_title: event.sourceTitle,
      source_url: event.sourceUrl,
      related_source_url: event.relatedSourceUrl || '',
      notes: place.notes,
      location_name: place.name,
      country: event.country,
      category: event.category,
      date: event.date || '',
      date_precision: event.datePrecision,
      background: event.background,
      people: event.people.join('、'),
      economy_country: place.economyCountry,
      route_type: 'event',
    },
    geometry: { type: 'Point', coordinates: place.coordinates },
  };
});
const output = { type: 'FeatureCollection', name: 'sourced_historical_event_location_1661_1799', features };
fs.writeFileSync(path.join(root, 'data/maps/historical-events.geojson'), `${JSON.stringify(output, null, 2)}\n`, 'utf8');
console.log(`Wrote ${features.length} source-linked event locations.`);
