import { RequestParams } from '../common/RequestData';
import DataInfo from '../common/DataInfo';
export declare const raceHorseInfoInfo: DataInfo;
export interface RaceHorseInfoRequestParams extends RequestParams {
    hr_name?: string;
    hr_no?: string;
    meet?: number;
    _type?: string;
    act_gubun?: string;
}
export interface RaceHorseInfo {
    birthday: number;
    chaksunT: number;
    faHrName: string;
    faHrNo: string;
    hrLastAmt: string;
    hrName: string;
    hrNo: string;
    meet: string;
    moHrName: string;
    moHrNo: string;
    name: string;
    ord1CntT: number;
    ord1CntY: number;
    ord2CntT: number;
    ord2CntY: number;
    ord3CntT: number;
    ord3CntY: number;
    owName: string;
    owNo: string;
    rank: string;
    rating: number;
    rcCntT: number;
    rcCntY: number;
    sex: string;
    trName: string;
    trNo: string;
}
