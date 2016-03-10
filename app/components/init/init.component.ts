import {Component, OnInit} from 'angular2/core';
import {NgIf} from 'angular2/common';

import {WrapperCmp} from '../header/header';

import {InitService} from './init.service';
import {ExcelReader, AbstractReader} from './reader.helper';
import {CourseService} from '../edu/course/course.service';

import {Progressbar} from '../../../node_modules/ng2-bootstrap/components/progressbar/progressbar';

import {PersianNumberPipe} from '../utility/persian-number/persianNumber.pipe';

import {ICourse} from '../edu/course/course.interface';

@Component({
  selector: 'initialize-index',
  templateUrl: './components/init/init.index.html',
  providers: [InitService, ExcelReader, CourseService],
  directives: [Progressbar, WrapperCmp, NgIf],
  pipes: [PersianNumberPipe],
})
export class InitComponent {

  private _progressPercent:number = 0;
  private _showLoading:boolean = false;

  constructor(private _service:InitService, private _reader:ExcelReader) {
  }

  public onInit():void {

  }

  private _initProgressbar():void
  {
    if(this._progressPercent < 100)
    {
      this._progressPercent = this._progressPercent + 1;
      var rand:number = Math.random() * 200;
      setTimeout(() => {this._initProgressbar()}, rand);
    }
  }

  private btnSend_click():void
  {
    this._showLoading = true;
    this._initProgressbar();
    this._service.initalizeSemester(this._reader);
  }

}
