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
    this.canvasId = props.canvasId || 'webgl_player_canvas';
  }

  public componentDidMount(): void {
    const { source } = this.props;
    this.canvas = (document.getElementById(this.canvasId) as HTMLCanvasElement);
    this.ctx = new VideoContext(this.canvas);
    this.renderVideoBySource(source);
    this.ctx.registerCallback('ended', this.videocontextEnded);
  }

  public videoNodeStateLoad = () => {
    console.log('load');
  }

  public videoNodeStateLoaded = () => {
    console.log('loaded');
  }

  public renderVideoBySource = (source: String[] | string) => {
    const videoNode = this.ctx.video((source as string));
    videoNode.registerCallback('load', this.videoNodeStateLoad);
    videoNode.registerCallback('loaded', this.videoNodeStateLoaded);
    videoNode.connect(this.ctx.destination);
    this.ctx.play();
  }

  public videocontextEnded(): void {

  }

  public resetPlayer = () => {
    this.ctx.reset();
  }

  render() {
    const { canvasId } = this.props;
    return (
      <canvas id={canvasId || "webgl-player-canvas"}></canvas>
    );
  }
}

export default Player;
