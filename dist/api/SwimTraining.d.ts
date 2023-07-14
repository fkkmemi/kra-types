import { RequestParams } from '../common/RequestData';
import DataInfo from '../common/DataInfo';
export declare const swimTrainingInfo: DataInfo;
export interface SwimTrainingRequestParams extends RequestParams {
    tr_year?: number;
    tr_month?: number;
    tr_date?: number;
}
export interface SwimTraining {
    cnt: number;
    horsepart: number;
    horsepartMemo: string;
    hrName: string;
    hrNo: string;
    meet: string;
    trDate: number;
    trName: string;
    trpart: number;
}
