import React from 'react';

import { Routine } from '@store/services/routines';
import Text from '@components/Text';
import StatisticItem from '@components/StatisticItem';
import RoutineCreatorLink from '@components/RoutineCreatorLink';

import RoutineCover from './components/RoutineCover';

import {
  RoutineMainInfoContainer,
  RoutineMainInfoContent,
  RoutineMainInfoMain,
  RoutineMainInfoStatistic,
} from './RoutineMainInfo.styled';

interface RoutineMainInfoProps {
  routine: Routine;
}

function RoutineMainInfo({ routine }: RoutineMainInfoProps): JSX.Element {
  return (
    <RoutineMainInfoContainer>
      <RoutineMainInfoContent>
        <RoutineMainInfoMain>
          <RoutineCreatorLink creator={routine.creator} />
          <Text size="h1" weight={700}>
            {routine.title}
          </Text>
        </RoutineMainInfoMain>
        <RoutineMainInfoStatistic>
          <StatisticItem
            icon="/shop-card.svg"
            count={routine.usageCount}
            text="Use this"
          />
          <StatisticItem
            icon="/calendar.svg"
            count={routine.daysCount}
            text="days"
          />
        </RoutineMainInfoStatistic>
      </RoutineMainInfoContent>
      <RoutineCover routine={routine} />
    </RoutineMainInfoContainer>
  );
}

export default RoutineMainInfo;
