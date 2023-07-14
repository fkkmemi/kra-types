import { RequestParams } from '../common/RequestData'
import DataInfo from '../common/DataInfo'

export const raceResultInfo: DataInfo = {
	name: '경주기록 정보',
	apiNo: '15058305',
	url: '/B551015/API4_2/raceResult_2',
	key: 'meet-rcDate-rcNo-chulNo',
	keyName: <Record<string, string>>{
		age: '연령',
		ageCond: '연령조건',
		buG1fAccTime: '부경G1F통과누적기록',
		buG1fOrd: '부경G1F통과순위',
		buG2fAccTime: '부경G2F통과누적기록',
		buG2fOrd: '부경G2F통과순위',
		buG3fAccTime: '부경G3F통과누적기록',
		buG3fOrd: '부경G3F통과순위',
		buG4fAccTime: '부경G4F통과누적기록',
		buG4fOrd: '부경G4F통과순위',
		buG6fAccTime: '부경G6F통과누적기록',
		buG6fOrd: '부경G6F통과순위',
		buG8fAccTime: '부경G8F통과누적기록',
		buG8fOrd: '부경G8F통과순위',
		buS1fAccTime: '부경S1F통과누적기록',
		buS1fOrd: '부경S1F통과순위',
		buS1fTime: '부경S1F통과기록',
		bu_10_8fTime: '부경10-8F통과기록',
		bu_1fGTime: '부경1F-G통과기록',
		bu_2fGTime: '부경2F-G통과기록',
		bu_3fGTime: '부경3F-G통과기록',
		bu_4_2fTime: '부경4-2F통과기록',
		bu_6_4fTime: '부경6-4F통과기록',
		bu_8_6fTime: '부경8-6F통과기록',
		budam: '부담구분',
		buga1: '부가상금1',
		buga2: '부가상금2',
		buga3: '부가상금3',
		chaksun1: '1착상금',
		chaksun2: '2착상금',
		chaksun3: '3착상금',
		chaksun4: '4착상금',
		chaksun5: '5착상금',
		chulNo: '출주번호',
		diffUnit: '착차',
		hrName: '마명',
		hrNo: '마번',
		ilsu: '경주일수',
		jeG1fTime: '제주G-1F통과기록',
		jeG3fTime: '제주G-3F통과기록',
		jeS1fTime: '제주S-1F통과기록',
		je_1cTime: '제주1코너통과기록',
		je_2cTime: '제주2코너통과기록',
		je_3cTime: '제주3코너통과기록',
		je_4cTime: '제주4코너통과기록',
		jkName: '기수명',
		jkNo: '기수번호',
		meet: '시행경마장명',
		name: '국적',
		ord: '순위',
		owName: '마주명',
		owNo: '마주번호',
		plcOdds: '복승식 배당율',
		prizeCond: '경주조건',
		rank: '등급조건',
		rating: '레이팅(등급)',
		rcDate: '경주일자',
		rcDay: '경주요일',
		rcDist: '경주거리',
		rcName: '경주명',
		rcNo: '경주번호',
		rcTime: '경주기록',
		seG1fAccTime: '서울G1F통과누적기록',
		seG3fAccTime: '서울G3F통과누적기록',
		seS1fAccTime: '서울S1F통과누적기록',
		se_1cAccTime: '서울1코너통과누적기록',
		se_2cAccTime: '서울2코너통과누적기록',
		se_3cAccTime: '서울3코너통과누적기록',
		se_4cAccTime: '서울4코너통과누적기록',
		sex: '성별',
		sjG1fOrd: '서울,제주G1F구간통과순위(서울,제주공통)',
		sjG3fOrd: '서울,제주G3F구간통과순위(서울,제주공통)',
		sjS1fOrd: '서울,제주S1F구간통과순위(서울,제주공통)',
		sj_1cOrd: '서울,제주1코너구간통과순위(서울,제주공통)',
		sj_2cOrd: '서울,제주2코너구간통과순위(서울,제주공통)',
		sj_3cOrd: '서울,제주3코너구간통과순위(서울,제주공통)',
		sj_4cOrd: '서울,제주4코너구간통과순위(서울,제주공통)',
		trName: '조교사명',
		trNo: '조교사번호',
		track: '주로',
		weather: '날씨',
		wgBudam: '부담중량',
		wgHr: '마체중',
		winOdds: '단승식 배당율',
	},
}

export interface RaceResultRequestParams extends RequestParams {
	// serviceKey: string
	// pageNo?: number // 사이트는 no require
	// numOfRows?: number // 사이트는 no require
	meet?: number
	rc_date?: number
	rc_month?: number
	rc_no?: number
	rc_year?: number
	_type?: string
}

export interface RaceResult {
	age: number
	ageCond: string
	buG1fAccTime: number
	buG1fOrd: number
	buG2fAccTime: number
	buG2fOrd: number
	buG3fAccTime: number
	buG3fOrd: number
	buG4fAccTime: number
	buG4fOrd: number
	buG6fAccTime: number
	buG6fOrd: number
	buG8fAccTime: number
	buG8fOrd: number
	buS1fAccTime: number
	buS1fOrd: number
	buS1fTime: number
	bu_10_8fTime: number
	bu_1fGTime: number
	bu_2fGTime: number
	bu_3fGTime: number
	bu_4_2fTime: number
	bu_6_4fTime: number
	bu_8_6fTime: number
	budam: string
	buga1: number
	buga2: number
	buga3: number
	chaksun1: number
	chaksun2: number
	chaksun3: number
	chaksun4: number
	chaksun5: number
	chulNo: number
	diffUnit: string
	hrName: string
	hrNo: string
	ilsu: number
	jeG1fTime: number
	jeG3fTime: number
	jeS1fTime: number
	je_1cTime: number
	je_2cTime: number
	je_3cTime: number
	je_4cTime: number
	jkName: string
	jkNo: string
	meet: string
	name: string
	ord: number
	owName: string
	owNo: number
	plcOdds: number
	prizeCond: string
	rank: string
	rating: number
	rcDate: number
	rcDay: string
	rcDist: number
	rcName: string
	rcNo: number
	rcTime: number
	seG1fAccTime: number
	seG3fAccTime: number
	seS1fAccTime: number
	se_1cAccTime: number
	se_2cAccTime: number
	se_3cAccTime: number
	se_4cAccTime: number
	sex: string
	sjG1fOrd: number
	sjG3fOrd: number
	sjS1fOrd: number
	sj_1cOrd: number
	sj_2cOrd: number
	sj_3cOrd: number
	sj_4cOrd: number
	trName: string
	trNo: string
	track: string
	weather: string
	wgBudam: number
	wgHr: string
	winOdds: number
}
