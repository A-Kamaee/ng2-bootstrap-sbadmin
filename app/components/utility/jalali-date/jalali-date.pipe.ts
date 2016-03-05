import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
  name: 'jDate'
})
export class JalaliDatePipe implements PipeTransform {

  public transform(value:number, args:string[])
  {
    return Math.pow(value, parseInt(args[0] || '1', 10));
  }

}
