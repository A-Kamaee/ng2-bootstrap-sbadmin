import {Injectable} from 'angular2/angular2';

@Injectable()
export class TermService
{
  private _terms = ['13901', '13902', '13903', '13911', '13912', '13913', '13921', '13922', '13923', '13931', '13932', '13933', '13941', '13942', '13943', '13951', '13952', '13953', '13961', '13962', '13963'];

  public findByTermNo(termNo:string)
  {

  }

  public findAllTerm():string[]
  {
    return this._terms;
  }

}
