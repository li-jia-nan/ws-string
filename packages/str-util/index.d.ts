/**
 * Created by user on 2017/12/8/008.
 */
export { isFullWidth, isFullwidthCodePoint } from './lib/is-fullwidth';
export { stringWidth } from './lib/width';
import { toFullNumber, toHalfNumber, toFullEnglish, toHalfEnglish, toFullWidth, toHalfWidth } from '@lazy-cjk/fullhalf';
import stripAnsi from 'strip-ansi';
export { normalize } from './lib/normalize';
export { trim, ITrimOptions } from './lib/trim';
export { zh2jp, jp2zhs, jp2zht } from './lib/han/zh2jp';
export { zh2num, num2zh } from '@lazy-cjk/zh2num';
export { charCodeAt } from '@lazy-cjk/str-util-char-code-at';
export { toFullNumber, toHalfNumber, toFullEnglish, toHalfEnglish, toFullWidth, toHalfWidth };
export { stripAnsi };
declare const _default: typeof import("./index");
export default _default;
