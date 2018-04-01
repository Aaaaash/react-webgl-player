import React from 'react';
import { storiesOf } from '@storybook/react';

import Player from '../src';

storiesOf('Player', module)
  .add('with text', () => <Player source="data.mp4" canvasId="myWebGl-player" />)
