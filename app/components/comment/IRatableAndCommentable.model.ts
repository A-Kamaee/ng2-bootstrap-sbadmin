export interface IRateAndCommentable
{
  getCommentableId():string;
  setCommentableId(commentableId:string):void;
  hasId():boolean;
}
