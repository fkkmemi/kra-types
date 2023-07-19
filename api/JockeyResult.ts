import { RequestParams } from '../common/RequestData'

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
