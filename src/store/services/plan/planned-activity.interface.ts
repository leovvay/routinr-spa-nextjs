import { Activity } from '@store/services/routines/activity.interface';
import { PlannedDay } from '@store/services/plan/planned-day.interface';

export interface PlannedActivity {
  id: number;

  startTime: string;

  endTime: string;

  activity: Activity;

  plannedDay?: PlannedDay;
}

export type UpdatePlannedActivity = Omit<
  PlannedActivity,
  'activity' | 'plannedDay'
>;

export interface UpdatePlannedActivityResponse {
  updateTime: PlannedActivity;
}
