/**
 * Created by Abouzar on 12/19/2015.
 */


export class Topic {

    title:string;
    parent:Topic;
    children:Topic[];

    constructor() {
      this.children = [];
    }
}
