import {NgFor} from 'angular2/common'

import {WrapperCmp} from '../header/header';

import {Component} from 'angular2/angular2';
import {Comment} from "./comment.model";
import {CommentManager} from "./commentManager.helper";
import {User} from '../auth/user.model'

import {Rating} from '../ui/rating/rating'

@Component({
  selector: 'comment-index',
  templateUrl: './components/comment/comment.index.html',
  styleUrls: ['./components/comment/comment.index.css'],
  directives: [WrapperCmp, NgFor, Rating],
})
export class CommentIndex {

  public comments:Comment[];

  constructor()
  {
    console.log("Index page load started");
    this.comments = CommentManager.GetInstance().getComments("sdfdsafsaf");
    console.log('comment inside CommentIndex is ', this.comments);
  }
}
