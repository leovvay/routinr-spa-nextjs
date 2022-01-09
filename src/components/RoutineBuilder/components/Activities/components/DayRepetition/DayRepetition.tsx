import React, { useCallback, useState } from 'react';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DateTime } from 'luxon';

import Text from '@components/Text';
import Select, { SelectOption } from '@components/Select';
import Button from '@components/Button/Button';
import {
  Day,
  RepetitionType,
  UpdateDayInput,
} from '@store/services/routines/day.interface';
import { useUpdateDayMutation } from '@store/services/routines';

import {
  DayRepetitionDatePicker,
  DayRepetitionDialog,
  DayRepetitionLabel,
  DayRepetitionSection,
} from './DayRepetition.styled';

const REPETITION_TYPES: Record<number, string> = {
  [RepetitionType.noRepeat]: 'No repeat',
  [RepetitionType.everyDay]: 'Every day',
  [RepetitionType.weekdays]: 'Monday - Friday',
  [RepetitionType.weekends]: 'Weekends',
};

const repetitionOptions = Object.entries(REPETITION_TYPES).map(
  ([value, label]) => ({ value, label })
);

interface DayRepetitionProps {
  day: Day;
  open: boolean;
  onClose(): void;
}

function DayRepetition({
  day,
  open,
  onClose,
}: DayRepetitionProps): JSX.Element {
  const [repetition, setRepetition] = useState<SelectOption<number>>({
    value: day.repetitionType,
    label: REPETITION_TYPES[day.repetitionType],
  });
  const [selectedDate, handleDateChange] = useState<DateTime | null>(
    day.repetitionEndDate
      ? DateTime.fromFormat(day.repetitionEndDate, 'yyyy-MM-dd')
      : DateTime.now()
  );
  const [dialogRef, setDialogRef] = useState<HTMLElement>();

  const [updateDay] = useUpdateDayMutation();

  const handleSave = useCallback(async () => {
    const updatedValues: UpdateDayInput = {
      id: Number(day.id),
      repetitionType: Number(repetition.value),
    };

    if (selectedDate) updatedValues.repetitionEndDate = selectedDate.toISO();

    await updateDay(updatedValues);
    onClose();
  }, [day.id, onClose, repetition.value, selectedDate, updateDay]);

  return (
    <DayRepetitionDialog
      onClose={onClose}
      aria-labelledby="day-repetition-modal"
      open={open}
      ref={(ref: HTMLDivElement) => {
        setDialogRef(ref);
      }}
    >
      <DialogTitle id="day-repetition-modal">
        <Text size="h5" as="h1">
          Chose the repetition type and ending date
        </Text>
      </DialogTitle>
      <DialogContent>
        <DayRepetitionSection>
          <DayRepetitionLabel size="bodyLead" as="h2">
            Repetition type
          </DayRepetitionLabel>
          <Select
            value={repetition}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onChange={setRepetition}
            options={repetitionOptions}
            menuPortalTarget={dialogRef as HTMLElement}
          />
        </DayRepetitionSection>
        <DayRepetitionSection>
          <DayRepetitionLabel size="bodyLead" as="h2">
            Repetition end date
          </DayRepetitionLabel>
          <DayRepetitionDatePicker
            value={selectedDate}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onChange={handleDateChange}
            inputVariant="outlined"
            disablePast
          />
        </DayRepetitionSection>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Save</Button>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </DayRepetitionDialog>
  );
}

export default DayRepetition;
