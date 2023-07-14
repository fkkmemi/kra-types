export interface RequestParams {
    serviceKey: string;
    pageNo: number;
    numOfRows: number;
}
export interface RequestData<T> {
    url: string;
    params: T;
}
