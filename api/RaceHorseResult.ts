import { RequestParams } from '../frame/RequestData'
import DataInfo from '../frame/DataInfo'

export const RaceHorseResultInfo: DataInfo = {
	name: '경주마 성적 정보',
	apiNo: '15058779',
	url: '/B551015/API15_2/raceHorseResult_2',
	key: 'hrNo',
	keyName: {
		age: '나이',
		chaksunT: '통산착순상금',
		chaksunY: '최근1년착순상금',
		chaksun_6: '최근6개월수득상금',
		debut: '데뷔일자',
		hrName: '마명',
		hrNo: '마번',
		meet: '시행경마장명',
		name: '산지',
		ord1CntT: '통산1착회수',
		ord1CntY: '최근1년1착회수',
		ord2CntT: '통산2착회수',
		ord2CntY: '최근1년2착회수',
		qnlRateT: '통산복승률',
		qnlRateY: '최근1년복승률',
		rcCntT: '통산총출주회수',
		rcCntY: '최근1년총출주회수',
		recentBudam: '최근경주부담종류',
		recentOrd: '최근경주순위',
		recentRank: '최근경주등급',
		recentRating: '최근경주레이팅',
		recentRcDate: '최근경주일자',
		recentRcDist: '최근경주거리',
		recentRcName: '최근경주명',
		recentRcNo: '최근경주번호',
		recentRcTime: '최근경주기록',
		recentWgBudam: '최근경주부담중량',
		recentWgHr: '최근경주마체중',
		sex: '성별',
		winRateT: '통산승률',
		winRateY: '최근1년승률',
	},
}
export interface RaceHorseResultRequestParams extends RequestParams {
	hr_name?: string
	hr_no?: string
	// meet?: number 5.12 remove
	_type?: string
}

export interface RaceHorseResult {
	age: number
	chaksunT: number
	chaksunY: number
	chaksun_6: number
	debut: number
	hrName: string
	hrNo: string
	meet: string
	name: string
	ord1CntT: number
	ord1CntY: number
	ord2CntT: number
	ord2CntY: number
	qnlRateT: number
	qnlRateY: number | string // -
	rcCntT: number
	rcCntY: number
	recentBudam: string
	recentOrd: number | string // -
	recentRank: string
	recentRating: number | string // -
	recentRcDate: number | string // -
	recentRcDist: number
	recentRcName: string
	recentRcNo: number
	recentRcTime: number
	recentWgBudam: number | string // -
	recentWgHr: number
	sex: string
	winRateT: number
	winRateY: number | string // -
}
