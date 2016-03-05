import {Pipe, PipeTransform} from 'angular2/core'

import {JDate} from './jdate'

@Pipe({
  name: 'jDate'
})
export class JalaliDatePipe implements PipeTransform {

  public transform(value:Date, args:string[])
  {
    var jdate:JDate = new JDate(value);
    return jdate.format('dddd DD MMMM YYYY');
  }

}
