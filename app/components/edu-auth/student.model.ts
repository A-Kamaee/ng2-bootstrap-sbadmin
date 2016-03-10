import {Role} from '../auth/role.model.ts';
import {StduentLevel} from './studentLevel.enum';
import {Staff} from "./staff.model";

export class Student extends Staff
{
  get level():StduentLevel{
      return this._level;
      }

  set level(value:StduentLevel){
      this._level=value;
      }

  private _level:StduentLevel;
}
