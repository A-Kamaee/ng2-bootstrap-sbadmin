import {Guid} from '../utility/Guid.helper'

import {User} from '../auth/user.model';
import {Comment} from './comment.model';
import {IRateAndCommentable} from './iRatableAndCommentable.model';
import {CommentCatalog} from './comment.catalog'
import {Session} from '../edu/session/session.model'

export class CommentManager
{

  private static _instance:CommentManager;
  private _commentCatalog:CommentCatalog;

  constructor()
  {
    this._commentCatalog = new CommentCatalog();
  }

  public static GetInstance(): CommentManager
  {
    if(CommentManager._instance == null)
    {
      CommentManager._instance = new CommentManager();
    }
    return CommentManager._instance;
  }



  public generateIdentifier():string
  {
    return Guid.newGuid();
  }

  // نظر جدید را در پایگاه داده ذخیره می کند
  public addComment(comment:Comment):void
  {
    throw new Error("Not Implemented by far");
  }

  // تمام نظرات مربوط به یک مقدار نظردادنی را باز می گرداند
  public getComments(commentableId:string): Comment[]
  {
    throw new Error('Not Implemented so far ...')
  }

  public getComment(commentableId:string, user:User):Comment
  {
    var comment:Comment = new Comment(new User("Test", new Date(), "tet@gmil.com", "lksdjfldfj", "lksdjfldskjf"), new Session());
    return comment;
  }

}
