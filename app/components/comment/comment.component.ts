import {Component} from 'angular2/angular2';
import {NgFor} from 'angular2/common';
import {AfterViewInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Http, Response} from 'angular2/http';

import {WrapperCmp} from '../header/header';

import {JalaliDatePipe} from '../utility/jalali-date/jalali-date.pipe'
import {PersianNumberPipe} from '../utility/persian-number/persianNumber.pipe';


import {Comment} from './comment.model';
import {CommentManager} from './commentManager.helper';
import {CommentServices} from './comment.service'
import {User} from '../auth/user.model';

import {Rating} from '../ui/rating/rating';

@Component({
  selector: 'comment-index',
  templateUrl: './components/comment/comment.index.html',
  styleUrls: ['./components/comment/comment.index.css'],
  directives: [WrapperCmp, NgFor, Rating],
  pipes: [JalaliDatePipe, PersianNumberPipe],
})
export class CommentIndex {

  get comments():Comment[] {
    return this._comments;
  }

  private _comments:Comment[];

  constructor(private params:RouteParams, private service:CommentServices) {
    console.log('comment.component started ...');
    var rateAndCommentableId:string = params.get('rateAndCommentableId');
    var comments:Comment[] = service.fetchComments(rateAndCommentableId);
    this._comments = comments;
    console.log('comment.component finished ...');
  }

}
