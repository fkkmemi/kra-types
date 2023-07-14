import { RequestParams } from '../common/RequestData'
import DataInfo from '../common/DataInfo'

export const trainerInfoInfo: DataInfo = {
	name: '조교사 상세정보',
	apiNo: '15057915',
	url: '/B551015/API19_1/trainerInfo_1',
	key: 'trNo',
	keyName: {
		age: '나이',
		birthday: '생년월일',
		meet: '시행경마장명',
		ord1CntT: '통산1위횟수',
		ord1CntY: '최근1년1위횟수',
		ord2CntT: '통산2위횟수',
		ord2CntY: '최근1년2위횟수',
		ord3CntT: '통산3위횟수',
		ord3CntY: '최근1년3위횟수',
		part: '소속조',
		plcRateT: '통산연승률',
		plcRateY: '최근1년연승률',
		qnlRateT: '통산복승률',
		qnlRateY: '최근1년복승률',
		rcCntT: '통산출주횟수',
		rcCntY: '최근1년출주횟수',
		stDate: '데뷔일자',
		trName: '조교사명',
		trNo: '조교사번호',
		winRateT: '통산승률',
		winRateY: '최근1년승률',
	},
}

export interface TrainerInfoRequestParams extends RequestParams {
	tr_name?: string
	tr_no?: string
	meet?: number
	_type?: string
}

export interface TrainerInfo {
	age: string | number
	birthday: string | number
	meet: string
	ord1CntT: number
	ord1CntY: number
	ord2CntT: number
	ord2CntY: number
	ord3CntT: number
	ord3CntY: number
	part: number | string
	plcRateT: number
	plcRateY: number
	qnlRateT: number
	qnlRateY: number
	rcCntT: number
	rcCntY: number
	stDate: number
	trName: string
	trNo: string
	winRateT: number
	winRateY: number
}
