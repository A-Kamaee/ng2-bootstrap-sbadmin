import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {JSONP_PROVIDERS, HTTP_PROVIDERS} from 'angular2/http';

import {TemporaryService} from './components/temp/temp.service';
import {AbstractService} from './components/temp/abstract.service';

import {App} from './components/app/app';

import {CommentServices} from './components/comment/comment.service'

bootstrap(App, [
  ROUTER_PROVIDERS, JSONP_PROVIDERS, HTTP_PROVIDERS
]);
