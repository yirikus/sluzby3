import {Injectable} from 'angular2/core';

import { Schedule} from '../model/Schedule';
import { ScheduledDay} from '../model/ScheduledDay';
import { ScheduledGroup} from '../model/ScheduledGroup';
import { WorkGroup} from '../model/WorkGroup';

@Injectable()
export class SchedulerService {
  schedule: Schedule;

  initSchedule(){
    this.schedule = {
     'days': [],
     'persons': [],
     'groups': []
     }
     this.addGroup({
       'groupId': 1,
       'name': 'Interna - mladší'
     });
     this.addGroup({
       'groupId': 2,
       'name': 'Interna - starší'
     });
     this.addGroup({
       'groupId': 3,
       'name': 'Dialýza'
     });
     this.addDays();
  }

  getSchedule(){
    if (!this.schedule) {
      this.initSchedule();
    }

    return Promise.resolve(this.schedule);
  }

  addPerson(person){
    this.schedule.groups.push(person);
  }

  addGroup(group){
    this.schedule.groups.push(group);
  }

  addDays(){
    for(let i = 0; i < 30; i++) {
      let groups: ScheduledGroup[] = [];
      for (let j = 0; j < this.schedule.groups.length; j++) {
          let scheduledGroup: ScheduledGroup ={
              'doctorId': null,
              'groupId': this.schedule.groups[j].groupId
          };
          groups.push(scheduledGroup);
      }
      let day: ScheduledDay = {
          'day': (i + 1),
          'month': 2,
          'year': 2016,
          'holiday': false,
          'groups': groups
      };
      this.schedule.days.push(day);
    }
  }
}
