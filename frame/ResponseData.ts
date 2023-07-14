export interface ResponseHeader {
	resultCode: string | number
	resultMsg: string
}
export interface ResponseBody<T> {
	items: '' | { item: T }
	numOfRows: number
	pageNo: number
	totalCount: number
}

export interface ResponseData<T> {
	response: {
		body?: ResponseBody<T>
		header: ResponseHeader
	}
}

// export default ResponseData
