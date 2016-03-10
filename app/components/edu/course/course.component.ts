import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'

import {WrapperCmp} from '../../header/header';
import {CourseService} from '../course/course.service';

@Component({
  selector: 'course-index',
  templateUrl: './components/edu/course/course.index.html',
  directives: [WrapperCmp],
})
export class CourseIndex {

  constructor()
  {
    console.log("Component Course Index called successfully ...");
  }

}
