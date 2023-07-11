import { RequestParams } from '../frame/RequestData'
import DataInfo from '../frame/DataInfo'

export const dailyTrainingInfo: DataInfo = {
	name: '일별훈련 상세정보',
	apiNo: '15058782',
	url: '/B551015/API18_1/dailyTraining_1',
	key: 'hrNo-stTime',
	keyName: {
		chulGubun: '출주예정마',
		hrName: '마명',
		hrNo: '마번',
		meet: '시행경마장명',
		part: '소속조',
		partNo: '조번',
		prGubun: '기승자구분',
		prNo: '기승자사번',
		run1Cnt: '구보',
		run2Cnt: '습보',
		spTime: '조교종료시간',
		stTime: '조교시작시간',
		trDate: '훈련일자',
		trName: '조교사명',
		trTerm: '훈련시간(초)',
	},
}

export interface DailyTrainingRequestParams extends RequestParams {
	hr_name?: string
	hr_no?: string
	meet?: number
	tr_date?: number
	tr_month?: number
	_type?: string
}

export interface DailyTraining {
	chulGubun: string
	hrName: string
	hrNo: string
	meet: string
	part: number
	partNo: number
	prGubun: string
	prNo: string
	run1Cnt: number
	run2Cnt: number
	spTime: number
	stTime: number
	trDate: number
	trName: string
	trTerm: number
}
