import { RequestParams } from '../frame/RequestData';
import DataInfo from '../frame/DataInfo';
export declare const jockeyInfoInfo: DataInfo;
export interface JockeyInfoRequestParams extends RequestParams {
    jk_name?: string;
    jk_no?: string;
    meet?: number;
    _type?: string;
}
export interface JockeyInfo {
    age: string | number;
    birthday: number | string;
    debut: number;
    jkName: string;
    jkNo: string;
    meet: string;
    ord1CntT: number;
    ord1CntY: number;
    ord2CntT: number;
    ord2CntY: number;
    ord3CntT: number;
    ord3CntY: number;
    part: string | number;
    rcCntT: number;
    rcCntY: number;
    spDate: string | number;
    wgOther: number;
    wgPart: number;
}
