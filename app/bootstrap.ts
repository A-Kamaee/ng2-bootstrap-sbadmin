import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {JSONP_PROVIDERS, HTTP_PROVIDERS} from 'angular2/http'

import {App} from './components/app/app';

import {CommentServices} from './components/comment/comment.service'

bootstrap(App, [
  ROUTER_PROVIDERS, JSONP_PROVIDERS, HTTP_PROVIDERS, CommentServices
]);
