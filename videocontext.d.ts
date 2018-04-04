declare module "videocontext" {
  class DestinationNode {
    // todo
  }

  class GraphNode {
    // todo
    public connect(targetNode: any): boolean;
  }

  class RenderGraph {
    // todo
  }
  class SourceNode extends GraphNode {
    constructor(
      src: string | SourceElement,
      gl: WebGLRenderingContext,
      renderGraph: RenderGraph,
      currentTime: number
    );

    element(): SourceElement;
    duration(): number;

    stretchPaused(stretchPaused: boolean): void;
    stretchPaused(): boolean;

    _load(): void;
    _unload(): void;

    registerCallback(type: string, func: Function): void;
    unregisterCallback(func: Function): void;

    _triggerCallbacks<T>(type: string, data: T): void;

    start(time: number): boolean;
    startAt(time: number): boolean;
    startTime(): number;
    stop(time: number): boolean;
    stopAt(time: number): boolean;
    stopTime(): number;

    _seek(time: number): void;

    _pause(): void;
    _play(): void;

    _isReady(): boolean;
    _update(currentTime: number, triggerTextureUpdate: boolean): boolean;

    clearTimelineState(): void;
    destroy(): void;
  }

  class VideoNode extends SourceNode {
    constructor(
      src: string | SourceElement,
      gl: WebGLRenderingContext,
      renderGraph: RenderGraph,
      globalPlaybackRate: number,
      sourceOffset: number,
      preloadTime: number,
      videoElementCache: number,
      attributes: object
    );

    playbackRate(playbackRate: number): void;
    stretchPaused(stretchPaused: boolean): void;
    stretchPaused(): boolean;

    playbackRate(): number;
    elementURL(): string;

    volume(volume: number): void;

    _load(): void;
    _unload(): void;

    _seek(time: number): void;
    _update(currentTime: number): boolean;
    clearTimelineState(): void;
    destroy(): void;
  }

  class ImageNode extends SourceNode {
    constructor(src: string | SourceElement, gl: WebGLRenderingContext, renderGraph: RenderGraph, currentTime: number, preloadTime: number, attribites: object);

    elementURL(): string;

    _load(): void;
    _unload(): void;
    _seek(time: number): void;
    _update(currentTime: number): boolean;
  }

  class CanvasNode extends SourceNode {
    constructor(src: string | SourceElement, gl: WebGLRenderingContext, renderGraph: RenderGraph, currentTime: number, preloadTime: number);

    _load(): void;
    _unload(): void;
    _seek(time: number): void;
    _update(currentTime: number): boolean;
  }

  class EffectNode {
    // todo
  }

  class CompositingNode {
    // todo
  }

  class TransitionNode {
    // todo
  }

  type SourceElement = HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;

  type WebglContextAttributes = {
    preserveDrawingBuffer: boolean;
    alpha: boolean;
  };

  type Options = {
    preserveDrawingBuffer: boolean;
    manualUpdate: boolean;
    endOnLastSourceEnd: boolean;
    useVideoElementCache: boolean;
    videoElementCacheSize: number;
    webglContextAttributes: WebglContextAttributes;
  };

  class VideoContext {
    constructor(canvas: HTMLCanvasElement, options?: Options);

    registerTimelineCallback(
      time: number,
      func: Function,
      ordering: number
    ): void;
    unregisterTimelineCallback(func: Function): void;

    registerCallback(type: string, func: Function): void;
    unregisterCallback(func: Function): void;

    element(): SourceElement;

    state(): number;

    duration(): number;

    currentTime(currentTime: number): void;
    currentTime(): number;

    destination(): DestinationNode;

    playbackRate(rate: number): void;
    playbackRate(): number;

    volume(vol: number): void;
    volume(): number;

    play(): boolean;

    pause(): boolean;

    video(
      src: string | SourceElement,
      sourceOffset?: number,
      preloadTime?: number,
      videoElementAttributes?: object
    ): VideoNode;

    image(
      src: string | SourceElement,
      preloadTime: number,
      imageElementAttributes: object
    ): ImageNode;

    canvas(canvas: HTMLCanvasElement): CanvasNode;

    effect(definition: object): EffectNode;

    compositor(definition: object): CompositingNode;

    transition(definition: object): TransitionNode;

    reset(): void;

    snapshot(): VideoContext;
  }

  export = VideoContext;
}
