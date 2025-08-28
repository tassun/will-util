declare class Arguments {
    private static isParameterOption;
    static getString(args?: string[] | null, defaultValue?: string | null, ...options: string[]): string | undefined | null;
    static getDate(args?: string[] | null, defaultValue?: Date | null, ...options: string[]): Date | undefined | null;
    static getInteger(args?: string[] | null, defaultValue?: number | null, ...options: string[]): number | undefined | null;
    static getFloat(args?: string[] | null, defaultValue?: number | null, ...options: string[]): number | undefined | null;
    static getBoolean(args?: string[] | null, defaultValue?: boolean | null, ...options: string[]): boolean | undefined | null;
}
export { Arguments };

export declare class Iterator<T> {
    private values;
    private index;
    constructor(values: T[]);
    hasNext(): boolean;
    next(): T;
}

export declare class RandomUtility {
    static readonly ALPHABETS: string[];
    static readonly NUMERICS: string[];
    static getRandomNum(min: number, max: number): number;
    static random(len?: number, alphabets?: string[]): string;
    static randomNumber(len?: number, alphabets?: string[]): string;
}

export declare class StringTokenizer {
    private text;
    private separator;
    private returnSeparator;
    constructor(text: string, separator?: string, returnSeparator?: boolean);
    private indexOf;
    tokenize(): string[];
    iterator(): Iterator<string>;
}

