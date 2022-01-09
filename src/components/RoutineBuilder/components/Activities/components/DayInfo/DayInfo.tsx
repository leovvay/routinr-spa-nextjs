import React, { useCallback, useMemo, useState } from 'react';

import { Info } from 'luxon';

import { Day } from '@store/services/routines/day.interface';
import Text from '@components/Text';
import { pluralize } from '@utils';
import { SelectOption } from '@components/Select';
import Button from '@components/Button/Button';
import {
  useDeleteActivityMutation,
  useDeleteDayMutation,
  useUpdateDayMutation,
} from '@store/services/routines';
import AddActivityModal from '@components/CreatorModals/AddActivityModal';
import { Activity } from '@store/services/routines/activity.interface';

import ActivityCard from '../ActivityCard';
import ButtonAddActivity from '../ButtonAddActivity';

import {
  DayInfoContainer,
  DayInfoContent,
  DayInfoHeader,
  DayInfoSelect,
} from './DayInfo.styled';

interface DayInfoProps {
  day: Day;
  orderNumber: number;
}

function DayInfo({ day, orderNumber }: DayInfoProps): JSX.Element {
  const [openAddActivity, setOpenAddActivity] = useState(false);
  const [activityToEdit, setActivityToEdit] = useState<Activity>();

  const [updateDay] = useUpdateDayMutation();
  const [deleteDay] = useDeleteDayMutation();
  const [deleteActivity] = useDeleteActivityMutation();

  const dayWeekday = useMemo(
    () => ({
      value: day.weekday,
      label: Info.weekdays()[day.weekday - 1],
    }),
    [day.weekday]
  );
  const weekdays = useMemo<SelectOption[]>(
    () =>
      Info.weekdays().map((weekday, index) => ({
        value: index + 1,
        label: weekday,
      })) || [],
    []
  );

  const onWeekDayChange = useCallback(
    (weekday: SelectOption<number>) => {
      updateDay({ id: Number(day.id), weekday: weekday.value });
    },
    [day.id, updateDay]
  );

  const handleDelete = useCallback(() => {
    deleteDay(Number(day.id));
  }, [day.id, deleteDay]);

  const handleCloseAddActivity = useCallback(() => {
    setOpenAddActivity(false);
    setActivityToEdit(undefined);
  }, []);

  const handleOpenAddActivity = useCallback(() => {
    setOpenAddActivity(true);
  }, []);

  const handleEditActivity = useCallback((activity: Activity) => {
    setActivityToEdit(activity);
    setOpenAddActivity(true);
  }, []);

  return (
    <DayInfoContainer>
      <DayInfoHeader>
        <Text size="h5">Day {orderNumber}</Text>
        <Text>{pluralize(day.activities.length, 'activity')}</Text>
        <DayInfoSelect
          value={dayWeekday}
          options={weekdays}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onChange={onWeekDayChange}
        />
        <Button onClick={handleDelete} variant="alert">
          Delete day
        </Button>
      </DayInfoHeader>
      <DayInfoContent>
        {day.activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onEdit={handleEditActivity}
            onDelete={() => {
              deleteActivity(Number(activity.id));
            }}
          />
        ))}
        <ButtonAddActivity onClick={handleOpenAddActivity} />
      </DayInfoContent>
      <AddActivityModal
        day={day}
        activity={activityToEdit}
        open={openAddActivity}
        onClose={handleCloseAddActivity}
      />
    </DayInfoContainer>
  );
}

export default DayInfo;
