import { RequestParams } from '../frame/RequestData'
import DataInfo from '../frame/DataInfo'

export const swimTrainingInfo: DataInfo = {
	name: '수영훈련정보',
	apiNo: '15063981',
	url: '/B551015/API216/SwimTr',
	key: 'hrNo-trDate',
	keyName: {
		cnt: '수영조교횟수',
		horsepart: '마필조번',
		horsepartMemo: '마필조번메모',
		hrName: '마명',
		hrNo: '마명',
		meet: '경마장명',
		trDate: '수영조교일',
		trName: '조교사명',
		trpart: '조교사조번',
	},
}

export interface SwimTrainingRequestParams extends RequestParams {
	tr_year?: number
	tr_month?: number
	tr_date?: number
}

export interface SwimTraining {
	cnt: number
	horsepart: number
	horsepartMemo: string
	hrName: string
	hrNo: string
	meet: string
	trDate: number
	trName: string
	trpart: number
}
