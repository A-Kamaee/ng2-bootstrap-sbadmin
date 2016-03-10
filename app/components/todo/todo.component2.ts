import {Component, OnInit} from 'angular2/core';
import {NgFor} from 'angular2/common';

import {TodoService} from './todo.service'

@Component({
  selector: 'todo2',
  template: `
    This is fucking TODO component ....
    <ul>
    <li *ng-for="#item of _items">
        {{ item }}
    </li>
    </ul>
    <form>
      <input (click)="addTodo()" type="submit" value="fucking send" />
    </form>
  `,
  directives: [NgFor]
})
export class TodoList implements OnInit {

  private _items:string[];

  constructor(private _service:TodoService) {

  }

  onInit() {
    this._service.todos$.subscribe(updatedTodos => this._items = updatedTodos);
    this._service.loadTodos();
  }

  private addTodo() {
    console.log('addTodo called ...');
    this._service.createTodo();
  }
}
