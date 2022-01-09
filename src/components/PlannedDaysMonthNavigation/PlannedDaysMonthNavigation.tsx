import React from 'react';

import { DateTime } from 'luxon';
import styled from 'styled-components';

import Image from '@components/Image';
import Text from '@components/Text';

import {
  PlannedDaysMonthNavigationContainer,
  PlannedDaysMonthNavigationNextMonth,
  PlannedDaysMonthNavigationPrevMonth,
} from './PlannedDaysMonthNavigation.styled';

interface PlannedDaysMonthNavigationProps {
  currentDay: DateTime;
  onPrevMonthClick(): void;
  onNextMonthClick(): void;
  className?: string;
}

function PlannedDaysMonthNavigation({
  currentDay,
  onNextMonthClick,
  onPrevMonthClick,
  className,
}: PlannedDaysMonthNavigationProps): JSX.Element {
  return (
    <PlannedDaysMonthNavigationContainer className={className}>
      <PlannedDaysMonthNavigationPrevMonth onClick={onPrevMonthClick}>
        <Image src="/grey-back-arrow.svg" width={10} height={18} />
      </PlannedDaysMonthNavigationPrevMonth>
      <Text
        size="bodyLead"
        weight={800}
      >{`${currentDay.monthLong} ${currentDay.year}`}</Text>
      <PlannedDaysMonthNavigationNextMonth onClick={onNextMonthClick}>
        <Image src="/grey-back-arrow.svg" width={10} height={18} />
      </PlannedDaysMonthNavigationNextMonth>
    </PlannedDaysMonthNavigationContainer>
  );
}

PlannedDaysMonthNavigation.defaultProps = {
  className: '',
};

export default styled(PlannedDaysMonthNavigation)``;
