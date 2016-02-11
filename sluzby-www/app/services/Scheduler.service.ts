import {Injectable} from 'angular2/core';

import { Schedule} from '../model/Schedule';
import { ScheduledDay} from '../model/ScheduledDay';
import { ScheduledGroup} from '../model/ScheduledGroup';
import { WorkGroup} from '../model/WorkGroup';

@Injectable()
export class SchedulerService {
  schedule: Schedule;
  groupId=1;

  initSchedule(){
    this.schedule = {
     'days': [],
     'persons': [],
     'groups': []
     }
     this.addGroup('Interna - mladší');
     this.addGroup('Interna - starší');
     this.addGroup('Dialýza');
     this.addDays();
  }

  getSchedule(){
    if (!this.schedule) {
      this.initSchedule();
    }

    return Promise.resolve(this.schedule);
  }

  getWorkGroups(){
    if (!this.schedule) {
      this.initSchedule();
    }

    return Promise.resolve(this.schedule.groups);
  }

  addPerson(person){
    this.schedule.groups.push(person);
    return Promise.resolve(null);
  }

/**
  * Adds a group to the Schedule
  * @param name name of the new group
  */
  addGroup(name: string){
    let group: WorkGroup = {
      'groupId': ++this.groupId,
      'name': name
    };
    this.schedule.groups.push(group);
    this.updateDays();
    return Promise.resolve(group);
  }

  containsGroup(day: ScheduledDay, id: number){
    for (let g: number = 0; g < day.groups.length; g++) {
      let group = day.groups[g];
      if (group.groupId === id) {
        return true;
      }
    }
    return false;
  }

  updateDays(){
    for (let i = 0; i < this.schedule.days.length; i++) {
      let day = this.schedule.days[i];
      for (let g = 0; g < this.schedule.groups.length; g++) {
        let group = this.schedule.groups[g];
        if (!this.containsGroup(day, group.groupId)) {
          let scheduledGroup: ScheduledGroup ={
              'doctorId': null,
              'groupId': group.groupId
          };
          day.groups.push(scheduledGroup);
        }
      }
    }
  }

  addDays(){
    for(let i = 0; i < 30; i++) {
      let day: ScheduledDay = {
          'day': (i + 1),
          'month': 2,
          'year': 2016,
          'holiday': false,
          'groups': []
      };
      this.schedule.days.push(day);
    }
    this.updateDays();
  }
}
