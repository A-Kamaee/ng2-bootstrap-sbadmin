import {Http, Response} from 'angular2/http'
import {Observable} from 'angular2/angular2';
import {Injectable} from 'angular2/core';
import {BaseService} from '../baseServices/base.service';
import {User} from '../auth/user.model';
import {Session} from '../edu/session/session.model';
import {IComment} from './comment.interface';

@Injectable()
export class CommentService {

  constructor(public _baseService:BaseService<IComment>) {

  }

  protected insertComment(comment:Comment) {
    throw new Error("Not Implemented by far");
  }

  protected fetchComment(user:User, commentableId:string):Comment {
    throw new Error("Not Implemented by far");
  }

  public fetchComments(rateAndCommentableId:string):Observable<Response> {
    return this._baseService.get("/comment/test");
  }

  public loadByRateAndCommentableId(rateAndCommentableId:string) {

    this._baseService.get("/comment/test2").subscribe(data => {

      console.log('data received from server is ', data);

      var temp:IComment[] = (<IComment[]> (data.json()));

      console.log('temporary comment converted from json is', temp);

      //this._dataStore.push(data.text());

      this._baseService._dataStore = temp;
      this._baseService.load();
    });
  }
}
