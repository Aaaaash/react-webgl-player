import * as React from 'react';
import { PureComponent } from 'react';
import VideoContext from 'videocontext';

import {
  PlayerProps,
  SourceVideo,
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
    const { sources, size } = this.props;

    this.canvas = (document.getElementById(this.canvasId) as HTMLCanvasElement);
    this.canvas.width = size.width;
    this.canvas.height = size.height;

    this.ctx = new VideoContext(this.canvas);
    this.renderVideoBySource(sources);
    this.ctx.registerCallback('ended', this.videocontextEnded);
  }

  public videoNodeStateLoad = () => {
    console.log('load');
  }

  public videoNodeStateLoaded = () => {
    console.log('loaded');
  }

  public renderVideoBySource = (sources: SourceVideo[] | string) => {
    if (typeof sources === 'string') {
      const videoNode = this.ctx.video(sources, 0);
      videoNode.start(0);
      videoNode.stop(100);
      videoNode.registerCallback('load', this.videoNodeStateLoad);
      videoNode.registerCallback('loaded', this.videoNodeStateLoaded);
      videoNode.connect(this.ctx.destination);
    } else {
      sources.forEach((source) => {
        this.connectVideoNodeToDestination(source.src, source.start, source.end);
      });
    }
    if (this.props.autoPlay) {
      this.ctx.play();
    }
  }

  private connectVideoNodeToDestination = (url: string, start: number = 0, end: number = 100) => {
    const videoNode = this.ctx.video(url, 0);
    videoNode.start(start);
    videoNode.stop(end);
    videoNode.registerCallback('load', this.videoNodeStateLoad);
    videoNode.registerCallback('loaded', this.videoNodeStateLoaded);
    videoNode.connect(this.ctx.destination);
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
