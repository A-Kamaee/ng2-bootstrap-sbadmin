import {IRateAndCommentable} from "../../comment/rataAndCommentable.interface.ts";

export class Session implements IRateAndCommentable
{

  public rateAndCommentableId:string;

  constructor()
  {
    this.rateAndCommentableId = null;
  }

  public getRateAndCommentableId():string
  {
    return this.rateAndCommentableId;
  }

  public setRateAndCommentableId(rateAndCommentableId:string):void
  {
    this.rateAndCommentableId = rateAndCommentableId;
  }

  public hasRateAndCommentableId():boolean
  {
    if(this.rateAndCommentableId == null)
    {
      return false;
    }
    return true;
  }
}
