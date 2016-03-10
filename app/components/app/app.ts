import {Component, ViewEncapsulation} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  RouteParams
} from 'angular2/router';


import {HomePage} from '../home/home';
import {FormPage} from '../form/form';
import {AuthPage} from '../auth/auth';
import {ChartPage} from '../chart/chart';
import {TablePage} from '../table/table';
import {ButtonsPage} from '../buttons/buttons';
import {NotificationsPage} from '../notifications/notifications';
import {TypographyPage} from '../typography/typography';
import {IconsPage} from '../icons/icons';
import {GridPage} from '../grid/grid';
import {NameList} from '../../services/name_list';
import {PanelsWellsPage} from '../panels-wells/panels-wells';

import {CourseIndex} from '../edu/course/course.component';
import {TermList, TermIndex} from '../edu/course/term.component';
import {CommentIndex} from '../comment/comment.component';
import {Temp} from '../temp/temp.component';
import {TodoIndex} from '../todo/todo.component';
import {TodoList} from '../todo/todo.component2';
import {InitComponent} from '../init/init.component';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

  {path: '/', redirectTo: '/home'},
  {path: '/home', component: HomePage, as: 'Dashboard.home'},
  {path: '/form', component: FormPage, as: 'Dashboard.form'},
  {path: '/blank', component: HomePage, as: 'Dashboard.blank'},
  {path: '/login', component: AuthPage, as: 'Auth'},
  {path: '/chart', component: ChartPage, as: 'Dashboard.chart'},
  {path: '/table', component: TablePage, as: 'Dashboard.table'},
  {path: '/panels-wells', component: PanelsWellsPage, as: 'Dashboard.panels-wells'},
  {path: '/buttons', component: ButtonsPage, as: 'Dashboard.buttons'},
  {path: '/notifications', component: NotificationsPage, as: 'Dashboard.notifications'},
  {path: '/typography', component: TypographyPage, as: 'Dashboard.typography'},
  {path: '/icons', component: IconsPage, as: 'Dashboard.icons'},
  {path: '/grid', component: GridPage, as: 'Dashboard.grid'},

  {path: '/edu', component: TermList, as: 'Term.list'},
  {path: '/edu/:term', component: TermIndex, as: 'Term.index'},

  {path: '/comment/:rateAndCommentableId', component: CommentIndex, as: 'Component.index'},

  {path: '/course', component: CourseIndex, as: 'Course.index'},

  {path: '/admin/init', component: InitComponent, as: 'Init.index'},

  {path: '/temp', component: Temp, as: 'Temp.index'},

  {path: '/todo', component: TodoIndex, as: 'Todo.index'},
  {path: '/todo/list', component: TodoList, as: 'Todo.list'}

])
export class App {
}
