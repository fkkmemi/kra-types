# 한국마사회 API types

typescript 개발을 위한 마사회 API type 정보, 지정된 type으로 코딩 실수를 미연에 방지

## list
- RacePlan
- RaceResult

## eg

```ts

import { RacePlan, RequestParamsRacePlan} from 'kra-types'

const getRacePlans = async (
  serviceKey: string,
  pageNo: number,
  numOfRows: number,
  meet?: number,
  rc_date?: number,
  rc_month?: number,
  rc_year?: number,
) => {
  const params: RequestParamsRacePlan = {
    serviceKey,
    pageNo,
    numOfRows, 
  }
  if (meet) params.meet = meet
  if (rc_date) params.rc_date = meet
  if (rc_month) params.rc_month = meet
  if (rc_year) params.rc_year = meet

  const r = await api.get<ResponseData<RacePlan[] | RacePlan>>(url, { 
    params,
  }) // api is axios, fetch, etc..
  if (!r.data.response.body) return []
  if (!r.data.response.body.items) return []
  const itemsItem = r.data.response.body.items.item
  return Array.isArray(itemsItem) ? itemsItem : [itemsItem] // because length 1 is not array
}
```