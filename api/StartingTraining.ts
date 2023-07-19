import { RequestParams } from '../common/RequestData'

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
