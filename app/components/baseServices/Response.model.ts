export class Response {

  get message():string {
    return this._message;
  }

  get result():any {
    return this._result;
  }

  get isSuccessful():boolean {
    return this._isSuccessful;
  }

  private _isSuccessful:boolean;
  private _message:string;
  private _result:any;
}
