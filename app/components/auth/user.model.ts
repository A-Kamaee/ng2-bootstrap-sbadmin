import {IUser} from './user.interface'
import {Role} from "./role.model.ts";

export class User implements IUser {

  constructor(name:string, birthday:Date, email:string, password:string, imageUrl:string) {
    this._name = name;
    this._birthday = birthday;
    this._email = email;
    this._password = password;
    this._imageUrl = imageUrl;
    this._roles = [];
  }

  public toString():string {
    return this._name;
  }

  get roles():Role[] {
    return this._roles;
  }

  set roles(value:Role[]) {
    this._roles = value;
  }


  get name():string {
    return this._name;
  }

  set name(value:string) {
    this._name = value;
  }

  get birthday():Date {
    return this._birthday;
  }

  set birthday(value:Date) {
    this._birthday = value;
  }

  get email():string {
    return this._email;
  }

  set email(value:string) {
    this._email = value;
  }

  get password():string {
    return this._password;
  }

  set password(value:string) {
    this._password = value;
  }

  get imageUrl():string {
    return this._imageUrl;
  }

  set imageUrl(value:string) {
    this._imageUrl = value;
  }

  private _name:string;
  private _birthday:Date;
  private _email:string;
  private _password:string;
  private _imageUrl:string;
  private _roles:Role[];
}
