import {Injectable} from 'angular2/core';
import {Observable} from 'angular2/angular2';
import {Response} from 'angular2/http';

import {AbstractReader, ExcelReader} from './reader.helper';
import {ICourse} from '../edu/course/course.interface'
import {CourseService} from '../edu/course/course.service';

@Injectable()
export class InitService {

  constructor(private _service:CourseService)
  {

  }

  // اطلاعات ترم جدید را از سامانه آموزش دریافت کرده و در پایگاه داده ذخیره می کند
  public initalizeSemester(reader:AbstractReader):void {

    console.log('initializeSemester called ...');

    return reader.read().subscribe(data => {
      console.log('received data is ', data);
      var courses:ICourse[] = <ICourse[]>data.json();
      console.log('courses are ', courses);
      this._service.addOrUpdateRange(courses);
    });

  }

}

