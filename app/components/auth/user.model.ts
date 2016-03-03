export class User {

  get password():string {
    return this._password;
  }

  get birthday():Date {
    return this._birthday;
  }

  get name():string {
    return this._name;
  }

  constructor(name:string, birthday:Date, email:string, password:string) {
    this._name = name;
    this._birthday = birthday;
    this._email = email;
    this._password = password;
  }

  private _name:string;
  private _birthday:Date;
  private _email:string;
  private _password:string;
}
