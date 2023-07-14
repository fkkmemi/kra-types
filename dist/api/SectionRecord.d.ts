import { RequestParams } from '../frame/RequestData';
import DataInfo from '../frame/DataInfo';
export declare const sectionRecordInfo: DataInfo;
export interface SectionRecordRequestParams extends RequestParams {
    hr_name?: string;
    hr_no?: string;
    meet?: number;
    rc_date?: number;
    rc_month?: number;
    rc_year?: number;
    _type?: string;
}
export interface SectionRecord {
    ARcTimeG1f: number;
    ARcTimeG3f: number;
    ARcTimeS1f: number;
    ARcTime_3c: number;
    ARcTime_4c: number;
    chulNo: number;
    FRcTimeG1f: number;
    FRcTimeG3f: number;
    FRcTimeS1f: number;
    FRcTime_3c: number;
    FRcTime_4c: number;
    hrName: string;
    hrNo: string;
    meet: string;
    rcDate: number;
    rcDist: number;
    rcNo: number;
    rcTime: number;
    SRcTimeG1f: number;
    SRcTimeG3f: number;
    SRcTimeS1f: number;
    SRcTime_3c: number;
    SRcTime_4c: number;
}
