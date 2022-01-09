import { DateTime } from 'luxon';

import { Day } from '@store/services/routines/day.interface';

import createPlanedDay, { FakePlannedDay } from './createPlannedDay';

export default function addRegularDays(
  days: Day[],
  startDate?: DateTime
): FakePlannedDay[] {
  const fakeDays: FakePlannedDay[] = [];
  const start = startDate
    ? startDate.startOf('day')
    : DateTime.now().startOf('day');

  let lastWeekDay = start.weekday;
  let tempDate = start;
  let isFirst = true;

  const firstDayWeekday = days[0].weekday;
  const diff = startDate ? lastWeekDay - firstDayWeekday : 0;

  days.forEach((day) => {
    const { weekday } = day;

    // if it is first date and it is in past - we should go to the next week
    if (lastWeekDay > weekday && isFirst && !startDate) {
      tempDate = tempDate.plus({ days: 7 });
      // if next day is the same weekday - we should go to the next week
    } else if (lastWeekDay === weekday && !isFirst) {
      tempDate = tempDate.plus({ days: 7 });
      // if previous day is Sunday - we should add 1 day to be on Monday
    } else if (lastWeekDay === 7 && !isFirst) {
      tempDate = tempDate.plus({ days: 7 });
    }

    /*
      Luxon docs says 1 is Monday and 7 is Sunday.
      But
    */
    tempDate = tempDate.set({ weekday });

    lastWeekDay = weekday;
    isFirst = false;

    const plannedDay = createPlanedDay(day, tempDate);
    plannedDay.date = DateTime.fromISO(plannedDay.date)
      .plus({ days: diff })
      .toISO();
    fakeDays.push(plannedDay);
  });

  return fakeDays;
}
