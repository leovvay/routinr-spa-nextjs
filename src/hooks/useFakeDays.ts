import { useMemo } from 'react';

import { DateTime } from 'luxon';

import { Routine } from '@store/services/routines';
import { RepetitionType } from '@store/services/routines/day.interface';
import { addRegularDays, createRepeatedDays, FakePlannedDay } from '@utils';

export default function useFakeDays(
  routine: Pick<Routine, 'days'>,
  startDate?: DateTime
): FakePlannedDay[] {
  return useMemo(() => {
    const { days } = routine;
    const firstDay = days[0];

    if (!firstDay) return [];

    if (
      days.length === 1 &&
      firstDay.repetitionType !== RepetitionType.noRepeat
    )
      return createRepeatedDays(days, startDate);
    return addRegularDays(days, startDate);
  }, [routine, startDate]);
}
