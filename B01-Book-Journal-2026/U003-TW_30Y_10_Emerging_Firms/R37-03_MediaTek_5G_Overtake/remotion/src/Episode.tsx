import React from 'react';
import {AbsoluteFill, Audio, Img, Sequence, interpolate, useCurrentFrame, staticFile} from 'remotion';
import timeline from '../../timeline.json';
const fps=timeline.fps;
const frameAt=(ms:number)=>Math.round(ms*fps/1000);
const scenes=timeline.scenes,subs=timeline.subtitles,chapters=timeline.chapters;
const serif='"DFKai-SB","BiauKai","標楷體","KaiTi","STKaiti",serif';
const SceneFrame:React.FC<{scene:typeof scenes[number];start:number;end:number}>=({scene,start,end})=>{
 const local=useCurrentFrame();const dur=Math.max(1,end-start);const p=Math.max(0,Math.min(1,local/dur));
 const fade=interpolate(local,[0,18],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const scale=scene.motion==='slowZoomOut'?1.08-.08*p:1+.08*p;
 const tx=scene.motion==='panLeft'?4-8*p:scene.motion==='panRight'?-4+8*p:0;
 const ty=scene.motion==='driftUp'?4-8*p:scene.motion==='driftDown'?-4+8*p:0;
 return <AbsoluteFill style={{opacity:fade,backgroundColor:'#17242b',overflow:'hidden'}}><Img src={staticFile(scene.image)} style={{width:'100%',height:'100%',objectFit:'cover',transform:`translate(${tx}%,${ty}%) scale(${scale})`}} /></AbsoluteFill>;
};
const Overlay:React.FC<{frame:number}>=({frame})=>{
 const ms=frame*1000/fps;
 const chapter=chapters.filter(c=>ms>=c.startMs).at(-1);
 const center=chapter&&ms<chapter.startMs+1800;
 const centerOpacity=chapter?Math.min(1,Math.max(0,(ms-chapter.startMs)/350),Math.max(0,(chapter.startMs+1800-ms)/350)):0;
 const cornerOpacity=chapter?Math.max(0,Math.min(1,(ms-(chapter.startMs+1800))/250)):0;
 const cue=subs.find(s=>ms>=s.startMs&&ms<s.endMs);
 const shot=scenes.filter(s=>ms>=s.startMs).at(-1);
 return <AbsoluteFill style={{pointerEvents:'none',color:'#fff',fontFamily:serif,fontWeight:800}}>
  {center&&<div style={{position:'absolute',inset:0,display:'grid',placeItems:'center',textAlign:'center',padding:60,opacity:centerOpacity,color:'#FFFF00',WebkitTextFillColor:'#FFFF00',WebkitTextStroke:0,fontWeight:900,fontSize:62,textShadow:'none'}}>{chapter.title}</div>}
  {!center&&chapter&&<div style={{position:'absolute',top:42,left:54,opacity:cornerOpacity,fontSize:32,color:'#FFFFFF',WebkitTextFillColor:'#FFFFFF',WebkitTextStroke:0,textShadow:'none'}}>{chapter.title}</div>}
  {cue&&<div style={{position:'absolute',bottom:80,left:70,right:70,textAlign:'center',fontSize:Math.max(20,Math.min(42,1740/cue.text.length)),fontWeight:900,color:'#FFFFFF',WebkitTextFillColor:'#FFFFFF',WebkitTextStroke:0,whiteSpace:'nowrap',backgroundColor:'rgba(0,0,0,.72)',borderRadius:10,padding:'6px 12px',textShadow:'none'}}>{cue.text.replace(/\s+/g,' ')}</div>}
  {shot&&<div style={{position:'absolute',bottom:20,left:28,fontFamily:'sans-serif',fontSize:16,color:'#fffd',textShadow:'0 1px 5px #000'}}>{shot.id}</div>}
 </AbsoluteFill>;
};
export const Episode:React.FC=()=>{
 const f=useCurrentFrame();
 return <AbsoluteFill style={{backgroundColor:'#17242b'}}>
  <Img src={staticFile('cover.webp')} style={{width:'100%',height:'100%',objectFit:'cover'}} />
  <Audio src={staticFile(timeline.audio)} />
  {scenes.map((s,i)=>{const from=frameAt(s.startMs),to=frameAt(s.endMs),overlap=i<scenes.length-1?18:0;return <Sequence key={s.id} from={from} durationInFrames={to-from+overlap}><SceneFrame scene={s} start={from} end={to}/></Sequence>;})}
  <Overlay frame={f}/>
 </AbsoluteFill>;
};
