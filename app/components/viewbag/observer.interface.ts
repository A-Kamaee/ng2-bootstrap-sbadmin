import {Level} from './level.enum'

export interface Observer
{
  notify(level:Level):void;
}
