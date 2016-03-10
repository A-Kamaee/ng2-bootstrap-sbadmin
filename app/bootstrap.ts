import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {App} from './components/app/app';

import {BaseService} from './components/baseServices/base.service';

bootstrap(App, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS, BaseService
]);
