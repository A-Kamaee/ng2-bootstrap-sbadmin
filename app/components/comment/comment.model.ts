import {IRateAndCommentable} from './rataAndCommentable.interface.ts';
import {User} from '../auth/user.model';

export class Comment {

  public constructor(creator:User, rateAndCommentable:IRateAndCommentable) {
    this.recordDatetime = new Date();
    this.creator = creator;
    this.rateAndCommentable = rateAndCommentable;
  }

  public rate:number;
  public content:string;
  public recordDatetime:Date;
  public rateAndCommentable:IRateAndCommentable;
  public creator:User;

}
