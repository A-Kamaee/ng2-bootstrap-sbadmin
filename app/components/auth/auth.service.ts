import {Injectable} from 'angular2/core';

@Injectable()
export class AuthServices {

  private auth_list = [['abouzarkamaee@gmail.com', '11865591', '9378293247987324'], ['a.ahmadian@gmail.com', '123456', '998327492374']];

  getToken(email:string, password:string):string {

    for (var i in this.auth_list) {

      var user_info = this.auth_list[i];

      if (user_info[0] === email) {
        if (user_info[1] === password) {
          return user_info[2];
        }
      }
    }

    return null;
  }
}
