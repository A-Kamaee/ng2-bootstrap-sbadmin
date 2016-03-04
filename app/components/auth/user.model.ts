export class User {

  constructor(name:string, birthday:Date, email:string, password:string, imageUrl:string) {
    this.name = name;
    this.birthday = birthday;
    this.email = email;
    this.password = password;
    this.imageUrl = imageUrl;
  }

  public name:string;
  public birthday:Date;
  public email:string;
  public password:string;
  public imageUrl:string;
}
