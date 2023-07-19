import { RequestParams } from '../common/RequestData'

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
