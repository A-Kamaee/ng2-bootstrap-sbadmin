import {Component} from 'angular2/core';

import {TemporaryService} from './temp.service';
import {AbstractService} from './abstract.service';

@Component({
  template: `
    <h1> This is temporary page ... </h1>
    {{tags}}
  `,
  providers: [TemporaryService]
})
export class Temp
{
  private tags:string[];

  constructor(private service:TemporaryService)
  {
    this.tags = service.getInformation();
  }
}
