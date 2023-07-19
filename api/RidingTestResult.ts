import { RequestParams } from '../common/RequestData'

export interface RidingTestResultRequestParams extends RequestParams {
	meet?: number
	tr_date?: number
	tr_month?: number // 202306: 400
	tr_year?: number // 2022: 4574
	_type?: string
}

export interface RidingTestResult {
	age: number
	chulNo: number
	daySerial: number
	diffUnit: number | string
	g1f: number
	g2f: number
	g3f_4c: number
	g4f_3c: number
	g6f_2c: number
	g8f_1c: number
	hrName: string
	hrNo: string | number
	jkName: string
	jkNo: string
	majong: string
	meet: string
	name: string
	nopassReason: string
	ord: number
	passFlag: string
	passtime_3f: number
	passtime_4f: number
	rcTime: number
	rcTimeG1f: number
	rcTimeG3f: number
	rcTimeG400: number
	rcTimeS1f: number
	rcTime_1c: number
	rcTime_2c: number
	rcTime_3c: number
	rcTime_400: number
	rcTime_4c: number
	reason: string
	s1f: number
	sex: string
	trName: string
	trNo: string
	track: string
	trainDate: number
	trainDays: string
	trainNo: number
	weather: string
	wgBudam: number
	wgHr: number
	wgJkAdd: number
}
