import {Component, OnInit} from 'angular2/core';

import {TodoService} from './todo.service';
import {TodoList} from './todo.component2';

@Component({
  template: `
    This is fucking TODO component ....
    <ul>
      <li *ng-for="#item of _items">
        {{ item }}
      </li>
    </ul>
    <hr/>
    <todo2></todo2>
  `,
  directives: [TodoList]
})
export class TodoIndex implements OnInit{

  private _items:string[];

  constructor(private _service:TodoService) {

  }

  onInit() {
    this._service.todos$.subscribe(updatedTodos => this._items = updatedTodos);
    this._service.loadTodos();
  }

}
