import React from 'react';
import {Composition} from 'remotion';
import {Reading} from './Reading';

export const Root: React.FC = () => <>
  <Composition id="Reading" component={Reading} durationInFrames={30 * 60 * 30} fps={30} width={1920} height={1080} defaultProps={{voice: 'Chinese-Taiwan-YunJhe'}} />
</>;
