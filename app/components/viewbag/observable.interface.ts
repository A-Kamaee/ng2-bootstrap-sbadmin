import {Observer} from './observer.interface';
import {Level} from './level.enum';

export interface Observable
{
  addObserver(obsrever:Observer, level:Level);
}
