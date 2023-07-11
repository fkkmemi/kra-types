export const baseURL = 'https://apis.data.go.kr'
export const apiURL = (no: string) =>
	`https://www.data.go.kr/data/${no}/openapi.do`
export * from './api/RacePlan'
export * from './api/RaceResult'
export * from './api/DailyTraining'
export * from './api/EntryHorseWeightInfo'
export * from './frame/RequestData'
export * from './frame/ResponseData'
