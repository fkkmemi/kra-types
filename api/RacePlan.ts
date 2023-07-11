// const info = {
//   name: '경주계획표',
//   url: 'https://www.data.go.kr/data/15056499/openapi.do',
//   key: meet-rcDate-rcNo
// }
import { RequestParams } from '../frame/RequestData'

export const racePlanURL = '/B551015/API72_1/racePlan_1'

export interface RacePlanRequestParams extends RequestParams {
	meet?: number // origin: meet?: string
	rc_date?: number // ?: string
	rc_month?: number // ?: string
	rc_year?: number //?: string
	_type?: string
}

export interface RacePlan {
	ageCond: string
	budam: string
	buga1: number
	buga2: number
	buga3: number
	chaksun1: number
	chaksun2: number
	chaksun3: number
	chaksun4: number
	chaksun5: number
	ilsu: number
	meet: string
	rank: string
	rcDate: number
	rcDist: number
	rcName: string
	rcNo: number
	schStTime: number
	spRating: number
	stRating: number
}

export const RacePlanKeyName = {
	ageCond: '연령조건',
	budam: '부담구분',
	buga1: '1착부가상금',
	buga2: '2착부가상금',
	buga3: '3착부가상금',
	chaksun1: '1착상금',
	chaksun2: '2착상금',
	chaksun3: '3착상금',
	chaksun4: '4착상금',
	chaksun5: '5착상금',
	ilsu: '경주차수',
	meet: '시행경마장명',
	rank: '등급조건',
	rcDate: '경주일자',
	rcDist: '경주거리',
	rcName: '경주명',
	rcNo: '경주번호',
	schStTime: '발주예정시각',
	spRating: '레이팅상한조건',
	stRating: '레이팅하한조건',
}
