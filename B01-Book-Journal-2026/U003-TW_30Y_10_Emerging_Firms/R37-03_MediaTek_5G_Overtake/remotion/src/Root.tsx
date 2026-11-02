import React from 'react';
import {Composition} from 'remotion';
import timeline from '../../timeline.json';
import {Episode} from './Episode';
const fps=timeline.fps;
const durationInFrames=Math.round(timeline.durationMs*fps/1000);
export const Root:React.FC=()=> <Composition id="MediaTekEpisode" component={Episode} durationInFrames={durationInFrames} fps={fps} width={1920} height={1080} />;
