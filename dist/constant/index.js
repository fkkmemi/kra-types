"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SexText = exports.WeekMeets = exports.MeetInfos = exports.Meet = exports.apiURL = exports.baseURL = void 0;
exports.baseURL = 'https://apis.data.go.kr';
const apiURL = (no) => `https://www.data.go.kr/data/${no}/openapi.do`;
exports.apiURL = apiURL;
exports.Meet = {
    전체: {
        no: 0,
        label: '전체',
        color: 'grey-7',
        colorCode: '#616161',
        imagePub: '',
        name: '',
        dists: [],
    },
    서울: {
        no: 1,
        label: '서울',
        color: 'primary',
        colorCode: '#0077DD',
        imagePub: 'ijrc_pub',
        name: '서울',
        dists: [1000, 1200, 1300, 1400, 1600, 1700, 1800, 1900, 2000, 2300],
    },
    제주: {
        no: 2,
        label: '제주',
        color: 'negative',
        colorCode: '#DB0000',
        imagePub: 'jris_pub',
        name: '제주',
        dists: [400, 800, 900, 1000, 1100, 1200, 1400, 1610, 1700, 1800],
    },
    부산경남: {
        no: 3,
        label: '부경',
        color: 'positive',
        colorCode: '#1CB500',
        imagePub: 'pris_pub',
        name: '부산경남',
        dists: [1000, 1200, 1300, 1400, 1500, 1600, 1800, 1900, 2000, 2200],
    },
    부경: {
        // api meet '부산경남' or '부경'
        no: 3,
        label: '부경',
        color: 'positive',
        colorCode: '#1CB500',
        imagePub: 'pris_pub',
        name: '부산경남',
        dists: [1000, 1200, 1300, 1400, 1500, 1600, 1800, 1900, 2000, 2200],
    },
};
exports.MeetInfos = [exports.Meet.전체, exports.Meet.서울, exports.Meet.제주, exports.Meet.부산경남];
exports.WeekMeets = {
    5: ['제주', '부산경남'],
    6: ['서울', '제주'],
    0: ['서울', '부산경남'],
};
exports.SexText = {
    수: '수말',
    암: '암말',
    거: '거세말',
};
