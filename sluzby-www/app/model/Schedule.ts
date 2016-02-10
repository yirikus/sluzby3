import { ScheduledDay} from './ScheduledDay';
import { Person} from './Person';
import { WorkGroup} from './WorkGroup';

export interface Schedule {
  days: ScheduledDay[];
  persons: Person[];
  groups: WorkGroup[];
}
