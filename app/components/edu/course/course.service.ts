import {Injectable} from 'angular2/angular2'

import {ICourse} from './course.interface';

import {BaseService} from '../../baseServices/base.service';

@Injectable()
export class CourseService {

  public constructor(public _baseService:BaseService<ICourse>) {}

  public loadByCourseId(id:string):void {

    this._baseService.get("/read/course/" + id).subscribe(data => {

      console.log('data received from server is ', data);

      var temp:ICourse = (<ICourse> (data.json()));

      console.log('temporary comment converted from json is', temp);

      //this._dataStore.push(data.text());

      this._baseService._dataStore = [temp];
      this._baseService.load();
    });

  }

  public addOrUpdate(course:ICourse):void {

    console.log('course save in db started ', course);

    this._baseService.post("/write/course", "instance=" + JSON.stringify(course)).subscribe(data => {

      console.log('course saved in db successfully ...');

      this._baseService._dataStore.push(course);
      this._baseService.load();

    });
  }

  public addOrUpdateRange(courses:ICourse[]):void {

    console.log('courses saved or update in db', courses);

  }


}
