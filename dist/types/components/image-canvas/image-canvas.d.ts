import { ContentDataImg, ContentDataText } from '../type';
export declare class ImageCanvas {
  el: HTMLElement;
  /**
   * With
   */
  wCanvas: number;
  /**
   * Height
   */
  hCanvas: number;
  /**
   * With
   */
  wImageBg: number;
  /**
   * Height
   */
  hImageBg: number;
  /**
   * Canvas fillStroke
   */
  canvasFillStyle: string;
  /**
   * canvas.font  string style
   */
  fontCanvas: string;
  /**
   * canvas.content
   */
  content: ContentDataText[] | ContentDataImg[];
  imgLoading: boolean;
  private canvas;
  private centerText;
  componentWillLoad(): void;
  __createCanvas(): HTMLCanvasElement;
  __loadData(): void;
}
