import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Routine, useCreateDayMutation } from '@store/services/routines';
import { Day, RepetitionType } from '@store/services/routines/day.interface';
import Button from '@components/Button';
import Text from '@components/Text';
import DayInfo from '@components/RoutineBuilder/components/Activities/components/DayInfo';
import DayRepetition from '@components/RoutineBuilder/components/Activities/components/DayRepetition';
import { ActivitiesContainer } from '@components/RoutineBuilder/components/Activities/Activities.styled';

import NoActivities from './components/NoActivities';
import DaysConfigurator from './components/DaysConfigurator';

interface ActivitiesProps {
  routine: Routine;
  handleSave(): void;
}

function Activities({ routine, handleSave }: ActivitiesProps): JSX.Element {
  const { days } = routine;

  const [repetitionModalOpen, setRepetitionModalOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState<Day>(days[0]);

  const [createDay] = useCreateDayMutation();

  const orderNumber = useMemo(() => {
    if (!currentDay) return 0;
    return days.findIndex((day) => day.id === currentDay.id) + 1;
  }, [currentDay, days]);

  const handleAddDay = useCallback(async () => {
    const lastWeekDay = days[days.length - 1]?.weekday || 0;
    const weekday = lastWeekDay === 7 ? 1 : lastWeekDay + 1;

    await createDay({
      repetitionEndDate: null,
      repetitionType: Number(RepetitionType.noRepeat),
      weekday,
      routineId: Number(routine.id),
    });
  }, [createDay, days, routine.id]);

  const handleRepeatDay = useCallback(() => {
    setRepetitionModalOpen(true);
  }, []);

  const handleDayClick = useCallback((day: Day) => {
    setCurrentDay(day);
  }, []);

  useEffect(() => {
    setCurrentDay(days[days.length - 1]);
  }, [days]);
  return (
    <ActivitiesContainer>
      {currentDay ? (
        <>
          <DayInfo day={currentDay} orderNumber={orderNumber} />
          <Button size="large" onClick={handleSave}>
            <Text>Save & continue</Text>
          </Button>
        </>
      ) : (
        <NoActivities />
      )}
      <DaysConfigurator
        currentDay={currentDay}
        days={days}
        onAddDay={handleAddDay}
        onRepeatDay={handleRepeatDay}
        onDayClick={handleDayClick}
      />
      {currentDay && (
        <DayRepetition
          day={currentDay}
          onClose={() => setRepetitionModalOpen(false)}
          open={repetitionModalOpen}
        />
      )}
    </ActivitiesContainer>
  );
}

export default Activities;
