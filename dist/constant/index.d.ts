export declare const baseURL = "https://apis.data.go.kr";
export declare const apiURL: (no: string) => string;
interface MeetRecord {
    no: number;
    label: string;
    color: string;
    colorCode: string;
    imagePub: string;
    name: string;
    dists: number[];
}
export declare const Meet: Record<string, MeetRecord>;
export declare const MeetInfos: MeetRecord[];
export declare const WeekMeets: Record<number, string[]>;
export declare const SexText: Record<string, string>;
export {};