export declare class Utilities {
    static readonly NORMAL = 0;
    static readonly INTER = 1;
    static readonly SHORT = 0;
    static readonly LONG = 1;
    static SHORT_MONTH_ARRAY: string[];
    static LONG_MONTH_ARRAY: string[];
    static SHORT_WEEK_DAY: string[];
    static LONG_WEEK_DAY: string[];
    /**
     * To get base directory if base name is src or dist
     * @param dir
     * @returns string
     */
    static getWorkingDir(dir: string, parentnames?: string[]): string;
    /**
     * To get date in format dd/MM/yyyy
     * @param now Date or undefind
     * @returns string
     */
    static getDateNow(now?: Date): string;
    /**
     * To get time in format HH:mm:ss
     * @param now Date or undefined
     * @returns string
     */
    static getTimeNow(now?: Date): string;
    /**
     * To get datetime in format dd/MM/yyyy HH:mm:ss
     * @param now Date or undefined
     * @returns string
     */
    static getDateTimeNow(now?: Date): string;
    /**
     * To get date in format yyyy-MM-dd
     * @param now Date or undefined
     * @returns string
     */
    static getYMD(now?: Date): string;
    /**
     * To get date in format dd/MM/yyyy
     * @param now Date or undefined
     * @returns string
     */
    static getDMY(now?: Date): string;
    /**
     * To format Date to dd/MM/yyyy or yyyy-MM-dd
     * @param now Date or undefined
     * @param ymd boolean default false
     * @returns string
     */
    static formatDate(now?: Date, ymd?: boolean): string;
    /**
     * To format time HH:mm:ss
     * @param now Date or undefined
     * @returns string
     */
    static formatTime(now?: Date): string;
    /**
     * To format date into dd/MM/yyyy HH:mm:ss or yyyy-MM-dd HH:mm:ss
     * @param now Date or undefined
     * @param ymd boolean default false
     * @returns string
     */
    static formatDateTime(now?: Date, ymd?: boolean): string;
    /**
     * To format time HH:mm:ss
     * @param now Date or undefined
     * @returns string
     */
    static getHMS(now?: Date): string;
    /**
     * To format Date to yyyy-MM-dd
     * @param now Date or undefined
     * @returns string
     */
    static currentDate(now?: Date): string;
    /**
     * To format time to HH:mm:ss
     * @param now Date or undefined
     * @returns string
     */
    static currentTime(now?: Date): string;
    /**
     * To format Date to yyyy-MM-dd HH:mm:ss
     * @param now Date or undefined
     * @returns string
     */
    static currentDateTime(now?: Date): string;
    /**
     * To get current time in milli seconds
     * @param now Date or undefined
     * @returns number
     */
    static currentTimeMillis(now?: Date): number;
    /**
     * To add number of days into Date
     * @param days number
     * @param date Date or undefined
     * @returns Date
     */
    static addDays(days: number, date?: Date): Date;
    /**
     * To compare between date
     * @param adate Date or undefined
     * @param bdate Date or undefined
     * @returns number, -1 = lesser than, 0 = equal , 1 = greater than
     */
    static compareDate(adate?: Date, bdate?: Date): number;
    /**
     * To compare between time
     * @param adate Date or undefined
     * @param bdate Date or undefined
     * @returns number, -1 = lesser than, 0 = equal , 1 = greater than
     */
    static compareTime(adate?: Date, bdate?: Date): number;
    /**
     * To compare between datetime
     * @param adate Date or undefined
     * @param bdate Date or undefined
     * @returns number, -1 = lesser than, 0 = equal , 1 = greater than
     */
    static compareDateTime(adate?: Date, bdate?: Date): number;
    /**
     * To compare string value
     * @param astr string
     * @param bstr string
     * @returns number, -1 = lesser than, 0 = equal , 1 = greater than
     */
    static compareString(astr?: string, bstr?: string): number;
    /**
     * To check string equals with ignore case
     * @param astr string
     * @param bstr string
     * @returns boolean
     */
    static equalsIgnoreCase(astr?: string, bstr?: string): boolean;
    /**
     * To check data is string or not
     * @param value any
     * @returns boolean
     */
    static isString(value: any): boolean;
    /**
     * To check attributes is in object element
     * @param element unknown
     * @param attributes string array
     * @returns boolean
     */
    static hasAttributes: <T extends string>(element: unknown, attributes: T[]) => element is Record<T, unknown>;
    /**
     * To parse integer (especially from string)
     * @param dataValue any
     * @param defaultValue number
     * @returns number
     */
    static parseInteger(dataValue?: any, defaultValue?: number): number | undefined;
    /**
     * To parse float (especially from string)
     * @param dataValue any
     * @param defaultValue number
     * @returns number
     */
    static parseFloat(dataValue?: any, defaultValue?: number): number | undefined;
    /**
     * To parse boolean (especially from string)
     * @param dataValue any
     * @param defaultValue boolean
     * @returns boolean
     */
    static parseBoolean(dataValue?: any, defaultValue?: boolean): boolean | undefined;
    /**
     * To parse Date with data value string in format dd/MM/yyyy, yyyy-MM-dd, dd/MM/yyyy HH:mmss, yyyy-MM-dd HH:mm:ss
     * @param dataValue
     * @param defaultValue
     * @returns Date
     */
    static parseDate(dataValue?: any, defaultValue?: Date): Date | undefined;
    /**
 * To parse time with data value string in format HH:mm:ss
 * @param dataValue
 * @param defaultValue
 * @returns Date
 */
    static parseTime(dataValue?: string, defaultValue?: Date): Date | undefined;
    /**
     * get current date/time now
     * @returns Date
     */
    static now(): Date;
    /**
     * try to translate variables in template with foramt ${key} with value in variables
     * @returns string
     */
    static translateVariables(template: string, variables: any): string;
    /**
     * serialize timestamp into string format yyyyMMddHHmmssSSS
     * @returns string
     */
    static serializeTimestamp(now: Date, delimiter?: string, includeMillis?: boolean): string;
    /**
     * To get date format with short or long month
     * @returns string
     */
    static getFormatDate(date?: Date, fortype?: number, delimiter?: string, forstyle?: number, separater?: string): string;
    /**
     * To get date format with short month
     * @returns string
     */
    static getShortDate(date?: Date, delimiter?: string, forstyle?: number): string;
    /**
     * To get date format with long month
     * @returns string
     */
    static getLongDate(date?: Date, delimiter?: string, forstyle?: number): string;
    /**
     * To get week day with short or long format
     * @returns string
     */
    static getWeekDay(date?: Date, fortype?: number): string;
    /**
     * To get short week day
     * @returns string
     */
    static getShortWeekDay(date?: Date): string;
    /**
     * To get long week day
     * @returns string
     */
    static getLongWeekDay(date?: Date): string;
    /**
     * To get week day format
     * @returns string
     */
    static getFormatWeekDate(date?: Date, fortype?: number, delimiter?: string, forstyle?: number, separater?: string): string;
    /**
     * To get date instance from string or number of timestamp
     * @returns string
     */
    static date(input?: string | number, defaultValue?: Date): Date;
}

/**
 * Setting class support read file config/setting.json
 */
export declare class Setting {
    static settings?: any;
    private static initSetting;
    static readSetting(filepath?: string): any;
    static getSetting(key: string): any;
    static hasSetting(key: string): boolean;
    static reloadSetting(): void;
    get<T>(key: string): T;
    has(key: string): boolean;
}

/**
 * Configure class support read file config/default.json
 */
export declare class Configure {
    static configurations?: any;
    private static initConfig;
    static readConfig(filepath?: string): any;
    static getConfig(key: string): any;
    static hasConfig(key: string): boolean;
    static reloadConfig(): void;
    static getEnv(key: string, defaultValue?: string): any;
    get<T>(key: string): T;
    has(key: string): boolean;
    env(key: string, defaultValue?: string): any;
}
declare const _default: Configure;
export default _default;
