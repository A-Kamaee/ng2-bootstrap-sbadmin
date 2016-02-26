import {Component, CORE_DIRECTIVES, Inject} from 'angular2/angular2';
import {Router, RouteParams} from 'angular2/router';


import {AuthServices} from './auth.service';

@Component({
  selector: 'auth',
  templateUrl: './components/auth/auth.html',
  styleUrls: ['./components/auth/auth.css'],
  providers: [AuthServices],
  directives: [CORE_DIRECTIVES]
})
export class AuthPage {

  constructor(private auth_services:AuthServices, private router:Router) {

  }

  login(email, password):void {
    var token:string = this.auth_services.getToken(email, password);
    localStorage.setItem("auth_token", token);
    console.log('storage saved')
    this.router.navigate(['Dashboard.home']);
  }

}
