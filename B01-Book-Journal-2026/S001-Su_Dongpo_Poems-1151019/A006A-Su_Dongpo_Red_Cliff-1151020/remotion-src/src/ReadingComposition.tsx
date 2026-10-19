import React from 'react';
import { Audio } from '@remotion/media';
import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import timeline from '../../data/timeline.json';

type Scene = typeof timeline.scenes[number];
type Chapter = typeof timeline.chapters[number];
const fadeMs = 520;
const frameMs = (frame: number, fps: number) => Math.round(frame * 1000 / fps);
const at = <T extends {startMs: number; endMs: number}>(rows: T[], ms: number): T =>
  rows.find((row, i) => ms >= row.startMs && (ms < row.endMs || i === rows.length - 1)) ?? rows[0];

const SceneLayer: React.FC<{scene: Scene; ms: number; opacity: number}> = ({scene, ms, opacity}) => {
  const progress = Math.max(0, Math.min(1, (ms - scene.startMs) / (scene.endMs - scene.startMs)));
  const seed = Number(scene.id.slice(-3));
  const zoom = 1.035 + (((seed * 17) % 9) / 100 - 0.035) * progress;
  let x = 0, y = 0, scale = zoom;
  if (scene.motionType === 'zoom-out') scale = 1.035 + (((seed * 17) % 9) / 100) * (1 - progress);
  if (scene.motionType === 'pan-left') { scale = 1.09; x = 1.2 - 2.4 * progress; }
  if (scene.motionType === 'pan-right') { scale = 1.09; x = -1.2 + 2.4 * progress; }
  if (scene.motionType === 'pan-up') { scale = 1.09; y = 1.2 - 2.4 * progress; }
  if (scene.motionType === 'pan-down') { scale = 1.09; y = -1.2 + 2.4 * progress; }
  return (
    <Img
      src={staticFile(`images/${scene.id}.webp`)}
      style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity, scale, translate: `${x}% ${y}%`}}
    />
  );
};

export const ReadingComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const ms = frameMs(frame, fps);
  const scene = at(timeline.scenes, ms) as Scene;
  const index = timeline.scenes.findIndex((item) => item.id === scene.id);
  const previous = index > 0 ? timeline.scenes[index - 1] as Scene : null;
  const into = ms - scene.startMs;
  const fade = previous && into < fadeMs ? Math.max(0, Math.min(1, into / fadeMs)) : 1;
  const chapter = at(timeline.chapters, ms) as Chapter;
  const introStart = chapter.speechStartMs;
  const introAge = ms - introStart;
  const introOpacity = introAge < 0 || introAge >= 1900 ? 0 : interpolate(introAge, [0, 350, 1450, 1900], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.linear});
  const cue = timeline.subtitles.find((item) => ms >= item.startMs && ms < item.endMs);
  return (
    <AbsoluteFill style={{backgroundColor: '#081216', fontFamily: 'DFKai-SB, BiauKai, KaiTi, serif', overflow: 'hidden'}}>
      <Audio src={staticFile('audio/narration.mp3')} playbackRate={1} />
      {previous && into < fadeMs && <SceneLayer scene={previous} ms={ms} opacity={1 - fade} />}
      <SceneLayer scene={scene} ms={ms} opacity={fade} />
      <AbsoluteFill style={{background: 'linear-gradient(180deg,rgba(5,20,28,.22),transparent 27%,transparent 66%,rgba(0,0,0,.43))'}} />
      <div style={{position: 'absolute', top: '3.2%', left: '3.5%', color: 'white', fontSize: 40, fontWeight: 900, textShadow: '2px 2px 4px #000'}}>{chapter.title}</div>
      <div style={{position: 'absolute', top: '50%', left: '50%', width: '88%', transform: 'translate(-50%,-50%)', color: '#fff200', fontSize: 88, fontWeight: 900, textAlign: 'center', opacity: introOpacity, textShadow: '2px 2px 5px #000'}}>{introOpacity > 0 ? chapter.title : ''}</div>
      <div style={{position: 'absolute', right: '3.5%', bottom: '4.2%', left: '3.5%', overflow: 'hidden', color: cue?.isVerse ? '#fff200' : 'white', fontSize: 34, fontWeight: 900, textAlign: 'center', whiteSpace: 'nowrap', textShadow: '-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000,0 3px 7px #000'}}>{cue?.text ?? ''}</div>
    </AbsoluteFill>
  );
};
