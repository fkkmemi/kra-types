import { RequestParams } from '../frame/RequestData';
import DataInfo from '../frame/DataInfo';
export declare const raceHorseClinicInfo: DataInfo;
export interface RaceHorseClinicRequestParams extends RequestParams {
    clinic_date?: number;
    clinic_month?: number;
    clinic_year?: number;
    hr_name?: string;
    hr_no?: string;
    meet?: number;
    _type?: string;
}
export interface RaceHorseClinic {
    clinicDate: number;
    hospiName: string;
    hrName: string;
    hrNo: string;
    illName1: string;
    illName2: string;
    meet: string;
    part: number;
}
