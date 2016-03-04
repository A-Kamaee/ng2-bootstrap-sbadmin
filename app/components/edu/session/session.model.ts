import {IRateAndCommentable} from "../../comment/iRatableAndCommentable.model";

export class Session implements IRateAndCommentable
{
  public getCommentableId():string
  {
    throw new Error('Not Implemented ...');
  }
  public setCommentableId(commentableId:string):void
  {
    throw new Error('Not Implemented ...');
  }
  public hasId():boolean
  {
    throw new Error('Not Implemented ...');
  }
}
