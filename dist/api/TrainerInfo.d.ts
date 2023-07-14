import { RequestParams } from '../frame/RequestData';
import DataInfo from '../frame/DataInfo';
export declare const trainerInfoInfo: DataInfo;
export interface TrainerInfoRequestParams extends RequestParams {
    tr_name?: string;
    tr_no?: string;
    meet?: number;
    _type?: string;
}
export interface TrainerInfo {
    age: string | number;
    birthday: string | number;
    meet: string;
    ord1CntT: number;
    ord1CntY: number;
    ord2CntT: number;
    ord2CntY: number;
    ord3CntT: number;
    ord3CntY: number;
    part: number | string;
    plcRateT: number;
    plcRateY: number;
    qnlRateT: number;
    qnlRateY: number;
    rcCntT: number;
    rcCntY: number;
    stDate: number;
    trName: string;
    trNo: string;
    winRateT: number;
    winRateY: number;
}
