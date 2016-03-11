import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'

import {WrapperCmp} from '../../header/header';
import {CourseService} from '../course/course.service';
import {ICourse} from '../course/course.interface';

@Component({
  selector: 'course-index',
  templateUrl: './components/edu/course/course.index.html',
  directives: [WrapperCmp],
})
export class CourseIndex {

  @Input() course:ICourse;

  constructor()
  {
    console.log("Component Course Index called successfully ...");
  }

}
