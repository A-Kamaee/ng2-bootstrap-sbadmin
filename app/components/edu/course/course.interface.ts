import {Resource} from '../resource/resource.model';
import {Assignment} from '../deliverable/assignment.model';
import {Project} from '../deliverable/project.model'
import {Topic} from '../topic/topic.model'
import {Exam} from '../deliverable/exam.model';
import {User} from '../../auth/user.model'

import {Professor} from "../../edu-auth/professor.model";
import {TA} from "../../edu-auth/TA.model";
import {Student} from "../../edu-auth/student.model";

export interface ICourse
{
  id:string;
  title:string;
  code:string;
  campus:string;
  professor:Professor;
  resources:Resource[];
  assignments:Assignment[];
  projects:Project[];
  chief:TA;
  assistants:TA[];
  semester:string;
  topics:Topic[];
  time:string;
  class:string;
  exams: Exam[];
  students: Student[];
}
