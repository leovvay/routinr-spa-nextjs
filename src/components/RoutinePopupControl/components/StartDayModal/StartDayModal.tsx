import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { DateTime } from 'luxon';
import { useSnackbar } from 'notistack';

import { RoutineInCalendarInfo } from '@store/services/routines';
import { useFakeDays } from '@hooks';
import PlannedDaysCalendar from '@components/PlannedDaysCalendar';
import PlannedDaysActivities from '@components/PlannedDaysActivities';
import Button from '@components/Button';
import { useChangeRoutineStartDateMutation } from '@store/services/plan/plan';

import {
  StartDateButtons,
  StartDateMonthNavigation,
} from './StartDayModal.styled';

interface StartDayModalProps {
  routine: RoutineInCalendarInfo;
  isOpen: boolean;
  onClose(): void;
}

function StartDayModal({
  routine,
  onClose,
  isOpen,
}: StartDayModalProps): JSX.Element {
  const [currentDay, setCurrentDay] = useState(DateTime.now().startOf('day'));
  const [startDate, setStartDate] = useState<DateTime>();

  const { enqueueSnackbar } = useSnackbar();
  const [changeStartDate, { error }] = useChangeRoutineStartDateMutation();

  const fakeDays = useFakeDays(routine, startDate);

  const currentDayPlannedActivities = useMemo(
    () =>
      fakeDays.find((day) =>
        currentDay.hasSame(DateTime.fromISO(day.date), 'day')
      )?.plannedActivities ?? [],
    [currentDay, fakeDays]
  );

  const handlePrevMonthClick = useCallback(() => {
    setCurrentDay((currentDate) => currentDate.minus({ month: 1 }));
  }, []);

  const handleNextMonthClick = useCallback(() => {
    setCurrentDay((currentDate) => currentDate.plus({ month: 1 }));
  }, []);

  const handleApply = useCallback(async () => {
    if (startDate) {
      await changeStartDate({
        routineId: Number(routine.id),
        startDate: startDate.toISO({ includeOffset: false }),
      });

      onClose();
    }
  }, [changeStartDate, onClose, routine.id, startDate]);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top',
        },
      });
    }
  }, [enqueueSnackbar, error]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent>
        <StartDateMonthNavigation
          currentDay={currentDay}
          onPrevMonthClick={handlePrevMonthClick}
          onNextMonthClick={handleNextMonthClick}
        />
        <PlannedDaysCalendar
          currentDay={currentDay}
          days={fakeDays}
          onPrevMonthClick={handlePrevMonthClick}
          onNextMonthClick={handleNextMonthClick}
          onCurrentDayChange={setCurrentDay}
          forceMobile
        />
        <StartDateButtons>
          <Button onClick={() => setStartDate(currentDay)}>
            Set start date
          </Button>
          {startDate && <Button onClick={handleApply}>Apply</Button>}
        </StartDateButtons>

        <PlannedDaysActivities
          plannedActivities={currentDayPlannedActivities}
          disableInteractions
          forceMobile
        />
      </DialogContent>
    </Dialog>
  );
}

export default StartDayModal;
