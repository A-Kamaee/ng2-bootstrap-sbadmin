/**
 * Created by Abouzar on 12/19/2015.
 */

import {Subject} from './subject'

export class Topic {
    title:string;
    subjects:Subject[];

    constructor() {
        this.subjects = [];
    }
}