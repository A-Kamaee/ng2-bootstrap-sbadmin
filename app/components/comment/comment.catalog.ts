import {Comment} from "./comment.model";
import {User} from '../auth/user.model'

export class CommentCatalog
{
  protected addComment(comment:Comment):void
  {
    throw new Error("Not Implemented by far");
  }

  protected getComment(user: User, commentableId: string): Comment
  {
    throw new Error("Not Implemented by far");
  }

  protected getComments(commentableId:string):Comment[]
  {
    throw new Error("Not Implemented by far");
  }
}
