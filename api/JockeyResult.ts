import { RequestParams } from '../frame/RequestData'
import DataInfo from '../frame/DataInfo'

export const jockeyResultInfo: DataInfo = {
	name: '기수 성적 정보',
	apiNo: '15056591',
	url: '/B551015/API11_1/jockeyResult_1',
	key: 'jkNo',
	keyName: {
		jkName: '기수명',
		jkNo: '기수번호',
		meet: '시행경마장명',
		ord1CntT: '통산1위횟수',
		ord1CntY: '최근1년1위횟수',
		ord2CntT: '통산2위횟수',
		ord2CntY: '최근1년2위횟수',
		qnlRateT: '통산복승률',
		qnlRateY: '최근1년복승률',
		rcCntT: '통산출주횟수',
		rcCntY: '최근1년출주횟수',
		winRateT: '통산승률',
		winRateY: '최근1년승률',
	},
}
export interface JockeyResultRequestParams extends RequestParams {
	jk_name?: string
	jk_no?: string
	meet?: number
	_type?: string
}

export interface JockeyResult {
	jkName: string
	jkNo: string
	meet: string
	ord1CntT: number
	ord1CntY: number
	ord2CntT: number
	ord2CntY: number
	qnlRateT: number
	qnlRateY: number
	rcCntT: number
	rcCntY: number
	winRateT: number
	winRateY: number
}
