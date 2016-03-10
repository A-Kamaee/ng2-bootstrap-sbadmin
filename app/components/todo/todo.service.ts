import {Injectable} from 'angular2/core';
import {Observable} from 'angular2/angular2';

@Injectable()
export class TodoService
{
  public todos$: Observable<Array<string>>;
  private _todoObserver:any;
  private _dataStore:Array<string>;

  constructor(){

    this._dataStore = new Array<string>();

    this.todos$ = new Observable(observer => {this._todoObserver = observer}).share();

  }

  public loadTodos() {

    this._todoObserver.next(this._dataStore);

  }

  public createTodo() {
    var data = "fucking new data";
    this._dataStore.push(data);
    this._todoObserver.next(this._dataStore);
  }
}
