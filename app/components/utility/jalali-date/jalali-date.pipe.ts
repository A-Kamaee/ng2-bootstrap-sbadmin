import {Pipe, PipeTransform} from 'angular2/core'

import {JDate} from './jdate'

@Pipe({
  name: 'jDate'
})
export class JalaliDatePipe implements PipeTransform {

  public transform(value:any, args:string[])
  {
    var date = new Date(value);
    var jdate:JDate = new JDate(date);
    return jdate.format('dddd DD MMMM YYYY');
  }

}
