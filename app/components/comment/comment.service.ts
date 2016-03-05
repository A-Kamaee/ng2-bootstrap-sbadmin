import {BaseServices} from '../baseServices/baseServices.service.ts';
import {Comment} from "./comment.model";

import {User} from '../auth/user.model'
import {Session} from "../edu/session/session.model";

export class CommentServices {
  protected insertComment(comment:Comment) {
    throw new Error("Not Implemented by far");
  }

  protected fetchComment(user:User, commentableId:string):Comment {
    throw new Error("Not Implemented by far");
  }

  public fetchComments(commentableId:string):Comment[] {

    var firstComment:Comment = {
      "rate": 1,
      "content": "این اولین نظری هست که در سامانه ثبت می گردد.",
      "recordDatetime": new Date(),
      "rateAndCommentable": new Session(),
      "creator": new User("ابوذر کمائی", new Date(), "abouzar@yahoo.com", "password", "ldsjflaskfj")
    };
    var secondComment:Comment = {
      "rate": 4,
      "content": "این دومین نظری هست که در سامانه ثبت می گردد.",
      "recordDatetime": new Date(),
      "rateAndCommentable": new Session(),
      "creator": new User("احمد احمدیان", new Date(), "abouzar@yahoo.com", "password", "ldsjflaskfj")
    };
    var thirdComment:Comment = {
      "rate": 2,
      "content": "first comment",
      "recordDatetime": new Date(),
      "rateAndCommentable": new Session(),
      "creator": new User("ali", new Date(), "abouzar@yahoo.com", "password", "ldsjflaskfj")
    };
    var fourthComment:Comment = {
      "rate": 2,
      "content": "first comment",
      "recordDatetime": new Date(),
      "rateAndCommentable": new Session(),
      "creator": new User("ali", new Date(), "abouzar@yahoo.com", "password", "ldsjflaskfj")
    };
    var fifthComment:Comment = {
      "rate": 3,
      "content": "first comment",
      "recordDatetime": new Date(),
      "rateAndCommentable": new Session(),
      "creator": new User("ali", new Date(), "abouzar@yahoo.com", "password", "ldsjflaskfj")
    };
    var res:Comment[] = [firstComment, secondComment, thirdComment, fourthComment, fifthComment];

    return res;
  }
}
