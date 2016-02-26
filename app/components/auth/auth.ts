import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {AuthServices} from './auth.service.ts';

@Component({
  selector: 'auth',
  templateUrl: './components/auth/auth.html',
  styleUrls: ['./components/auth/auth.css'],
  directives: [CORE_DIRECTIVES, AuthServices]
})
export class AuthPage {

  private auth_services:AuthServices;

  login(event, email, password):void {
    var token:string = this.auth_services.getToken(email, password);
    console.log('token is ', token);
  }
}
