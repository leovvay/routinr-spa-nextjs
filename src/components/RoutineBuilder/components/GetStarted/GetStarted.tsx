import React from 'react';

import Text from '@components/Text';

import { RoutineBuilderText } from '../../RoutineBuilder.styled';
import { GetStartedButton } from './GetStarted.styled';

interface GetStartedProps {
  goNextStep(): void;
}

function GetStarted({ goNextStep }: GetStartedProps): JSX.Element {
  return (
    <div>
      <Text size="h0" as="h1">
        Get started building your routine
      </Text>
      <RoutineBuilderText>
        As the world’s first user generated lifestyle marketplace, you can add
        your daily routines, plans and activities for thousands of others to
        adopt and enjoy. Our community thrives on learning from all ways of life
        so do your part to influence others.
      </RoutineBuilderText>
      <GetStartedButton size="large" onClick={goNextStep}>
        <Text weight={700}>Get started</Text>
      </GetStartedButton>
    </div>
  );
}

export default GetStarted;
