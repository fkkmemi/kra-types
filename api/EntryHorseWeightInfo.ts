import { RequestParams } from '../frame/RequestData'

export const entryHorseWeightInfoInfo = {
	name: '출전마 체중 정보',
	apiNo: '15057498',
	key: 'hrNo-rcDate',
	url: '/B551015/API25_1/entryHorseWeightInfo_1',
	keyName: <Record<string, string>>{
		budam: '시행경마장명',
		chulNo: '마번(출주번호)',
		hrName: '마명',
		hrNo: '마번(고유번호)',
		meet: '제주',
		rcDate: '경주일자',
		rcDays: '경주요일',
		rcDist: '경주거리',
		rcName: '경주명',
		rcNo: '경주번호',
		recentRcDate: '최종출전일',
		wgHr: '마체중',
		wgHrDiff: '증감(kg)',
	},
}

export interface EntryHorseWeightInfoRequestParams extends RequestParams {
	hr_name?: string
	hr_no?: string
	meet?: number
	rc_date?: string
	rc_month?: string
	_type?: string
}

export interface EntryHorseWeightInfo {
	budam: string
	chulNo: number
	hrName: string
	hrNo: number
	meet: string
	rcDate: number
	rcDays: string
	rcDist: number
	rcName: string
	rcNo: number
	recentRcDate: string
	wgHr: number
	wgHrDiff: number
}
