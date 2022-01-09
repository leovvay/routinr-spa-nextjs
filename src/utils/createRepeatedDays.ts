import { DateTime } from 'luxon';

import { Day, RepetitionType } from '@store/services/routines/day.interface';

import createPlanedDay, { FakePlannedDay } from './createPlannedDay';

const saturdayNumber = 6;
const sundayNumber = 7;

function repeatedDates(
  startDate: DateTime,
  endDate: Day['repetitionEndDate'],
  type: Day['repetitionType']
) {
  if (type === RepetitionType.noRepeat) return [];

  const start = startDate.startOf('day');
  const end = DateTime.fromISO(endDate as string).startOf('day');
  const duration = end.diff(start, 'days').days;

  if (duration < 0) return [];
  const daysBetweenStartAndEnd = [];
  let tempDate = startDate.plus({ days: 1 });

  while (tempDate < end) {
    daysBetweenStartAndEnd.push(tempDate);
    tempDate = tempDate.plus({ days: 1 });
  }

  const dates = [start, ...daysBetweenStartAndEnd, end];

  if (type === RepetitionType.everyDay) return dates;

  return dates.filter((day) => {
    const dayNumber = day.weekday;
    const isWeekend =
      dayNumber === sundayNumber || dayNumber === saturdayNumber;

    return type === RepetitionType.weekdays ? !isWeekend : isWeekend;
  });
}

export default function repeatDays(
  days: Day[],
  startDate?: DateTime
): FakePlannedDay[] {
  const fakeDays: FakePlannedDay[] = [];
  const start = startDate
    ? startDate.startOf('day')
    : DateTime.now().startOf('day');

  const repeatedDay = days[0];
  repeatedDates(
    start,
    repeatedDay.repetitionEndDate,
    repeatedDay.repetitionType
  ).forEach((date) => {
    const plannedDay = createPlanedDay(repeatedDay, date);
    fakeDays.push(plannedDay);
  });

  return fakeDays;
}
