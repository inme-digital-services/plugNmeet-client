export interface IWhiteboardSlice {
  excalidrawElements: string;
  mousePointerLocation: string;
  whiteboardFiles: string;
  requestedWhiteboardData: IRequestWhiteboardData;
}

export interface IWhiteboardFile {
  id: string;
  filePath: string;
  fileName: string;
}

export interface IRequestWhiteboardData {
  requested: boolean;
  sendTo: string;
}