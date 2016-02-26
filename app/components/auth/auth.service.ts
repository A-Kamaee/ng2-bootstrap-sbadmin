export class AuthServices {

  private auth_list;

  constructor()
  {
    this.auth_list = [
      ['abouzarkamaee@gmail.com', '11865591', '9378293247987324'],
      ['a.ahmadian@gmail.com', '123456', '998327492374']
    ];
  }

  getToken(email:string, password: string): string {

    for(var user_info in this.auth_list)
    {
      if(user_info.email === user_info[0])
      {
        if(user_info.password === user_info[1])
        {
          return user_info[2];
        }
      }
    }

    return null;

  }
}
