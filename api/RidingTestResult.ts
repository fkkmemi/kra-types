import { RequestParams } from '../frame/RequestData'
import DataInfo from '../frame/DataInfo'

export const ridingTestResultInfo: DataInfo = {
	name: '주행심사 상세결과',
	apiNo: '15056974',
	url: '/B551015/API20_1/ridingTestResult_1',
	key: 'meet-trainDate-trainNo-chulNo',
	keyName: {
		age: '연령',
		chulNo: '마번(출주번호)',
		daySerial: '심사차수',
		diffUnit: '도착차',
		g1f: 'G1F 순위',
		g2f: 'G2F(부경) 순위',
		g3f_4c: 'G3F/4C(부경/서울,제주) 순위',
		g4f_3c: 'G4F/3C(부경/서울,제주) 순위',
		g6f_2c: 'G6F/2C(부경/서울,제주) 순위',
		g8f_1c: 'G8F/1C(부경/서울,제주) 순위',
		hrName: '마명',
		hrNo: '마번(고유번호)',
		jkName: '기수명',
		jkNo: '기수번호',
		majong: '마종(제주한정)',
		meet: '시행경마장명',
		name: '산지',
		nopassReason: '불합격사유',
		ord: '순위',
		passFlag: '판정',
		passtime_3f: '3펄롱',
		passtime_4f: '4펄롱',
		rcTime: '통과기록',
		rcTimeG1f: 'G1F 기록',
		rcTimeG3f: 'G3F 기록',
		rcTimeG400: 'G400기록(부경)',
		rcTimeS1f: 'S1F 기록',
		rcTime_1c: '1C 기록',
		rcTime_2c: '2C 기록',
		rcTime_3c: '3C 기록',
		rcTime_400: '400 기록(부경)',
		rcTime_4c: '4C 기록',
		reason: '검사사유',
		s1f: 'S1F 순위',
		sex: '성별',
		trName: '조교사명',
		trNo: '조교사번호',
		track: '주로상태',
		trainDate: '주행심사일자',
		trainDays: '주행심사요일',
		trainNo: '경주번호',
		weather: '날씨',
		wgBudam: '부담중량',
		wgHr: '마체중',
		wgJkAdd: '기수초과중량',
	},
}

export interface RidingTestResultRequestParams extends RequestParams {
	meet?: number
	tr_date?: number
	tr_month?: number
	tr_year?: number
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
