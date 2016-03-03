import {Component} from 'angular2/core'
import {RouteParams, RouterLink} from 'angular2/router'
import {NgFor} from 'angular2/angular2'

import {TermService} from './term.service'
import {WrapperCmp} from '../header/header';

@Component({
  selector: 'term-list',
  templateUrl: './components/edu/term.list.html',
  providers: [TermService],
  directives: [NgFor, RouterLink, WrapperCmp]
})
export class TermList
{
  private _terms:string[];

  constructor(_termService: TermService)
  {
    this._terms = _termService.findAllTerm();
  }
}

@Component({
  selector: 'term-index',
  templateUrl: './components/edu/term.index.html'
})
export class TermIndex
{
  constructor(private params: RouteParams)
  {
    var term:string = params.get('term');
    console.log('termId is: ', term);
  }
}
