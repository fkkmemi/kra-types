import { RequestParams } from '../common/RequestData'
import DataInfo from '../common/DataInfo'

export const trackInfo: DataInfo = {
	name: '경주로정보',
	apiNo: '15063953',
	url: '/B551015/API189_1/Track_1',
	key: 'meet-rcDate-rcNo',
	keyName: {
		humidityRel: '상대습도',
		meet: '경마장명',
		rcDate: '경주일자',
		rcNo: '경주번호',
		salinity: '염도',
		temperature: '기온',
		track: '주로상태',
		waterPercent: '함수율',
		weather: '날씨',
		windDirection: '풍향',
		windSpeed: '풍속(M/s)',
	},
}

export interface TrackRequestParams extends RequestParams {
	hr_name?: string
	hr_no?: string
	meet?: number
	rc_date_fr?: number
	rc_date_to?: number
	_type?: string
}

export interface Track {
	humidityRel: string
	meet: string
	rcDate: number
	rcNo: number
	salinity: string
	temperature: string
	track: string
	waterPercent: number
	weather: string
	windDirection: string
	windSpeed: string
}
