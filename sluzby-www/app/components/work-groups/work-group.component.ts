import {Component, OnInit} from 'angular2/core';

import { WorkGroup} from '../../model/WorkGroup';
import { SchedulerService} from '../../services/scheduler.service';

@Component({
  selector: 'work-group',
  templateUrl: 'app/components/work-groups/work-groups.component.html'
})
export class WorkGroupComponent implements OnInit {
  constructor(private _schedulerService: SchedulerService) { }
  public title: string = 'Skupiny';
  name: string;
  groups: WorkGroup[];
  self = this;

  onAddGroup(name){
    this._schedulerService.addGroup(name);
    this.name = '';
  }

  ngOnInit() {
    this._schedulerService.getWorkGroups()
         .then(groups => this.groups = groups);
  }
}
