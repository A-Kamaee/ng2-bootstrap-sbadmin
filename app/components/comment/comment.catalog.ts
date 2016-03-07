import {Comment} from "./comment.model";
import {User} from '../auth/user.model'
import {CommentServices} from './comment.service';

export class CommentCatalog
{

  private _comments: Comment[];
  private _services: CommentServices;
  constructor()
  {
    this._services = new CommentServices();
    this._comments = [];
  }

  protected addComment(comment:Comment):void
  {
    throw new Error("Not Implemented by far");
  }

  protected getComment(user: User, commentableId: string): Comment
  {
    throw new Error("Not Implemented by far");
  }

  public getComments(rateAndCommentableId:string):Comment[]
  {
    console.log('comment.catalog getComments started ...');
    if(this.hasFetched(rateAndCommentableId))
    {
      var res:Comment[] = [];
      for(var comment in this._comments)
      {
        if(comment.rateAndCommentable.getRateAndCommentableId() == rateAndCommentableId)
        {
          res.push(comment);
        }
      }
      return res;
    }
    else
    {
      var fetchComments:Comment[] = this._services.fetchComments(rateAndCommentableId);
      for(var fetchComment in fetchComments)
      {
        if(this._comments.indexOf(fetchComment) == -1)
        {
          this._comments.push(fetchComment);
        }
      }
      return fetchComments;
    }
  }

  // بررسی می کند که آیا اطلاعات مربوط به مورد قابل نظر دهی قبلا دریافت شده است یا خیر
  private hasFetched(rateAndCommentableId:string)
  {
    for(var fetchComment in this._comments)
    {
      if(fetchComment.rateAndCommentable.getRateAndCommentableId() == rateAndCommentableId)
      {
        return true;
      }
    }
    return false;
  }

}
