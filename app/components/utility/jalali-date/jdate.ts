/*
 * https://github.com/arashm/JDate
 * @author: Arash Mousavi
 * @version: 0.1.5
 */
import {DateConverter} from './converter'


/*
 * Helper Functions
 */


/*
 * Initialize JDate with either a Date object or an Array of
 * Jalali date: [1393, 5, 3]
 *
 * @params {Array, Date} date
 */

export class JDate {

  private date:any;
  private _d:any;

  private _converter:DateConverter;

  constructor(_date?) {
    console.log('JDate constructor caled ... ')
    this._converter = new DateConverter();
    this._d = _date || new Date;
    if (this._d instanceof Array) {
      this.date =  this.map(this._d);
      this._d = this.to_gregorian_base();
    } else if (this._d instanceof Date) {
      this.date = this.to_jalali(this._d);
    }
  }

  /*
   * Returns month length
   *
   * @params {Number} year
   * @params {Number} month
   * @return {Number}
   */
  daysInMonth(year, month) {
    year += ~~(month / 12)
    month = month - ~~(month / 12) * 12
    if (month < 0) {
      month += 12
      year -= 1
    } else if (month == 0) {
      month = 12
    }
    if (month <= 6) {
      return 31
    } else if (month <= 11) {
      return 30
    } else if (this.isLeapYear(year)) {
      return 30
    } else {
      return 29
    }
  }

  /*
   * Checks if a given year is a leap year or not
   *
   * @params {Number} year
   * @return {Boolean}
   */
  isLeapYear(year) {
    return this._converter.jalCal(year).leap === 0
  }

  /*
   * converts a Jalali date to Gregorian
   *
   * @params {Number} year
   * @params {Number} month
   * @params {Number} day
   * @return {Date}
   */
  to_gregorian(year, month, day) {
    var gdate = this._converter.d2g(this._converter.j2d(year, month, day));
    return new Date(gdate.gy, gdate.gm - 1, gdate.gd);
  }

  /*
   * Converts JDate date to Gregorian
   */
  to_gregorian_base() {
    return this.to_gregorian(this.date[0], this.date[1], this.date[2]);
  }

  /*
   * Coverts a Gregorian date to Jalali date
   *
   * @params {Date} date
   * @return {Array}
   */
  to_jalali(date) {
    var jdate = this._converter.d2j(this._converter.g2d(date.getFullYear(), date.getMonth() + 1, date.getDate()));
    return [jdate.jy, jdate.jm, jdate.jd]
  }

  /*
   * Returns a formated output of current date
   *
   * @params {String} format
   * @return {String}
   */
  format(format) {
    format = JDateHelper.replaceYear(format, this);
    format = JDateHelper.replaceMonth(format, this);
    format = JDateHelper.replaceDay(format, this);
    return format;
  }


  /*
   * Shows Jalali's full year, ex: 1393
   *
   * @return {Integer}
   */
  getFullYear() {
    return this.date[0];
  }

  /*
   * Sets the Jalali full year
   *
   * @params {Number} year
   * @return {JDate}
   */
  setFullYear(year) {
    this.date[0] = parseInt(year);
    this._d = this.to_gregorian_base();
    return this
  }

  /*
   * Shows Jalali month number.
   *
   * @return {Number} Jalali month number
   */
  getMonth() {
    return this.date[1];
  }

  /*
   * Sets the Jalali month number. An integer between 0 and 11
   *
   * @params {Number} month
   * @returns {JDate}
   */
  setMonth(month) {
    var fixed = JDateHelper.fix_month(this.getFullYear(), parseInt(month));
    this.date[0] = fixed[0];
    this.date[1] = fixed[1];
    this._d = this.to_gregorian_base();
    return this
  }

  /*
   * Shows Jalali day number. A number between 0 to 31
   *
   * @return {Number} Jalali day number
   */
  getDate() {
    return this.date[2];
  }

  /*
   * Sets Jalali day number. A number between 0 to 31
   *
   * @params {Number} date
   * @return {JDate}
   */
  setDate(date) {
    this.date[2] = parseInt(date);
    this._d = this.to_gregorian_base();
    return this
  }

  /*
   * Returns the day of the week for the specified date. A number between 0 to 6
   *
   * @returns {Number}
   */
  getDay() {
    return this._d.getDay()
  }

  private map(array:Array<any>)
  {
    var res = [];
    for(var item in array)
    {
      res.push(parseInt(item));
    }
    return res;
  }
}

class JDateHelper {

  private static MONTH_NAMES:string[] = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'امرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  private static ABBR_DAYS:string[] = ['۱ش', '۲ش', '۳ش', '۴ش', '۵ش', 'ج', 'ش'];
  private static DAYS_NAMES:string[] = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];

  public static fix_month(year, month) {
    if (month > 12 || month <= 0) {
      var yearDiff = Math.floor((month - 1) / 12);
      year += yearDiff;
      month = month - yearDiff * 12;
    }
    return [year, month]
  }

  public static replaceYear(str, date) {
    var match = str.match(/[yY]+/);
    if (match) {
      switch (match[0]) {
        case 'YYYY':
        case 'YYY':
          var value = JDateHelper.replaceYear(str.replace(match, date.getFullYear()), date);
          return value;
        case 'YY':
          var value = JDateHelper.replaceYear(str.replace(match, String(date.getFullYear()).slice(2)), date);
          return value;
      }
    } else {
      return str;
    }
  }

  public static replaceMonth(str, date) {
    var match = str.match(/[mM]+/);
    if (match) {
      switch (match[0]) {
        case 'M':
        case 'MM':
          var value = JDateHelper.replaceMonth(str.replace(match, date.getMonth()), date);
          return value;
        case 'MMM':
        case 'MMMM':
          var value = JDateHelper.replaceMonth(str.replace(match, JDateHelper.MONTH_NAMES[date.getMonth() - 1]), date);
          return value;
      }
    } else {
      return str
    }
  }

  public static replaceDay(str, date) {
    var match = str.match(/[dD]+/);
    if (match) {
      switch (match[0]) {
        case 'D':
        case 'DD':
          var value = JDateHelper.replaceDay(str.replace(match, date.getDate()), date);
          return value;
        case 'd':
        case 'dd':
          var value = JDateHelper.replaceDay(str.replace(match, JDateHelper.ABBR_DAYS[date.getDay()]), date);
          return value;
        case 'ddd':
        case 'dddd':
          var value = JDateHelper.replaceDay(str.replace(match, JDateHelper.DAYS_NAMES[date.getDay()]), date);
          return value;
      }
    } else {
      return str;
    }
  }
}
