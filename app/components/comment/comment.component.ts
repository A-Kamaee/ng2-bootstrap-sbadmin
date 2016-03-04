import {Component} from 'angular2/angular2';
import {WrapperCmp} from '../header/header';
import {Comment} from "./comment.model";
import {CommentManager} from "./commentManager.helper";
import {User} from '../auth/user.model'


@Component({
  selector: 'comment-index',
  templateUrl: './components/comment/comment.index.html',
  directives: [WrapperCmp]
})
export class CommentIndex {

  private _comment:Comment;

  constructor()
  {
    //console.log("Index page load started");
    //this._comment = CommentManager.GetInstance().getComment("sdfdsafsaf", new User("lsjfalsfjd", new Date(), "lksjsddjslsdkdfj", "ldkfjsfdjsldfjk", "lfjsljfsdflkj"));
    //console.log('comment inside CommentIndex is ', this._comment);
  }
}
