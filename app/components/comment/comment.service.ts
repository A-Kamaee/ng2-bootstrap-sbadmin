import {BaseServices} from '../baseServices/baseServices.service.ts';
import {Comment} from "./comment.model";

import {User} from '../auth/user.model'
import {Session} from "../edu/session/session.model";

import {Component} from 'angular2/core'
import {Jsonp, Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class CommentServices {

  public constructor(private http:Http)
  {
    console.log('comment.service.ts constructor started ...');
    console.log('http', http);
    http.get("http://localhost:3000/comment/test").subscribe(res => {
      console.log('inside subscribe function ...');
      console.log(res);
    });
    console.log('comment.service.ts constructor finished ...');
  }

  protected insertComment(comment:Comment) {
    throw new Error("Not Implemented by far");
  }

  protected fetchComment(user:User, commentableId:string):Comment {
    throw new Error("Not Implemented by far");
  }

  public fetchComments(rateAndCommentableId:string):Comment[] {

    var firstComment:Comment = {
      "rate": 1,
      "content": "این اولین نظری هست که در سامانه ثبت می گردد.",
      "recordDatetime": new Date(),
      "rateAndCommentable": new Session(),
      "creator": new User("ابوذر کمائی", new Date(), "abouzar@yahoo.com", "password", "http://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg"),
    };
    firstComment.rateAndCommentable.setRateAndCommentableId("1234567890");

    var secondComment:Comment = {
      "rate": 4,
      "content": "این دومین نظری هست که در سامانه ثبت می گردد.",
      "recordDatetime": new Date(),
      "rateAndCommentable": new Session(),
      "creator": new User("احمد احمدیان", new Date(), "abouzar@yahoo.com", "password", "http://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg")
    };
    secondComment.rateAndCommentable.setRateAndCommentableId("1234567890");

    var thirdComment:Comment = {
      "rate": 2,
      "content": "first comment",
      "recordDatetime": new Date(),
      "rateAndCommentable": new Session(),
      "creator": new User("ali", new Date(), "abouzar@yahoo.com", "password", "http://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg")
    };
    thirdComment.rateAndCommentable.setRateAndCommentableId("0987654321");

    var fourthComment:Comment = {
      "rate": 2,
      "content": "first comment",
      "recordDatetime": new Date(),
      "rateAndCommentable": new Session(),
      "creator": new User("ali", new Date(), "abouzar@yahoo.com", "password", "http://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg")
    };
    fourthComment.rateAndCommentable.setRateAndCommentableId("0987654321");

    var fifthComment:Comment = {
      "rate": 3,
      "content": "first comment",
      "recordDatetime": new Date(),
      "rateAndCommentable": new Session(),
      "creator": new User("ali", new Date(), "abouzar@yahoo.com", "password", "http://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg")
    };
    fifthComment.rateAndCommentable.setRateAndCommentableId("0987654321");

    var temp:Comment[] = [firstComment, secondComment, thirdComment, fourthComment, fifthComment];
    var res:Comment[] = [];

    for(var index in temp)
    {
      var comment:Comment = temp[index];
      if(comment.rateAndCommentable.getRateAndCommentableId() == rateAndCommentableId)
      {
        res.push(comment);
      }
    }
    return res;
  }
}
