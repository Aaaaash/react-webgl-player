type CanvasSize = {
  width: number;
  height: number;
}

export interface PlayerProps {
  source: String[] | string;
  canvasId?: string;
  size: CanvasSize;
}

