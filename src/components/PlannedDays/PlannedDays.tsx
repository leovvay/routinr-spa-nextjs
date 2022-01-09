import React, { useCallback, useMemo } from 'react';

import { DateTime } from 'luxon';
import { NoSsr } from '@mui/material';

import { PlannedDay } from '@store/services/plan/planned-day.interface';
import { useIsMobileVersion } from '@hooks';
import Button from '@components/Button/Button';
import PlannedDaysCalendar from '@components/PlannedDaysCalendar';
import PlannedDaysMonthNavigation from '@components/PlannedDaysMonthNavigation';
import PlannedDaysActivities from '@components/PlannedDaysActivities';

import {
  DataText,
  DataTextLight,
  PlannedDaysContainer,
  PlannedDaysNavigation,
  PlannedDaysNavigationButtons,
} from './PlannedDays.styled';

interface PlannedDaysProps {
  days: Omit<PlannedDay, 'id'>[];
  currentDay: DateTime;
  onCurrentDayChange(day: DateTime): void;
  onPrevMonth?(): void;
  onNextMonth?(): void;
  showCurrentDate?: boolean;
  disableInteractions?: boolean;
}

function PlannedDays({
  days,
  currentDay,
  onCurrentDayChange,
  showCurrentDate,
  onPrevMonth,
  onNextMonth,
  disableInteractions,
}: PlannedDaysProps & typeof PlannedDays.defaultProps): JSX.Element {
  const isMobile = useIsMobileVersion();

  const buttonSize = isMobile ? 'small' : 'medium';

  const currentDayPlannedActivities = useMemo(
    () =>
      days.find((day) => currentDay.hasSame(DateTime.fromISO(day.date), 'day'))
        ?.plannedActivities ?? [],
    [currentDay, days]
  );

  const onTodayClick = useCallback(() => {
    onCurrentDayChange(DateTime.now().startOf('day'));
  }, [onCurrentDayChange]);

  const onTomorrowClick = useCallback(() => {
    onCurrentDayChange(DateTime.now().plus({ days: 1 }).startOf('day'));
  }, [onCurrentDayChange]);

  const onNextWeekClick = useCallback(() => {
    onCurrentDayChange(
      DateTime.now().plus({ weeks: 1 }).startOf('week').startOf('day')
    );
  }, [onCurrentDayChange]);

  const onPrevMonthClick = useCallback(() => {
    onCurrentDayChange(
      currentDay.minus({ month: 1 }).startOf('month').startOf('day')
    );
    onPrevMonth?.();
  }, [currentDay, onCurrentDayChange, onPrevMonth]);

  const onNextMonthClick = useCallback(() => {
    onCurrentDayChange(
      currentDay.plus({ month: 1 }).startOf('month').startOf('day')
    );
    onNextMonth?.();
  }, [currentDay, onCurrentDayChange, onNextMonth]);

  return (
    <PlannedDaysContainer>
      <PlannedDaysNavigation>
        <NoSsr>
          {showCurrentDate && !isMobile && (
            <div key="date">
              <DataText>
                {currentDay.day} {currentDay.monthLong},
              </DataText>
              <DataTextLight>{` ${currentDay.weekdayLong}`}</DataTextLight>
            </div>
          )}
        </NoSsr>
        <PlannedDaysNavigationButtons key="buttons">
          <Button
            size={buttonSize}
            onClick={onTodayClick}
            variant="outlined"
            shadow
          >
            Today
          </Button>
          <Button
            size={buttonSize}
            onClick={onTomorrowClick}
            variant="outlined"
            shadow
          >
            Tomorrow
          </Button>
          <Button
            size={buttonSize}
            onClick={onNextWeekClick}
            variant="outlined"
            shadow
          >
            Next Week
          </Button>
        </PlannedDaysNavigationButtons>
        {!isMobile && (
          <PlannedDaysMonthNavigation
            currentDay={currentDay}
            onPrevMonthClick={onPrevMonthClick}
            onNextMonthClick={onNextMonthClick}
          />
        )}
      </PlannedDaysNavigation>
      <NoSsr>
        <PlannedDaysCalendar
          days={days}
          onCurrentDayChange={onCurrentDayChange}
          currentDay={currentDay}
          onPrevMonthClick={onPrevMonthClick}
          onNextMonthClick={onNextMonthClick}
        />
      </NoSsr>
      <PlannedDaysActivities
        plannedActivities={currentDayPlannedActivities}
        disableInteractions={disableInteractions}
      />
    </PlannedDaysContainer>
  );
}

PlannedDays.defaultProps = {
  showCurrentDate: false,
  disableInteractions: false,
  onPrevMonth: () => {},
  onNextMonth: () => {},
};

export default PlannedDays;
