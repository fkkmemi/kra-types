import { RequestParams } from '../common/RequestData'

export interface RaceResultRequestParams extends RequestParams {
	// serviceKey: string
	// pageNo?: number // 사이트는 no require
	// numOfRows?: number // 사이트는 no require
	meet?: number
	rc_date?: number
	rc_month?: number
	rc_no?: number
	rc_year?: number
	_type?: string
}

export interface RaceResult {
	age: number
	ageCond: string
	buG1fAccTime: number
	buG1fOrd: number
	buG2fAccTime: number
	buG2fOrd: number
	buG3fAccTime: number
	buG3fOrd: number
	buG4fAccTime: number
	buG4fOrd: number
	buG6fAccTime: number
	buG6fOrd: number
	buG8fAccTime: number
	buG8fOrd: number
	buS1fAccTime: number
	buS1fOrd: number
	buS1fTime: number
	bu_10_8fTime: number
	bu_1fGTime: number
	bu_2fGTime: number
	bu_3fGTime: number
	bu_4_2fTime: number
	bu_6_4fTime: number
	bu_8_6fTime: number
	budam: string
	buga1: number
	buga2: number
	buga3: number
	chaksun1: number
	chaksun2: number
	chaksun3: number
	chaksun4: number
	chaksun5: number
	chulNo: number
	diffUnit: string
	hrName: string
	hrNo: string
	ilsu: number
	jeG1fTime: number
	jeG3fTime: number
	jeS1fTime: number
	je_1cTime: number
	je_2cTime: number
	je_3cTime: number
	je_4cTime: number
	jkName: string
	jkNo: string
	meet: string
	name: string
	ord: number
	owName: string
	owNo: number
	plcOdds: number
	prizeCond: string
	rank: string
	rating: number
	rcDate: number
	rcDay: string
	rcDist: number
	rcName: string
	rcNo: number
	rcTime: number
	seG1fAccTime: number
	seG3fAccTime: number
	seS1fAccTime: number
	se_1cAccTime: number
	se_2cAccTime: number
	se_3cAccTime: number
	se_4cAccTime: number
	sex: string
	sjG1fOrd: number
	sjG3fOrd: number
	sjS1fOrd: number
	sj_1cOrd: number
	sj_2cOrd: number
	sj_3cOrd: number
	sj_4cOrd: number
	trName: string
	trNo: string
	track: string
	weather: string
	wgBudam: number
	wgHr: string
	winOdds: number
}
