import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DoctorsComponent} from '../doctors/doctors.component';
import { ScheduleComponent} from '../schedule/schedule.component';
import { StatsComponent} from '../stats/stats.component';
import { WorkGroupComponent} from '../work-groups/work-group.component';
import { SchedulerService} from '../../services/scheduler.service';

@Component({
  selector: 'navigator',
  directives: [ROUTER_DIRECTIVES],
  providers:[SchedulerService,ROUTER_PROVIDERS],
  template: `<h1>{{title}}</h1>
            <nav>
               <a [routerLink]="['Schedule']">Kalendář</a>
               <a [routerLink]="['Stats']">Statistiky</a>
               <a [routerLink]="['Doctors']">Lékaři</a>
               <a [routerLink]="['WorkGroups']">Skupiny</a>
            </nav>
            <router-outlet></router-outlet>
            `
})
@RouteConfig([
  {
  path: '/schedule',
  name: 'Schedule',
  component: ScheduleComponent
},
{
  path: '/doctors',
  name: 'Doctors',
  component: DoctorsComponent
},
{
  path: '/stats',
  name: 'Stats',
  component: StatsComponent
},
{
  path: '/work-groups',
  name: 'WorkGroups',
  component: WorkGroupComponent
}

])
export class NavigatorComponent {
  public title: string = 'Sluzby 3.0';

}
