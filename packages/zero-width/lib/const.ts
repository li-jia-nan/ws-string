/**
 * Created by user on 2019/8/7.
 */

export const enum ENUM_ZERO_WIDTH
{
	NON_JOINER = '\u200c',
	JOINER = '\u200d',

	SPACE = '\u200b',

	NO_BREAK_SPACE = '\ufeff',
	BOM = '\ufeff',

	LEFT_TO_RIGHT_MARK = '\u200e',
	RIGHT_TO_LEFT_MARK = '\u200f',

	WORD_JOINER = '\u2060',

	/**
	 * no need remove
	 * @see https://zh.wikipedia.org/wiki/%E7%B5%84%E5%90%88%E9%99%84%E5%8A%A0%E7%AC%A6%E8%99%9F
	 * @see https://unicode-table.com/cn/034F/
	 */
	COMBINING_GRAPHEME_JOINER = '\u034f',
}

/**
 * @see https://unicode-table.com/en/blocks/variation-selectors/
 */
export const enum ENUM_VARIATION_SELECTORS
{
	/**
	 * 	VARIATION SELECTOR-1
	 */
	'FE00' = '\uFE00',
	/**
	 * 	VARIATION SELECTOR-2
	 */
	'FE01' = '\uFE01',
	/**
	 * 	VARIATION SELECTOR-3
	 */
	'FE02' = '\uFE02',
	/**
	 * 	VARIATION SELECTOR-4
	 */
	'FE03' = '\uFE03',
	/**
	 * 	VARIATION SELECTOR-5
	 */
	'FE04' = '\uFE04',
	/**
	 * 	VARIATION SELECTOR-6
	 */
	'FE05' = '\uFE05',
	/**
	 * 	VARIATION SELECTOR-7
	 */
	'FE06' = '\uFE06',
	/**
	 * 	VARIATION SELECTOR-8
	 */
	'FE07' = '\uFE07',
	/**
	 * 	VARIATION SELECTOR-9
	 */
	'FE08' = '\uFE08',
	/**
	 * 	VARIATION SELECTOR-10
	 */
	'FE09' = '\uFE09',
	/**
	 * 	VARIATION SELECTOR-11
	 */
	'FE0A' = '\uFE0A',
	/**
	 * 	VARIATION SELECTOR-12
	 */
	'FE0B' = '\uFE0B',
	/**
	 * 	VARIATION SELECTOR-13
	 */
	'FE0C' = '\uFE0C',
	/**
	 * 	VARIATION SELECTOR-14
	 */
	'FE0D' = '\uFE0D',
	/**
	 * 	VARIATION SELECTOR-15
	 */
	'FE0E' = '\uFE0E',
	/**
	 * 	VARIATION SELECTOR-16
	 */
	'FE0F' = '\uFE0F',
}

/**
 * too many give up
 * @see https://unicode-table.com/cn/blocks/variation-selectors-supplement/
 * @deprecated
 */
export const enum ENUM_VARIATION_SELECTORS_SUPPLEMENT
{

}

export const enum ENUM_SPACE
{
	/**
	 * 空格符 (space character)
	 * @type {string}
	 */
	SPACE = '\u0020',
	NO_BREAK_SPACE = '\u00a0',

	/**
	 * `　`
	 */
	FULL_WIDTH_SPACE = '\u3000',

	/**
	 * `\t`
	 */
	TAB = '\u0009',
	/**
	 * `\t`
	 * 制表符 (tab character)
	 */
	HORIZONTAL_TABULATION = '\u0009',

	/**
	 * `\v`
	 * 垂直换行符 (vertical tab character)
	 */
	VERTICAL_TABULATION = '\u000b',

	/**
	 * `\r`
	 * 回车符 (carriage return character)
	 */
	CARRIAGE_RETURN = '\u000d',

	/**
	 * `\n`
	 * 换行符 (new line character)
	 */
	NEW_LINE = '\u000a',

	/**
	 * `\b`
	 */
	BACKSPACE = '\u0008',

	/**
	 * `\f` => 000c
	 * 换页符 (form feed character)
	 *
	 * @see https://unicode-table.com/cn/000C/
	 */
	FORM_FEED = '\u000c',
}
