import { RequestParams } from '../common/RequestData';
export interface EntryHorseWeightInfoRequestParams extends RequestParams {
    hr_name?: string;
    hr_no?: string;
    meet?: number;
    rc_date?: string;
    rc_month?: string;
    _type?: string;
}
export interface EntryHorseWeightInfo {
    budam: string;
    chulNo: number;
    hrName: string;
    hrNo: number;
    meet: string;
    rcDate: number;
    rcDays: string;
    rcDist: number;
    rcName: string;
    rcNo: number;
    recentRcDate: string;
    wgHr: number;
    wgHrDiff: number;
}
