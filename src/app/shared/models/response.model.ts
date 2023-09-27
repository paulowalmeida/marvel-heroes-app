export interface ResponseModel<T> {
  attributionText: string;
  data: ResponseDataModel<T>;
}

export interface ResponseDataModel<T> {
  total: number;
  results: T[];
}
