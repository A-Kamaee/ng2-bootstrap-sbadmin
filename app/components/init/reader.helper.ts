import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'angular2/angular2';

import {ICourse} from '../edu/course/course.interface';
import {BaseService} from '../baseServices/base.service';

export abstract class AbstractReader {

  public abstract read():Observable<Response>;

}

@Injectable()
export class ExcelReader extends AbstractReader {

  constructor(private _http:Http) {
    super();
  }

  public read():Observable<Response> {
    console.log('read excel reader called ...');

    return this._http.get("http://localhost:3000/initialize");
  }

}
