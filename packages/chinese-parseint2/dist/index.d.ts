export declare const characters: Readonly<{
	readonly "\uFF10": 0;
	readonly 零: 0;
	readonly "\u25CB": 0;
	readonly 〇: 0;
	readonly 洞: 0;
	readonly "\uFF11": 1;
	readonly 一: 1;
	readonly 壹: 1;
	readonly ㄧ: 1;
	readonly 弌: 1;
	readonly 么: 1;
	readonly "\uFF12": 2;
	readonly 二: 2;
	readonly 貳: 2;
	readonly 贰: 2;
	readonly 弍: 2;
	readonly 兩: 2;
	readonly 两: 2;
	readonly "\uFF13": 3;
	readonly 三: 3;
	readonly 參: 3;
	readonly 叁: 3;
	readonly 弎: 3;
	readonly 参: 3;
	readonly 叄: 3;
	readonly "\uFF14": 4;
	readonly 四: 4;
	readonly 肆: 4;
	readonly 䦉: 4;
	readonly 刀: 4;
	readonly "\uFF15": 5;
	readonly 五: 5;
	readonly 伍: 5;
	readonly "\uFF16": 6;
	readonly 六: 6;
	readonly 陸: 6;
	readonly 陆: 6;
	readonly "\uFF17": 7;
	readonly 七: 7;
	readonly 柒: 7;
	readonly 拐: 7;
	readonly "\uFF18": 8;
	readonly 八: 8;
	readonly 捌: 8;
	readonly 杯: 8;
	readonly "\uFF19": 9;
	readonly 九: 9;
	readonly 玖: 9;
	readonly 勾: 9;
	readonly 十: 10;
	readonly 拾: 10;
	readonly 什: 10;
	readonly 呀: 10;
	readonly 百: 100;
	readonly 佰: 100;
	readonly 千: 1000;
	readonly 仟: 1000;
	readonly 念: 20;
	readonly 廿: 20;
	readonly 卅: 30;
	readonly 卌: 40;
	readonly 皕: 200;
	readonly 萬: 10000;
	readonly 万: 10000;
	readonly 億: 100000000;
	readonly 亿: 100000000;
	readonly 兆: 1000000000000;
	readonly 京: 10000000000000000;
	readonly 經: 10000000000000000;
	readonly 经: 10000000000000000;
	readonly 垓: 100000000000000000000;
	readonly 秭: 1e+24;
	readonly 杼: 1e+24;
	readonly 穰: 1e+28;
	readonly 壤: 1e+28;
	readonly 溝: 1e+32;
	readonly 沟: 1e+32;
	readonly 澗: 1e+36;
	readonly 涧: 1e+36;
	readonly 正: 1e+40;
	readonly 載: 1e+44;
	readonly 極: 1e+48;
}>;
export declare function _isNegative(str: string): boolean;
export declare function isSpecialCharVal(char: string | keyof typeof characters): char is keyof typeof characters;
export declare function getSpecialCharVal(char: string | keyof typeof characters): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 100 | 1000 | 20 | 30 | 40 | 200 | 10000 | 100000000 | 1000000000000 | 10000000000000000 | 100000000000000000000 | 1e+24 | 1e+28 | 1e+32 | 1e+36 | 1e+40 | 1e+44 | 1e+48;
export declare function chinese_parseInt(str: string, radix?: number): number;
export declare function _chineseParseIntCore(str: string): number;

export {
	chinese_parseInt as default,
};

export {};
