import {IRateAndCommentable} from './rataAndCommentable.interface.ts';
import {User} from '../auth/user.model';
import {IComment} from "./comment.interface";

class Comment implements IComment {

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

  set recordDatetime(value:Date) {
    this._recordDatetime = value;
  }

  get rateAndCommentable():IRateAndCommentable {
    return this._rateAndCommentable;
  }

  set rateAndCommentable(value:IRateAndCommentable) {
    this._rateAndCommentable = value;
  }

  get creator():User {
    return this._creator;
  }

  set creator(value:User) {
    this._creator = value;
  }
}
