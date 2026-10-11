import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import timeline from '../public/data/timeline.json';

const FPS = timeline.fps;
const clamp01 = (value) => Math.max(0, Math.min(1, value));
const motionStyle = (scene, time) => {
  const ratio = clamp01((time - scene.startSeconds) / Math.max(0.001, scene.endSeconds - scene.startSeconds));
  const kind = scene.motion;
  const scale = kind === 'push' ? 1 + ratio * 0.05 : kind === 'pull' ? 1.05 - ratio * 0.05 : kind === 'settle' ? 1.02 + ratio * 0.02 : 1.045;
  const x = kind === 'pan-left' ? 1.25 - ratio * 2.5 : kind === 'pan-right' ? -1.25 + ratio * 2.5 : kind === 'diagonal' ? -0.8 + ratio * 1.6 : 0;
  const y = kind === 'pan-up' ? 1.25 - ratio * 2.5 : kind === 'pan-down' ? -1.25 + ratio * 2.5 : kind === 'diagonal' ? 0.6 - ratio * 1.2 : 0;
  return {scale, translate: `${x}% ${y}%`};
};

export const Timeline = () => {
  const frame = useCurrentFrame();
  const now = frame / FPS;
  const sceneIndex = Math.max(0, timeline.scenes.findIndex((item) => now >= item.startSeconds && now < item.endSeconds));
  const scene = timeline.scenes[sceneIndex] || timeline.scenes.at(-1);
  const next = timeline.scenes[sceneIndex + 1];
  const chapter = timeline.chapters.find((item) => item.id === scene.chapterId);
  const cue = timeline.displaySegments.find((item) => now >= item.startSeconds && now < item.endSeconds);
  const chapterAge = now - chapter.startSeconds;
  const chapterOpacity = chapterAge < 3 ? interpolate(chapterAge, [0, 0.5, 2.2, 3], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 0;
  const sameRun = next && Math.abs(next.startSeconds - scene.endSeconds) < 0.002;
  const fadeDuration = sameRun && next.chapterId !== scene.chapterId ? 0.9 : 0.65;
  const fadeStart = sameRun ? Math.max(scene.startSeconds, scene.endSeconds - fadeDuration) : scene.endSeconds;
  const fade = sameRun && now >= fadeStart ? interpolate(now, [fadeStart, scene.endSeconds], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 0;
  const currentMotion = motionStyle(scene, now);
  const nextMotion = next ? motionStyle(next, now) : null;
  return <AbsoluteFill style={{backgroundColor: '#173b2e', color: 'white', fontFamily: 'DFKai-SB, BiauKai, KaiTi, serif', overflow: 'hidden'}}>
    <Audio src={staticFile('audio/narration.mp3')} />
    <Img src={staticFile(scene.imagePath)} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', scale: currentMotion.scale, translate: currentMotion.translate}} />
    {sameRun && fade > 0 && <Img src={staticFile(next.imagePath)} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: fade, scale: nextMotion.scale, translate: nextMotion.translate}} />}
    <div style={{position: 'absolute', top: 22, left: 34, padding: '8px 14px', fontSize: 28, fontWeight: 900, background: '#071821bb', textShadow: '0 2px 5px black'}}>{chapter.title}</div>
    {chapterOpacity > 0 && <div style={{position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: '#fff200', fontSize: 56, fontWeight: 900, opacity: chapterOpacity, textAlign: 'center', textShadow: '0 2px 6px black'}}>{chapter.displayTitle}</div>}
    {cue && <div style={{position: 'absolute', bottom: 26, left: '5%', width: '90%', textAlign: 'center', fontSize: 32, lineHeight: 1.35, fontWeight: 900, textShadow: '0 2px 7px black, 0 0 3px black'}}>{cue.text}</div>}
  </AbsoluteFill>;
};
