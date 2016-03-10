import {IRateAndCommentable} from './rataAndCommentable.interface'
import {IUser} from '../auth/user.interface'

export interface IComment
{
  rate:number;
  content:string;
  recordDatetime:Date;
  rateAndCommentable:IRateAndCommentable;
  creator:IUser;
}
