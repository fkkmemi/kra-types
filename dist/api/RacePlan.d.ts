import { RequestParams } from '../common/RequestData';
export interface RacePlanRequestParams extends RequestParams {
    meet?: number;
    rc_date?: number;
    rc_month?: number;
    rc_year?: number;
    _type?: string;
}
export interface RacePlan {
    ageCond: string;
    budam: string;
    buga1: number;
    buga2: number;
    buga3: number;
    chaksun1: number;
    chaksun2: number;
    chaksun3: number;
    chaksun4: number;
    chaksun5: number;
    ilsu: number;
    meet: string;
    rank: string;
    rcDate: number;
    rcDist: number;
    rcName: string;
    rcNo: number;
    schStTime: number;
    spRating: number;
    stRating: number;
}
