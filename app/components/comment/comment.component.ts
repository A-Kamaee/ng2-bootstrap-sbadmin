import {Component} from 'angular2/angular2';
import {WrapperCmp} from '../header/header';
import {Comment} from "./comment.model";


@Component({
  selector: 'comment-index',
  templateUrl: './components/comment/comment.index.html',
  directives: [WrapperCmp]
})
export class CommentIndex {

  private _comment:Comment;

  constructor(){
    this._comment = new Comment();
  }
}
