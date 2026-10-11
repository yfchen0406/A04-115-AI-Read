import React from 'react';
import {Composition} from 'remotion';
import timeline from '../public/data/timeline.json';
import {Timeline} from './Timeline.jsx';

export const RemotionRoot = () => <Composition id="A03Reader" component={Timeline} durationInFrames={timeline.durationFrames} fps={timeline.fps} width={1280} height={720} />;
