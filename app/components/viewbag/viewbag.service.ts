import {Injectable} from 'angular2/core';

import {Observer} from './observer.interface';
import {Observable} from './observable.interface';
import {Level} from './level.enum';

@Injectable()
export class ViewbagService implements Observable{

  private _errorMessages:string[] = [];
  private _warningMessages:string[] = [];
  private _infoMessages:string[] = [];
  private _successMessages:string[] = [];

  public addError(message:string):void {
    this.notifyObserver(Level.ERROR);
    this._errorMessages.push(message);
    console.log('error is ', this._errorMessages);
  }

  public getErrors():string[]
  {
    return this._errorMessages;
  }

  public emptyErrors():void
  {
    this._errorMessages = [];
  }

  public addWarnings(message:string):void {
    this._warningMessages.push(message);
  }

  public getWarnings():string[]
  {
    return this._warningMessages;
  }

  public emptyWarnings():void
  {
    this._warningMessages = [];
  }

  public addInfo(message:string):void {
    this._infoMessages.push(message);
  }

  public getInfos():string[]
  {
    return this._infoMessages;
  }

  public emptyInfos():void
  {
    this._infoMessages = [];
  }

  public addSuccess(message:string):void {
    this.notifyObserver(Level.SUCCESS);
    this._successMessages.push(message);
  }

  public getSuccess():string[]
  {
    return this._successMessages;
  }

  public emptySuccess():void
  {
    this._successMessages = [];
  }

  addObserver(obsrever:Observer, level:Level) {
    this._observers.push([obsrever, level]);
  }

  private _observers:[Observer, Level][] = [];

  // تمام کسانی که این اتفاق برایشان مهم است با خبر می شوند
  private notifyObserver(level:Level)
  {
    for(var index in this._observers)
    {
      var item:[Observer, Level] = this._observers[index];
      if(item[1] == level)
      {
        item[0].notify(item[1]);
      }
    }
  }
}
