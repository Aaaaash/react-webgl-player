type CanvasSize = {
  width: number;
  height: number;
}

export type SourceVideo = {
  src: string;
  start: number;
  end: number;
}

export interface PlayerProps {
  sources: SourceVideo[] | string;
  canvasId?: string;
  size: CanvasSize;
  autoPlay?: boolean;
}

