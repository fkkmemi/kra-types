"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiURL = exports.baseURL = void 0;
exports.baseURL = 'https://apis.data.go.kr';
const apiURL = (no) => `https://www.data.go.kr/data/${no}/openapi.do`;
exports.apiURL = apiURL;
__exportStar(require("./frame/RequestData"), exports);
__exportStar(require("./frame/ResponseData"), exports);
__exportStar(require("./frame/DataInfo"), exports);
__exportStar(require("./api/DailyTraining"), exports);
__exportStar(require("./api/EntryHorseWeightInfo"), exports);
__exportStar(require("./api/JockeyInfo"), exports);
__exportStar(require("./api/JockeyResult"), exports);
__exportStar(require("./api/RaceHorseClinic"), exports);
__exportStar(require("./api/RaceHorseInfo"), exports);
__exportStar(require("./api/RaceHorseResult"), exports);
__exportStar(require("./api/RacePlan"), exports);
__exportStar(require("./api/RaceResult"), exports);
__exportStar(require("./api/RidingTestResult"), exports);
__exportStar(require("./api/SectionRecord"), exports);
__exportStar(require("./api/StartingTraining"), exports);
__exportStar(require("./api/SwimTraining"), exports);
__exportStar(require("./api/Track"), exports);
__exportStar(require("./api/TrainerInfo"), exports);
