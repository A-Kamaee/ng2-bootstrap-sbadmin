import {BaseServices} from '../baseServices/baseServices.service.ts';
import {Comment} from "./comment.model";

import {User} from '../auth/user.model'
import {Session} from "../edu/session/session.model";

export class CommentServices extends BaseServices
{
  protected insertComment(comment:Comment)
  {
    throw new Error("Not Implemented by far");
  }

  protected fetchComment(user:User, commentableId: string):Comment
  {
    throw new Error("Not Implemented by far");
  }

  public fetchComments(commentableId:string):Comment[]
  {
    var res:Comment[] = [
      {
        "rate": 4,
        "content": "first comment",
        "recordDatetime": new Date(),
        "rateAndCommentable": new Session(),
        "creator": new User("ali", new Date(), "abouzar@yahoo.com", "password", "ldsjflaskfj")
      }
    ]

    return res;
  }
}
