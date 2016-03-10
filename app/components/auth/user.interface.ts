import {Role} from './role.model.ts'

export interface IUser
{
  name:string;
  birthday:Date;
  email:string;
  password:string;
  imageUrl:string;
  roles:Role[];
}
