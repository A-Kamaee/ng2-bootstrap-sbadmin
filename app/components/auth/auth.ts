import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {AuthServices} from './auth.service';

@Component({
  selector: 'auth',
  templateUrl: './components/auth/auth.html',
  styleUrls: ['./components/auth/auth.css'],
  providers: [AuthServices],
  directives: [CORE_DIRECTIVES]
})
export class AuthPage {

  constructor(public auth_services:AuthServices) {

  }

  login(event, email, password):void {
    var token:string = this.auth_services.getToken(email, password);
  }
}
