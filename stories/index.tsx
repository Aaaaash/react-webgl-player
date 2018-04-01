import React from 'react';
import { storiesOf } from '@storybook/react';

import Player from '../src';

const url = 'https://qncdn.miaopai.com/stream/X4gSp4TEgzPKLGwdo0wttILPbfcuFqzFqOLS6Q___0_1522491266.mp4?ssig=a1298bbcfe098992e3c0b99c776208e1&time_stamp=1522596262206';


storiesOf('Player', module)
  .add('with text', () => <Player source={url} canvasId="myWebGl-player" />)
