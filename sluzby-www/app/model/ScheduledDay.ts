import { ScheduledGroup} from './ScheduledGroup';

export interface ScheduledDay {
    day: number;
    month: number;
    year: number;
    holiday: boolean;
    groups: ScheduledGroup[];
}
