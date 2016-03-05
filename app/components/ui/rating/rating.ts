import {Component, View, NgFor, NgClass, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'rating',
  inputs: ['rate'],
  outputs: ['updateRate: rateChange'],
  template: `
    <span tabindex="0">
      <template ng-for [ng-for-of]="range" #index="index">
        <span class="sr-only">({{ index < rate ? '*' : ' ' }})</span>
        <i class="glyphicon" (click)="update(index + 1)" [ng-class]="index < rate ? 'glyphicon-star' : 'glyphicon-star-empty'"></i>
      </template>
    </span>
  `,
  directives: [NgFor, NgClass]
})
export class Rating {
  private range:Array<number> = [1,2,3,4,5];
  private rate:number;
  private updateRate:EventEmitter<any> = new EventEmitter();

  update(value) {
    this.rate = value;
    this.updateRate.next(value);
  }
}
