import { RequestParams } from '../frame/RequestData';
import DataInfo from '../frame/DataInfo';
export declare const dailyTrainingInfo: DataInfo;
export interface DailyTrainingRequestParams extends RequestParams {
    hr_name?: string;
    hr_no?: string;
    meet?: number;
    tr_date?: number;
    tr_month?: number;
    _type?: string;
}
export interface DailyTraining {
    chulGubun: string;
    hrName: string;
    hrNo: string;
    meet: string;
    part: number;
    partNo: number;
    prGubun: string;
    prNo: string;
    run1Cnt: number;
    run2Cnt: number;
    spTime: number;
    stTime: number;
    trDate: number;
    trName: string;
    trTerm: number;
}
