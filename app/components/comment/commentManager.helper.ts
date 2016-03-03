import {Guid} from '../utility/Guid.helper'

import {User} from '../auth/user.model';
import {Comment} from './comment.model';
import {IRateAndCommentable} from './iRatableAndCommentable.model';
import {CommentCatalog} from './comment.catalog'

class CommentManager
{

  private constructor()
  {

  }



  public generateIdentifier():string
  {
    return Guid.newGuid();
  }

  // نظر جدید را در پایگاه داده ذخیره می کند
  public addComment(comment:Comment):void
  {

  }

  // تمام نظرات مربوط به یک مقدار نظردادنی را باز می گرداند
  public getComments(commentableId:string): Comment[]
  {

  }



}
