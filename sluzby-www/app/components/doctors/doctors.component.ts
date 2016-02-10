import {Component} from 'angular2/core';

@Component({
  selector: 'doctors',
  template: `<h1>{{title}}</h1>
            `
})
export class DoctorsComponent {
  public title: string = 'doctors';

}
