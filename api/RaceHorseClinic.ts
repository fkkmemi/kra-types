import { RequestParams } from '../common/RequestData'

export interface RaceHorseClinicRequestParams extends RequestParams {
	clinic_date?: number
	clinic_month?: number
	clinic_year?: number
	hr_name?: string
	hr_no?: string // origin hr_no?: string
	meet?: number // '1' | '2' | '3' // origin: meet?: string
	_type?: string
}

export interface RaceHorseClinic {
	clinicDate: number
	hospiName: string
	hrName: string
	hrNo: string
	illName1: string
	illName2: string
	meet: string
	part: number
}
