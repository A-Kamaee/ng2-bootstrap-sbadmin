import {Component} from 'angular2/core';
import {NgFor} from 'angular2/core';
import {OnInit, OnDestroy} from 'angular2/core';

import {ViewbagService} from './viewbag.service';

@Component({
  selector: 'viewbag',
  templateUrl: './components/viewbag/viewbag.index.html',
  directives: [NgFor],
})
export class ViewbagComponent implements OnDestroy {

  constructor(private _service:ViewbagService) {

  }

  private get errors():string[] {
    return this._service.getErrors();
  }

  private get warnings():string[] {
    return this._service.getWarnings();
  }

  private get infos():string[] {
    return this._service.getInfos();
  }

  private get successes():string[] {
    return this._service.getSuccess();
  }

  public onDestroy():void {
    this._service.emptyErrors();
    this._service.emptyWarnings();
    this._service.emptyInfos();
    this._service.emptySuccess();
  }


}
