import {IRateAndCommentable} from './iRatableAndCommentable.model';
import {User} from '../auth/user.model';

export class Comment {
  get creator():User {
    return this._creator;
  }

  get rateAndCommentable():IRateAndCommentable {
    return this._rateAndCommentable;
  }

  get rate():number {
    return this._rate;
  }

  set rate(value:number) {
    this._rate = value;
  }

  get content():string {
    return this._content;
  }

  set content(value:string) {
    this._content = value;
  }

  get recordDatetime():Date {
    return this._recordDatetime;
  }

  public constructor(creator:User, rateAndCommentable:IRateAndCommentable) {
    this._recordDatetime = new Date();
    this._creator = creator;
    this._rateAndCommentable = rateAndCommentable;
  }

  private _rate:number;
  private _content:string;
  private _recordDatetime:Date;
  private _rateAndCommentable:IRateAndCommentable;
  private _creator:User;

}
