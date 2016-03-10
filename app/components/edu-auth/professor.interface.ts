import {Staff} from "./staff.model";
import {ProfessorPosition} from './professorPosition.enum'

export interface IProfessor extends Staff
{
  position:ProfessorPosition;
}
