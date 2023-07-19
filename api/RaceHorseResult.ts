import { RequestParams } from '../common/RequestData'

export interface RaceHorseResultRequestParams extends RequestParams {
	hr_name?: string
	hr_no?: string
	// meet?: number 5.12 remove
	_type?: string
}

export interface RaceHorseResult {
	age: number
	chaksunT: number
	chaksunY: number
	chaksun_6: number
	debut: number
	hrName: string
	hrNo: string
	meet: string
	name: string
	ord1CntT: number
	ord1CntY: number
	ord2CntT: number
	ord2CntY: number
	qnlRateT: number
	qnlRateY: number | string // -
	rcCntT: number
	rcCntY: number
	recentBudam: string
	recentOrd: number | string // -
	recentRank: string
	recentRating: number | string // -
	recentRcDate: number | string // -
	recentRcDist: number
	recentRcName: string
	recentRcNo: number
	recentRcTime: number
	recentWgBudam: number | string // -
	recentWgHr: number
	sex: string
	winRateT: number
	winRateY: number | string // -
}
