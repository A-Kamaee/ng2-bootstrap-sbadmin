import {Injectable} from 'angular2/core'

import {AbstractService} from './abstract.service'

@Injectable()
export class TemporaryService extends AbstractService
{
  constructor()
  {
    console.log('Temporary Service constructor called ...');
    super();
  }

  public getInformation():string[]
  {
    return ["This is first information", "This is second information", "This is third information", "This is fourth information"];
  }
}
