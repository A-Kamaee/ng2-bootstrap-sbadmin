import {Response} from "./Response.model";

export class BaseServices
{
  public _host:string;



  public callService(relativeURL:string, parameters: Dictionary<string>):Response
  {
    throw new Error('callServices Not Implemented so far!');
  }
}
