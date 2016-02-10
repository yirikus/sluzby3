import {Component} from 'angular2/core';

@Component({
  selector: 'stats',
  template: `<h1>{{title}}</h1>
            `
})
export class StatsComponent {
  public title: string = 'stats';

}
