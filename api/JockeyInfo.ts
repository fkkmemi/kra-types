import { RequestParams } from '../common/RequestData'
import DataInfo from '../common/DataInfo'

export const jockeyInfoInfo: DataInfo = {
	name: '기수 상세정보',
	apiNo: '15056828',
	url: '/B551015/API12_1/jockeyInfo_1',
	key: 'jkNo',
	keyName: {
		age: '나이',
		birthday: '생년월일',
		debut: '데뷔일자',
		jkName: '기수명',
		jkNo: '기수번호',
		meet: '시행경마장명',
		ord1CntT: '통산1착횟수',
		ord1CntY: '최근1년1착횟수',
		ord2CntT: '통산2착횟수',
		ord2CntY: '최근1년2착횟수',
		ord3CntT: '통산3착횟수',
		ord3CntY: '최근1년3착횟수',
		part: '소속조',
		rcCntT: '통산총출주횟수',
		rcCntY: '최근1년총출주횟수',
		spDate: '은퇴일자',
		wgOther: '기능가능중량_타조',
		wgPart: '기능가능중량_소속조',
	},
}

export interface JockeyInfoRequestParams extends RequestParams {
	jk_name?: string
	jk_no?: string
	meet?: number
	_type?: string
}

export interface JockeyInfo {
	age: string | number
	birthday: number | string
	debut: number
	jkName: string
	jkNo: string
	meet: string
	ord1CntT: number
	ord1CntY: number
	ord2CntT: number
	ord2CntY: number
	ord3CntT: number
	ord3CntY: number
	part: string | number
	rcCntT: number
	rcCntY: number
	spDate: string | number
	wgOther: number
	wgPart: number
}
