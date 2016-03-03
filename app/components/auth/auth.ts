import {Component, CORE_DIRECTIVES, Inject} from 'angular2/angular2';
import {Router, RouteParams} from 'angular2/router';
import {NgIf} from 'angular2/common'

import {AuthServices} from './auth.service';

@Component({
  selector: 'auth',
  templateUrl: './components/auth/auth.html',
  styleUrls: ['./components/auth/auth.css'],
  providers: [AuthServices],
  directives: [CORE_DIRECTIVES, NgIf]
})
export class AuthPage {

  private showError:boolean = false;

  constructor(private auth_services:AuthServices, private router:Router) {

  }

  login(email, password):void {
    try {
      var token:string = this.auth_services.getToken(email, password);
      localStorage.setItem("auth_token", token);
      this.router.navigate(['Dashboard.home']);
    } catch (e) {
      this.showError = true;
      console.warn("Error occurred in login.")
    }
  }

}
