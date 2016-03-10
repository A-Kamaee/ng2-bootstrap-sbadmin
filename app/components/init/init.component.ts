import {Component, OnInit} from 'angular2/core';
import {NgIf} from 'angular2/common';

import {WrapperCmp} from '../header/header';

import {InitService} from './init.service';
import {ExcelReader, AbstractReader} from './reader.helper';
import {CourseService} from '../edu/course/course.service';

import {Progressbar} from '../../../node_modules/ng2-bootstrap/components/progressbar/progressbar';

import {PersianNumberPipe} from '../utility/persian-number/persianNumber.pipe';

import {ICourse} from '../edu/course/course.interface';
import {ViewbagService} from "../viewbag/viewbag.service";

import {Observer} from '../viewbag/observer.interface';
import {Level} from '../viewbag/level.enum';

@Component({
  selector: 'initialize-index',
  templateUrl: './components/init/init.index.html',
  providers: [InitService, ExcelReader, CourseService],
  directives: [Progressbar, WrapperCmp, NgIf],
  pipes: [PersianNumberPipe],
})
export class InitComponent implements OnInit, Observer {

  private _progressPercent:number = 0;
  private _showLoading:boolean = false;

  constructor(private _service:InitService, private _reader:ExcelReader, private _viewbag:ViewbagService) {
    this._viewbag.addObserver(this, Level.ERROR);
    this._viewbag.addObserver(this, Level.SUCCESS);
  }

  public onInit():void {
    this._viewbag.addInfo("به منظور دریافت اطلاعات ترم جدید از سامانه آموزش روی دکمه ی دریافت اطلاعات کلیک نمایید.بعد از آن صبر نمایید تا نوار پیشرفت به طور کامل پر شود.در نهایت اطلاعات ترم جدید در سامانه بارگذاری می گردد.");
  }

  private _initProgressbar():void {
    if (this._progressPercent < 100) {
      this._progressPercent = this._progressPercent + 1;
      var rand:number = Math.random() * 100;
      setTimeout(() => {
        this._initProgressbar()
      }, rand);
    }
  }

  private btnSend_click():void {
    this._showLoading = true;
    this._initProgressbar();
    this._service.initalizeSemester(this._reader);
  }


  public notify(level:Level):void {
    console.log('init.component.ts notified for level ', level);
    this._showLoading = false;
    this._progressPercent = 0;
  }
}
