import { RequestParams } from '../frame/RequestData'
import DataInfo from '../frame/DataInfo'

export const sectionRecordInfo: DataInfo = {
	name: '마필 구간별 경주기록',
	apiNo: '15057859',
	url: '/B551015/API37_1/sectionRecord_1',
	key: 'meet-rcDate-rcNo-chulNo-hrNo',
	keyName: {
		ARcTimeG1f: 'G1F 평균기록',
		ARcTimeG3f: 'G3F 평균기록',
		ARcTimeS1f: 'S1F 평균기록',
		ARcTime_3c: '3C 평균기록',
		ARcTime_4c: '4C 평균기록',
		chulNo: '출주번호',
		FRcTimeG1f: 'G1F 최고기록',
		FRcTimeG3f: 'G3F 최고기록',
		FRcTimeS1f: 'S1F 최고기록',
		FRcTime_3c: '3C 최고기록',
		FRcTime_4c: '4C 최고기록',
		hrName: '마명',
		hrNo: '마번',
		meet: '시행경마장명',
		rcDate: '경주일',
		rcDist: '경주거리',
		rcNo: '경주번호',
		rcTime: '최고기록',
		SRcTimeG1f: 'G1F 최저기록',
		SRcTimeG3f: 'G3F 최저기록',
		SRcTimeS1f: 'S1F 최저기록',
		SRcTime_3c: '3C 최저기록',
		SRcTime_4c: '4C 최저기록',
	},
}

export interface SectionRecordRequestParams extends RequestParams {
	hr_name?: string
	hr_no?: string
	meet?: number
	rc_date?: number // origin require but no need
	rc_month?: number
	rc_year?: number
	_type?: string
}

export interface SectionRecord {
	ARcTimeG1f: number
	ARcTimeG3f: number
	ARcTimeS1f: number
	ARcTime_3c: number
	ARcTime_4c: number
	chulNo: number
	FRcTimeG1f: number
	FRcTimeG3f: number
	FRcTimeS1f: number
	FRcTime_3c: number
	FRcTime_4c: number
	hrName: string
	hrNo: string
	meet: string
	rcDate: number
	rcDist: number
	rcNo: number
	rcTime: number
	SRcTimeG1f: number
	SRcTimeG3f: number
	SRcTimeS1f: number
	SRcTime_3c: number
	SRcTime_4c: number
}
