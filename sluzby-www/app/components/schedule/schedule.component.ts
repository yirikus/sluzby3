import {Component, OnInit} from 'angular2/core';

import { Schedule} from '../../model/Schedule';
import { WorkGroup} from '../../model/WorkGroup';

import { SchedulerService} from '../../services/scheduler.service';

@Component({
  selector: 'schedule',
  templateUrl: 'app/components/schedule/schedule.component.html'
})
export class ScheduleComponent implements OnInit  {
  constructor(private _schedulerService: SchedulerService) { }

  public title: string = 'schedule';
  public schedule: Schedule;
  ngOnInit() {
    this._schedulerService.getSchedule()
         .then(schedule => this.schedule = schedule);
  }
}
