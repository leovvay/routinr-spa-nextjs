import React, { useState } from 'react';

import { DateTime } from 'luxon';
import { Radio, RadioGroup, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import Popover from '@components/Popover';
import Touchable from '@components/Touchable';
import Button from '@components/Button';

import {
  TimePickerArrow,
  TimePickerArrowDown,
  TimePickerColumn,
  TimePickerContainer,
  TimePickerRow,
} from './TimePicker.styled';

interface TimePickerProps {
  AnchorElement: React.ComponentType;
  value: DateTime;
  onChange(time: DateTime): void;
  onClose?(): void;
}

function TimePicker({
  AnchorElement,
  value,
  onChange,
  onClose,
}: TimePickerProps): JSX.Element {
  const [hours, setHours] = useState(value.hour);
  const [minutes, setMinutes] = useState(value.minute);
  const [time, setTime] = useState(value.hour >= 12 ? 'pm' : 'am');

  return (
    <Popover AnchorElement={AnchorElement} open onClose={onClose}>
      <TimePickerContainer>
        <TimePickerRow>
          <TimePickerColumn>
            <Touchable
              onClick={() =>
                setHours((prev) => {
                  if (prev === 11) return prev;
                  return prev + 1;
                })
              }
            >
              <TimePickerArrow />
            </Touchable>
            <TextField
              value={DateTime.fromObject({ hour: hours }).toFormat('hh')}
              onChange={({ target: { value: newHours } }) => {
                if (
                  Number.isNaN(Number(newHours)) ||
                  Number(newHours) < 0 ||
                  Number(newHours) > 11
                )
                  return;
                setHours(Number(newHours));
              }}
              inputProps={{
                maxLength: 2,
                size: 2,
                pattern: '[0-9]*',
                type: 'text',
              }}
            />
            <Touchable
              onClick={() =>
                setHours((prev) => {
                  if (prev === 1) return prev;
                  return prev - 1;
                })
              }
            >
              <TimePickerArrowDown />
            </Touchable>
          </TimePickerColumn>
          <TimePickerColumn>
            <span>:</span>
          </TimePickerColumn>
          <TimePickerColumn>
            <Touchable
              onClick={() =>
                setMinutes((prev) => {
                  if (prev === 59) return prev;
                  return prev + 1;
                })
              }
            >
              <TimePickerArrow />
            </Touchable>
            <TextField
              value={DateTime.fromObject({ minute: minutes }).toFormat('mm')}
              onChange={({ target: { value: newMinutes } }) => {
                if (
                  Number.isNaN(Number(newMinutes)) ||
                  Number(newMinutes) < 0 ||
                  Number(newMinutes) > 59
                )
                  return;
                setMinutes(Number(newMinutes));
              }}
              inputProps={{
                maxLength: 2,
                size: 2,
                pattern: '[0-9]*',
                type: 'text',
              }}
            />
            <Touchable
              onClick={() =>
                setMinutes((prev) => {
                  if (prev === 0) return prev;
                  return prev - 1;
                })
              }
            >
              <TimePickerArrowDown />
            </Touchable>
          </TimePickerColumn>
          <TimePickerColumn>
            <RadioGroup
              aria-label="isAM"
              value={time}
              onChange={({ target: { value: newTime } }) => {
                if (newTime === 'am' && hours > 12)
                  setHours((prev) => prev - 12);

                if (newTime === 'pm' && hours < 12)
                  setHours((prev) => prev + 12);
                setTime(newTime);
              }}
              defaultValue={hours > 12 ? 'pm' : 'am'}
            >
              <FormControlLabel value="am" control={<Radio />} label="AM" />
              <FormControlLabel value="pm" control={<Radio />} label="PM" />
            </RadioGroup>
          </TimePickerColumn>
        </TimePickerRow>
        <TimePickerRow>
          <Button
            onClick={() =>
              onChange(DateTime.fromObject({ hour: hours, minute: minutes }))
            }
          >
            Submit
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </TimePickerRow>
      </TimePickerContainer>
    </Popover>
  );
}

TimePicker.defaultProps = {
  onClose: () => {},
};

export default TimePicker;
