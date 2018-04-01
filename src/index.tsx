import * as React from 'react';
import { PureComponent } from 'react';
import VideoContext from 'videocontext';
import {
  PlayerProps,
} from './interface';

class Player extends PureComponent<PlayerProps> {
  canvasId: string;
  canvas: HTMLCanvasElement;
  ctx: VideoContext;

  public constructor(props: PlayerProps) {
    super(props);
    if (props.canvasId) {
      this.canvasId = props.canvasId;
    } else {
      this.canvasId = 'webgl_player_canvas';
    }
  }

  public componentDidMount(): void {
    this.canvas = (document.getElementById(this.canvasId) as HTMLCanvasElement);
    this.ctx = new VideoContext(this.canvas);
    this.ctx.registerCallback('ended', this.videocontextEnded);
  }

  public videocontextEnded(): void {

  }

  render() {
    const { canvasId } = this.props;
    return (
      <canvas id={canvasId || "webgl-player-canvas"}></canvas>
    );
  }
}

export default Player;
