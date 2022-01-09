import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRetweet, faStop } from '@fortawesome/free-solid-svg-icons';
import { Info } from 'luxon';

import Image from '@components/Image';
import Text from '@components/Text';
import { Day, RepetitionType } from '@store/services/routines/day.interface';

import { ActivitiesCirceButton } from '../../Activities.styled';
import {
  DaysConfiguratorContainer,
  DaysConfiguratorDayButton,
  DaysConfiguratorFirstDayHint,
  DaysConfiguratorRepeatDayHint,
} from './DaysConfigurator.styled';

interface DaysConfiguratorProps {
  days: Day[];
  currentDay?: Day;
  onAddDay(): void;
  onRepeatDay(): void;
  onDayClick(day: Day): void;
}

function DaysConfigurator({
  days,
  currentDay,
  onAddDay,
  onRepeatDay,
  onDayClick,
}: DaysConfiguratorProps): JSX.Element {
  const isRepeatable = days[0]?.repetitionType !== RepetitionType.noRepeat;
  const isAddDisabled = days.length === 1 && isRepeatable;

  return (
    <DaysConfiguratorContainer>
      <DaysConfiguratorFirstDayHint>
        {days.length === 1 ? (
          <Image src="/add-a-day-default-hint.png" width={101} height={72} />
        ) : (
          <Image src="/add-a-day-first-hint.png" width={187} height={72} />
        )}
      </DaysConfiguratorFirstDayHint>
      <Text size="h5" weight={600}>
        Day
      </Text>
      <ActivitiesCirceButton onClick={onAddDay} disabled={isAddDisabled}>
        <FontAwesomeIcon icon={faPlus} />
      </ActivitiesCirceButton>
      {days.length === 1 && (
        <>
          <ActivitiesCirceButton onClick={onRepeatDay}>
            <FontAwesomeIcon icon={isRepeatable ? faStop : faRetweet} />
          </ActivitiesCirceButton>
          <DaysConfiguratorRepeatDayHint>
            <Image src="/repeat.png" width={172} height={72} />
          </DaysConfiguratorRepeatDayHint>
        </>
      )}
      {days.map((day, index) => (
        <DaysConfiguratorDayButton
          key={day.id}
          onClick={() => onDayClick(day)}
          $active={currentDay?.id === day.id}
        >
          <Text size="validationCaption" as="p">
            {index + 1}
          </Text>
          <Text size="footerCaption">
            {Info.weekdays('short')[day.weekday - 1]}
          </Text>
        </DaysConfiguratorDayButton>
      ))}
    </DaysConfiguratorContainer>
  );
}

DaysConfigurator.defaultProps = {
  currentDay: undefined,
};

export default DaysConfigurator;
