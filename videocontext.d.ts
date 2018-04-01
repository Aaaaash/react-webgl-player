
declare module 'videocontext' {

  class DestinationNode {
    // todo
  }

  class VideoNode {
    // todo
  }

  class ImageNode {
    // todo
  }


  class CanvasNode {
    // todo
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

  type WebglContextAttributes = {
    preserveDrawingBuffer: boolean,
    alpha: boolean,
  }

  type Options = {
    preserveDrawingBuffer: boolean,
    manualUpdate: boolean,
    endOnLastSourceEnd: boolean,
    useVideoElementCache: boolean,
    videoElementCacheSize: number,
    webglContextAttributes: WebglContextAttributes,
  }

  class VideoContext {
    constructor(canvas: HTMLCanvasElement, options?: Options);
  
    registerTimelineCallback(time: number, func: Function, ordering: number):void;
    unregisterTimelineCallback(func: Function): void;
  
    registerCallback(type: string, func: Function): void;
    unregisterCallback(func: Function): void;
  
    element(): HTMLCanvasElement;
    
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
  
    video(src: string, sourceOffset: number, preloadTime: number, videoElementAttributes: object): VideoNode;
  
    image(src: string, preloadTime: number, imageElementAttributes: object): ImageNode;
  
    canvas(canvas: HTMLCanvasElement): CanvasNode;
  
    effect(definition: object): EffectNode;
  
    compositor(definition: object): CompositingNode;
  
    transition(definition: object): TransitionNode;
  
    reset(): void;
  
    snapshot(): VideoContext;
  }
  
  export = VideoContext;
}
