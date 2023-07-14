import { RequestParams } from '../common/RequestData'
import DataInfo from '../common/DataInfo'

export const startingTrainingInfo: DataInfo = {
	name: '출발훈련 정보',
	apiNo: '15059043',
	url: '/B551015/API22_1/startingTranning_1',
	key: 'hrNo-trDate',
	keyName: {
		hrName: '마명',
		hrNo: '마번',
		meet: '시행경마장명',
		part: '소속조',
		partNo: '조번',
		prName: '기승자',
		remark: '훈련결과',
		trDate: '훈련일자',
	},
}
// todo: url 철자 표기 문제.. meet 제거
export interface StartingTrainingRequestParams extends RequestParams {
	tr_year?: number
	tr_month?: number
	tr_date?: number
	meet?: number // 23.7 require->optional
	_type?: string
}

export interface StartingTraining {
	hrName: string
	hrNo: string
	meet: string
	part: number
	partNo: number
	prName: string
	remark: string
	trDate: number
}
