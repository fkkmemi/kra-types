export const baseURL = 'https://apis.data.go.kr'
export const apiURL = (no: string) =>
	`https://www.data.go.kr/data/${no}/openapi.do`

export * from './common/RequestData'
export * from './common/ResponseData'
export * from './common/DataInfo'

export * from './api/DailyTraining'
export * from './api/EntryHorseWeightInfo'
export * from './api/JockeyInfo'
export * from './api/JockeyResult'
export * from './api/RaceHorseClinic'
export * from './api/RaceHorseInfo'
export * from './api/RaceHorseResult'
export * from './api/RacePlan'
export * from './api/RaceResult'
export * from './api/RidingTestResult'
export * from './api/SectionRecord'
export * from './api/StartingTraining'
export * from './api/SwimTraining'
export * from './api/Track'
export * from './api/TrainerInfo'
