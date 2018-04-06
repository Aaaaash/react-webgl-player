import * as React from 'react';
import { PureComponent } from 'react';
import VideoContext, { SourceNode } from 'videocontext';

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

  public videoStateLoad = (): void => {
    this.props.onload && this.props.onload();
  }

  public videoStateLoaded = () => {
    this.props.onloaded && this.props.onloaded();
  }

  public videodestroy = () => {
    this.props.ondestroy && this.props.ondestroy();
  }

  public videoSeek = (node: SourceNode, time: number) => {
    this.props.onseek && this.props.onseek(time);
  }

  public videoPlay = () => {
    this.props.onplay && this.props.onplay();
  }

  public videoDurationChange = (node: SourceNode, duration: number) => {
    this.props.ondurationchange && this.props.ondurationchange(duration);
  }

  public videoRender = (node: SourceNode, currentTime: number) => {
    this.props.onrender && this.props.onrender(currentTime);
  }

  public videoEnded = () => {
    this.props.onended && this.props.onended();
  }

  public videoError = () => {
    this.props.onerror && this.props.onerror();
  }

  public renderVideoBySource = (sources: SourceVideo[] | string): void => {
    if (typeof sources === 'string') {
      this.connectVideoNodeToDestination(sources);
    } else {
      sources.forEach((source: SourceVideo) => {
        this.connectVideoNodeToDestination(source.src, source.start, source.end);
      });
    }
    if (this.props.autoPlay) {
      this.ctx.play();
    }
  }

  private connectVideoNodeToDestination = (url: string, start: number = 0, end: number = Infinity): void => {
    const videoNode = this.ctx.video(url, 0);
    videoNode.start(start);
    videoNode.stop(end);
    videoNode.registerCallback('load', this.videoStateLoad);
    videoNode.registerCallback('loaded', this.videoStateLoaded);
    videoNode.registerCallback('durationchange', this.videoDurationChange);
    videoNode.registerCallback('play', this.videoPlay);
    videoNode.registerCallback('render', this.videoRender);
    videoNode.registerCallback('seek', this.videoSeek);
    videoNode.registerCallback('destory', this.videodestroy);
    videoNode.registerCallback('ended', this.videoEnded);
    videoNode.registerCallback('error', this.videoError);
    videoNode.connect(this.ctx.destination);
  }

  public videocontextEnded(): void {

  }

  public resetPlayer = (): void => {
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
