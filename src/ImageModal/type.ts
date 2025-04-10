export interface ImageModalInterface {
  _id: string;
  device: string;
}

export type SwaiResponse = {
  result: "ok" | "error";
  message: string;
  data: widgetData;
};

export type widgetData = {
  id: string;
  pageId: string;
  brandId: string;
  widgetId: string;
  widgetType: WIDGET_TYPE;
  value: string;
};

export enum WIDGET_TYPE {
  "ImageModal"
}
