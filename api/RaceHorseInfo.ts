import { RequestParams } from '../frame/RequestData'
import DataInfo from '../frame/DataInfo'

export const raceHorseInfoInfo: DataInfo = {
	name: '경주마 상세정보',
	apiNo: '15058115',
	key: 'hrNo',
	url: '/B551015/API8_2/raceHorseInfo_2',
	keyName: {
		birthday: '생년월일',
		chaksunT: '통산착순상금',
		faHrName: '부마명',
		faHrNo: '부마번',
		hrLastAmt: '말도입가',
		hrName: '마명',
		hrNo: '마번',
		meet: '시행경마장명',
		moHrName: '모마명',
		moHrNo: '모마번',
		name: '출생지',
		ord1CntT: '통산1착회수',
		ord1CntY: '최근1년1착회수',
		ord2CntT: '통산2착회수',
		ord2CntY: '최근1년2착회수',
		ord3CntT: '통산3착회수',
		ord3CntY: '최근1년3착회수',
		owName: '마주명',
		owNo: '마주번호',
		rank: '등급',
		rating: '레이팅',
		rcCntT: '통산총출주회수',
		rcCntY: '최근1년총출주회수',
		sex: '성별',
		trName: '조교사명',
		trNo: '조교사번호',
	},
}

export interface RaceHorseInfoRequestParams extends RequestParams {
	hr_name?: string
	hr_no?: string // origin hr_no?: string
	meet?: number // '1' | '2' | '3' // origin: meet?: string
	_type?: string
	act_gubun?: string // default y, y:현역 n:은퇴 포함
}

export interface RaceHorseInfo {
	birthday: number
	chaksunT: number
	faHrName: string
	faHrNo: string
	hrLastAmt: string
	hrName: string
	hrNo: string
	meet: string
	moHrName: string
	moHrNo: string
	name: string
	ord1CntT: number
	ord1CntY: number
	ord2CntT: number
	ord2CntY: number
	ord3CntT: number
	ord3CntY: number
	owName: string
	owNo: string
	rank: string
	rating: number
	rcCntT: number
	rcCntY: number
	sex: string
	trName: string
	trNo: string
}
