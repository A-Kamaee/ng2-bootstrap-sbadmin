import {Staff} from "./staff.model";
import {IProfessor} from "./professor.interface";
import {ProfessorPosition} from './professorPosition.enum'

export class Professor extends Staff
{
  get position():ProfessorPosition{
      return this._position;
      }

  set position(value:ProfessorPosition){
      this._position=value;
      }

  private _position:ProfessorPosition;
}
