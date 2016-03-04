import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'

import {WrapperCmp} from '../../header/header';
import {CourseService} from '../course/course.service';

@Component({
  selector: 'course-index',
  templateUrl: './components/edu/course.index.html',
  directives: [ROUTER_DIRECTIVES, WrapperCmp],
  providers: [CourseService]
})
export class CourseIndex {
  constructor(private coruseService:CourseService)
  {

  }
}
