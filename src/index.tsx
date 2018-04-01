import * as React from 'react';
import { PureComponent } from 'react';

import {
  PlayerProps,
} from './interface';

class Player extends PureComponent<PlayerProps> {
  render() {
    return (
      <canvas id="webgl-player-canvas"></canvas>
    );
  }
}

export default Player;
