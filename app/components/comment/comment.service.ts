import {BaseServices} from '../baseServices/baseServices.service.ts';
import {Comment} from "./comment.model";

import {User} from '../auth/user.model'

class CommentServices extends BaseServices
{
  protected insertComment(comment:Comment)
  {
    throw new Error("Not Implemented by far");
  }

  protected fetchComment(user:User, commentableId: string):Comment
  {
    throw new Error("Not Implemented by far");
  }

  protected fetchComments(commentableId:string):Comment[]
  {
    throw new Error("Not Implemented by far");
  }
}
