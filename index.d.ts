/**
 * Created by user on 2017/12/8/008.
 */
export { isFullWidth, isFullwidthCodePoint } from './lib/is-fullwidth';
export { stringWidth } from './lib/width';
import { FullHalfCore, toFullNumber, toHalfNumber, toFullEnglish, toHalfEnglish, toFullWidth, toHalfWidth } from './lib/fullhalf';
import * as stripAnsi from 'strip-ansi';
export { trim, ITrimOptions } from './lib/trim';
export { zh2jp, jp2zhs, jp2zht } from './lib/han/zh2jp';
export { zh2num, num2zh } from './lib/han/zh2num';
export { charCodeAt } from './lib/util';
export declare const tableFullHalf: FullHalfCore.ITable[];
export { toFullNumber, toHalfNumber, toFullEnglish, toHalfEnglish, toFullWidth, toHalfWidth };
export { stripAnsi };
export default exports;
