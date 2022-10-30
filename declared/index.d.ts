declare class Arguments {
    private static isParameterOption;
    static getString(args?: string[], defaultValue?: string, ...options: string[]): string | undefined;
    static getDate(args?: string[], defaultValue?: Date, ...options: string[]): Date | undefined;
    static getInteger(args?: string[], defaultValue?: number, ...options: string[]): number | undefined;
    static getFloat(args?: string[], defaultValue?: number, ...options: string[]): number | undefined;
    static getBoolean(args?: string[], defaultValue?: boolean, ...options: string[]): boolean | undefined;
}
export { Arguments };

export declare class Iterator<T> {
    private values;
    private index;
    constructor(values: T[]);
    hasNext(): boolean;
    next(): T;
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
    /**
     * To get base directory if base name is src or dist
     * @param dir
     * @returns string
     */
    static getWorkingDir(dir: string): string;
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
}
