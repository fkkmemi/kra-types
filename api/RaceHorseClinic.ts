import { RequestParams } from '../common/RequestData'
import DataInfo from '../common/DataInfo'

export const raceHorseClinicInfo: DataInfo = {
	name: '마필진료 정보',
	apiNo: '15057799',
	url: '/B551015/API16_1/raceHorseClinic_1',
	key: 'clinicDate-hrNo',
	keyName: {
		clinicDate: '진료일자',
		hospiName: '선진경마장제',
		hrName: '마명',
		hrNo: '마번',
		illName1: '진료내역1',
		illName2: '진료내역2',
		meet: '시행경마장명',
		part: '소속조',
	},
}
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
