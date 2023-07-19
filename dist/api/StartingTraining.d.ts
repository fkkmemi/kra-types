import { RequestParams } from '../common/RequestData';
export interface StartingTrainingRequestParams extends RequestParams {
    tr_year?: number;
    tr_month?: number;
    tr_date?: number;
    meet?: number;
    _type?: string;
}
export interface StartingTraining {
    hrName: string;
    hrNo: string;
    meet: string;
    part: number;
    partNo: number;
    prName: string;
    remark: string;
    trDate: number;
}
