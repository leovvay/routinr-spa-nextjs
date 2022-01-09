import React from 'react';

import Text from '@components/Text';
import { RoutineBuilderText } from '@components/RoutineBuilder/RoutineBuilder.styled';

import { NoActivitiesContainer } from './NoActivities.styled';

function NoActivities(): JSX.Element {
  return (
    <NoActivitiesContainer>
      <Text size="h0" as="h1">
        Activities
      </Text>
      <RoutineBuilderText>
        Start building your activities. At the bottom of the page you will see
        the days and within each day you can add your daily activities.
      </RoutineBuilderText>
    </NoActivitiesContainer>
  );
}

export default NoActivities;
