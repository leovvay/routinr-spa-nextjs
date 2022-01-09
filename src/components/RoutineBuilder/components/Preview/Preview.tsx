import React, { useState } from 'react';

import { DateTime } from 'luxon';

import { Routine } from '@store/services/routines';
import RoutineMainInfo from '@components/RoutineMainInfo';
import PlannedDays from '@components/PlannedDays';
import { useFakeDays } from '@hooks';

import { PreviewDialog, PreviewExitButton } from './Preview.styled';

interface PreviewProps {
  routine: Routine;
  open: boolean;
  onClose(): void;
}
function Preview({ routine, onClose, open }: PreviewProps): JSX.Element {
  const [currentDay, setCurrentDay] = useState(DateTime.now().startOf('day'));

  const fakeDays = useFakeDays(routine);

  return (
    <PreviewDialog
      onClose={onClose}
      aria-labelledby="routine-preview-modal"
      open={open}
      fullScreen
    >
      <RoutineMainInfo routine={routine} />
      <PlannedDays
        currentDay={currentDay}
        days={fakeDays}
        onCurrentDayChange={setCurrentDay}
        disableInteractions
      />
      <PreviewExitButton onClick={onClose} variant="alert">
        Exit preview
      </PreviewExitButton>
    </PreviewDialog>
  );
}

export default Preview;
