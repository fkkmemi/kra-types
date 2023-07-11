interface ResponseHeader {
  resultCode: string | number
  resultMsg: string
}
interface ResponseBody<T> {
  items:
    | ''
    | {
        item: T | T[]
      }
  numOfRows: number
  pageNo: number
  totalCount: number
}

interface ResponseData<T> {
  response: {
    body?: ResponseBody<T>
    header: ResponseHeader
  }
}

export default ResponseData
