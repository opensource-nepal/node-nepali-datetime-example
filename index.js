/**
 * Contains example codes for nepali-date package.
 */
import NepaliDate from 'nepali-datetime';
import dateConverter from 'nepali-datetime/dateConverter';

/**
 * Initialization
 */

// Without any parameters:
const now = new NepaliDate();
console.log(now.toString()); // 2080-03-27 18:48:28.266

// Date string parameter
const date1 = new NepaliDate('2079-02-15 14:00');
console.log(date1.toString()); // 2079-02-15 14:00

// Unix timestamp
const date2 = new NepaliDate(1654210800000);
console.log(date2.toString()); // 2079-02-20 04:45:00

// Date object
const dateObject = new Date();
const date3 = new NepaliDate(dateObject);
console.log(date3.toString()); // 2080-03-27 18:51:08.968

// NepaliDate object
const date4 = new NepaliDate(date3);
console.log(date3.toString()); // 2080-03-27 18:51:08.968

// Date and time parameters
const date5 = new NepaliDate(2079, 2, 15, 10, 30);
console.log(date5.toString()); // 2079-02-15 10:30:00

/**
 * Methods
 */

// const date1 = new NepaliDate('2079-02-15 14:00');
console.log(date1.getDateObject()); // 2022-05-29T08:15:00.000Z
console.log(date1.getTime()); // 1653812100000
console.log(date1.getYear()); // 2079
console.log(date1.getEnglishYear()); // 2022
console.log(date1.getMonth()); // 1
console.log(date1.getEnglishMonth()); // 4
console.log(date1.getDate()); // 15
console.log(date1.getEnglishDate()); // 30
console.log(date1.getDay()); // 0
console.log(date1.getHours()); // 14
console.log(date1.getMinutes()); // 0
console.log(date1.getSeconds()); // 0
console.log(date1.getMilliseconds()); // 0

/**
 * Formatting
 */

// const date1 = new NepaliDate('2079-02-15 14:00');
console.log(date1.format('YYYY')); // 2079
console.log(date1.format('YYYY-MM-DD HH:mm:ss')); // 2079-02-15 14:00:00
console.log(date1.format('"H"ello YYYY-MM-DD Worl"d"')); // Hello 2079-02-15 World
