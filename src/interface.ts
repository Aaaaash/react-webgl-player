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
  size: CanvasSize;

  onload?: () => void;
  onloaded?: () => void;
  ondestroy?: () => void;
  onseek?: (time: number) => void;
  onplay?: () => void;
  ondurationchange?: (duration: number) => void;
  onended?: () => void;
  onrender?: (currentTime: number) => void;
  onerror?: () => void;
  canvasId?: string;
  autoPlay?: boolean;
  play?: boolean;
  onPlaying?: (currentTime: number) => void;
}

export interface PlayerState {
  play: boolean;
}
