import { DateTime } from 'luxon';

import { PlannedActivity } from '@store/services/plan/planned-activity.interface';

export default function getPlannedActivityTime(
  plannedActivity: Pick<PlannedActivity, 'startTime' | 'endTime'>
): { startTime: DateTime; endTime: DateTime } {
  const startTime = DateTime.fromFormat(plannedActivity.startTime, 'HH:mm');

  const endTime = DateTime.fromFormat(plannedActivity.endTime, 'HH:mm');

  return {
    startTime,
    endTime,
  };
}
