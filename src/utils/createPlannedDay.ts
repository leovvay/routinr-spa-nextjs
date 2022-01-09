import { DateTime } from 'luxon';

import { Day } from '@store/services/routines/day.interface';
import { Activity } from '@store/services/routines/activity.interface';

export interface FakePlannedDay {
  date: string;
  filteredActivities: number[];
  activities: Activity[];
  plannedActivities: FakePlannedActivity[];
}

interface FakePlannedActivity {
  id: number;
  startTime: string;
  endTime: string;
  activity: Activity;
  activityId: number;
}

export default function createPlanedDay(
  day: Day,
  date: DateTime
): FakePlannedDay {
  const { activities } = day;
  const plannedActivities = activities.map((activity) => ({
    id: activity.id,
    startTime: `${activity.startTime}`,
    endTime: `${activity.endTime}`,
    activity,
    activityId: activity.id,
  }));
  return {
    date: date.toISO(),
    filteredActivities: activities.map((activity) => activity.id),
    activities,
    plannedActivities,
  };
}
