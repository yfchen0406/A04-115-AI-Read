import React from 'react';
import { Composition } from 'remotion';
import timeline from '../../data/timeline.json';
import { ReadingComposition } from './ReadingComposition';

const fps = 30;
const durationInFrames = Math.ceil(timeline.durationMs * fps / 1000);

export const RemotionRoot: React.FC = () => (
  <Composition
    id="NianNuJiaoRedCliff"
    component={ReadingComposition}
    durationInFrames={durationInFrames}
    fps={fps}
    width={1920}
    height={1080}
  />
);
