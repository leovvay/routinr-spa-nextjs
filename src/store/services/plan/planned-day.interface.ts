import { PlannedActivity } from '@store/services/plan/planned-activity.interface';

export interface PlannedDay {
  id: number;

  date: string;

  filteredActivities: number[];

  plannedActivities: PlannedActivity[];
}

export interface PlannedDaysFindArgs {
  from: string;
  to: string;
}

export interface GetPlannedDaysResponse {
  getPlannedDays: PlannedDay[];
}

export interface GetPlannedActivityByIdResponse {
  getPlannedActivityById: Required<PlannedActivity>;
}
