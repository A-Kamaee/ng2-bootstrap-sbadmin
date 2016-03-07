import {Response, Http} from 'angular2/http'

import {SerializationHelper} from '../utility/serializer/serialization.helper'

export abstract class BaseServices {

  private _host:string = "http://localhost:3000";

  public abstract temp():any;

  // یک در خواست GET به سرور ارسال می کند و نتیجه را باز می گرداند
  public get(url:string):any {
    //this.http.get(this._host + url).subscribe(res => {
    //  console.log('inside subscribe function ...');
    //  console.log('pure string result is ', res);
    //  console.log('json comment', res.json());
    //  var comment:Comment = null;
    //  SerializationHelper.toInstance(comment, res.text());
    //  console.log('comments with type is ', comment);
    //  return comment;
    //});
  }
}
