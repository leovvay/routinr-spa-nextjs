import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Text from '@components/Text';
import { ActivitiesCirceButton } from '@components/RoutineBuilder/components/Activities/Activities.styled';

import { ButtonAddActivityContainer } from './ButtonAddActivity.styled';

interface ButtonAddActivityProps {
  onClick(): void;
}

function ButtonAddActivity({ onClick }: ButtonAddActivityProps): JSX.Element {
  return (
    <ButtonAddActivityContainer onClick={onClick}>
      <ActivitiesCirceButton onClick={() => {}} as="div">
        <FontAwesomeIcon icon={faPlus} />
      </ActivitiesCirceButton>
      <Text weight={700}>Add activity</Text>
    </ButtonAddActivityContainer>
  );
}

export default ButtonAddActivity;
