import {Component, OnInit} from 'angular2/angular2';
import {NgFor} from 'angular2/common';
import {AfterViewInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Http, Response} from 'angular2/http';

import {WrapperCmp} from '../header/header';

import {JalaliDatePipe} from '../utility/jalali-date/jalali-date.pipe';
import {PersianNumberPipe} from '../utility/persian-number/persianNumber.pipe';

import {User} from '../auth/user.model';
import {CommentService} from './comment.service';
import {Rating} from '../ui/rating/rating';

@Component({
  selector: 'comment-index',
  templateUrl: './components/comment/comment.index.html',
  styleUrls: ['./components/comment/comment.index.css'],
  directives: [WrapperCmp, NgFor, Rating],
  pipes: [JalaliDatePipe, PersianNumberPipe],
  providers: [CommentService]
})
export class CommentIndex implements OnInit {

  private _comments:any[];
  private _rateAndCommentable:string;

  constructor(private params:RouteParams, private _service:CommentService) {
    this._rateAndCommentable = params.get('rateAndCommentableId');
  }

  onInit() {
    this._service._baseService.instances$.subscribe(updatedComments => this._comments = updatedComments);
    this._service._baseService.load();
    this._service.loadByRateAndCommentableId(this._rateAndCommentable);
  }

  get comments():any[] {
    return this._comments;
  }

}
