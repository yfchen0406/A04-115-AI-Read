import React from 'react';
import {AbsoluteFill, Audio, Img, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

type Props = {voice: 'Chinese-Taiwan-YunJhe'|'Chinese-Taiwan-HsiaoChen'};
const files = { 'Chinese-Taiwan-YunJhe': 'reader-YunJhe.js', 'Chinese-Taiwan-HsiaoChen': 'reader-HsiaoChen.js' };

export const Reading: React.FC<Props> = ({voice}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const data = (globalThis as any).__READER_DATA__;
  const t = frame / fps;
  const scene = data.visualScenes.find((s: any) => t >= s.start && t < s.end) ?? data.visualScenes.at(-1);
  const caption = data.captions.find((s: any) => t >= s.start && t < s.end)?.text ?? '';
  const progress = scene ? (t - scene.start) / Math.max(.01, scene.end - scene.start) : 0;
  return <AbsoluteFill style={{background:'#173a4a', overflow:'hidden', fontFamily:'DFKai-SB, BiauKai, Microsoft JhengHei'}}>
    <Sequence from={0} durationInFrames={Math.ceil(data.totalDuration * fps)}>
      <Audio src={staticFile(`assets/audio/${voice}.mp3`)} />
      <Img src={staticFile(scene.image)} style={{width:'100%',height:'100%',objectFit:'cover',transform:`scale(${interpolate(progress,[0,1],[1.03,1.09])})`}} />
      <div style={{position:'absolute',top:24,left:36,color:'#fff',fontSize:34,fontWeight:900,textShadow:'0 3px 8px #000'}}>{scene.chapter}</div>
      <div style={{position:'absolute',bottom:40,left:'5%',right:'5%',color:'#fff',fontSize:48,fontWeight:900,textAlign:'center',whiteSpace:'pre-line',textShadow:'0 3px 8px #000,0 0 10px #000'}}>{caption}</div>
    </Sequence>
  </AbsoluteFill>;
};
