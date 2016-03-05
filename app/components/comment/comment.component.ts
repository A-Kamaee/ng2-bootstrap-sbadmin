import {NgFor} from 'angular2/common'
import {AfterViewInit} from 'angular2/core'

import {JalaliDatePipe} from '../utility/jalali-date/jalali-date.pipe'

import {WrapperCmp} from '../header/header';

import {Component} from 'angular2/angular2';
import {Comment} from './comment.model';
import {CommentManager} from "./commentManager.helper";
import {User} from '../auth/user.model'

import {JDate} from '../utility/jalali-date/jdate'

import {Rating} from '../ui/rating/rating'

@Component({
  selector: 'comment-index',
  templateUrl: './components/comment/comment.index.html',
  styleUrls: ['./components/comment/comment.index.css'],
  directives: [WrapperCmp, NgFor, Rating],
  pipes: [JalaliDatePipe]
})
export class CommentIndex {

  public comments:Comment[];

  constructor() {
    var jdate = new JDate(new Date(1992, 11, 24));
    console.log(jdate.format('dddd DD MMMM YYYY'))
    this.comments = CommentManager.GetInstance().getComments("sdfdsafsaf");
  }
}
