import {Comment} from "./comment.model";
import {User} from '../auth/user.model'
import {CommentServices} from "./comment.service";

export class CommentCatalog
{

  private _services:CommentServices;

  constructor()
  {
    this._services = new CommentServices();
  }

  protected addComment(comment:Comment):void
  {
    throw new Error("Not Implemented by far");
  }

  protected getComment(user: User, commentableId: string): Comment
  {
    throw new Error("Not Implemented by far");
  }

  public getComments(commentableId:string):Comment[]
  {
    return this._services.fetchComments("lkdldskjf");
  }
}
