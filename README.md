# 한국마사회 API Helper

마사회 API type 정보, 지정된 type으로 코딩 실수를 미연에 방지

## install

### npm

```bash
$ npm install kra-types
```

### yarn

```bash
$ yarn add kra-types
```

## list

- DailyTraining
- EntryHorseWeightInfo
- JockeyInfo
- JockeyResult
- RaceHorseClinic
- RaceHorseInfo
- RaceHorseResult
- RacePlan
- RaceResult
- RidingTestResult
- SectionRecord
- StartingTraining
- SwimTraining
- Track
- TrainerInfo

> uptadedAt 23.7.15

## example

### racePlan 작성법

```ts
import { RacePlan, RacePlanRequestParams, racePlanInfo, RsponseData } from 'kra'

const getRacePlans = async (
	serviceKey: string,
	pageNo: number,
	numOfRows: number,
	meet?: number,
	rc_date?: number,
	rc_month?: number,
	rc_year?: number,
) => {
	const params: RacePlanRequestParams = {
		serviceKey,
		pageNo,
		numOfRows,
	}
	if (meet) params.meet = meet
	if (rc_date) params.rc_date = meet
	if (rc_month) params.rc_month = meet
	if (rc_year) params.rc_year = meet

	const r = await api.get<ResponseData<RacePlan[] | RacePlan>>(
		racePlanInfo.url,
		{
			params,
		},
	) // api is axios, fetch, etc..
	if (!r.data.response.body) return []
	if (!r.data.response.body.items) return []
	const itemsItem = r.data.response.body.items.item
	return Array.isArray(itemsItem) ? itemsItem : [itemsItem] // because length 1 is not array
}
```
