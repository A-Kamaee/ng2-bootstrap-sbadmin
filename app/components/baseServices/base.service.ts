import {Injectable} from 'angular2/core'
import {Response, Http} from 'angular2/http';
import {Observable} from 'angular2/angular2'

import {SerializationHelper} from '../utility/serializer/serialization.helper'

@Injectable()
export class BaseService<T> {

  public instances$:Observable<Array<T>>;
  private _host:string = "http://localhost:3000";
  private _observer:any;
  public _dataStore:Array<T>;

  public constructor(private _http:Http) {

    console.log('base.service.ts called and http is ', _http);

    this._dataStore = new Array<T>();

    this.instances$ = new Observable(observer => {
      this._observer = observer
    }).share();

  }

  public load():void {
    this._observer.next(this._dataStore);
  }

  public add(comment:T):void {
    this._dataStore.push(comment);
    this._observer.next(this._dataStore);
  }

  // یک در خواست GET به سرور ارسال می کند و نتیجه را باز می گرداند
  public get(url:string):Observable<Response> {
    return this._http.get(this._host + url);
  }
}
