import {Component, OnInit} from 'angular2/core';

import { Schedule} from '../../model/Schedule';

import { SchedulerService} from '../../services/scheduler.service';


@Component({
  selector: 'doctors',
  templateUrl: 'app/components/doctors/doctors.component.html'
})
export class DoctorsComponent implements OnInit{
  constructor(private _schedulerService: SchedulerService) { }
  
  public title: string = 'Lékaři';
  public schedule: Schedule;

  ngOnInit() {
    this._schedulerService.getSchedule()
         .then(schedule => this.schedule = schedule);
  }
}
