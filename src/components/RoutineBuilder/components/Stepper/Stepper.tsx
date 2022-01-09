import React, { Fragment } from 'react';

import Divider from '@mui/material/Divider';
import styled from 'styled-components';

import Text from '@components/Text';
import Button from '@components/Button';

import {
  Actions,
  CompleteIcon,
  ErrorIcon,
  InProgressIcon,
  RedText,
  Step,
  StepperContainer,
  StepperStickyContent,
  Title,
} from './Stepper.styled';

const stepNames: Record<number, string> = {
  1: 'Overview',
  2: 'Media & attachments',
  3: 'Activities',
  4: 'Publish and pricing',
};

interface StepperProps {
  currentStep: number;
  isSaveDisabled: boolean;
  stepErrors: Record<number, boolean>;
  stepCompleteness: Record<number, boolean>;
  handleStepClick(step: number): void;
  handleSave(): void;
  handlePreview(): void;
  className?: string;
}

function Stepper({
  currentStep,
  isSaveDisabled,
  stepErrors,
  stepCompleteness,
  handleStepClick,
  handleSave,
  handlePreview,
  className,
}: StepperProps): JSX.Element {
  const getStepIcon = (step: number) => {
    if (stepErrors[step]) return <ErrorIcon />;
    if (stepCompleteness[step]) return <CompleteIcon />;
    return <InProgressIcon />;
  };

  const isNotValid = Object.values(stepErrors).some(Boolean);
  const isOverviewComplete = stepCompleteness[1];

  return (
    <StepperContainer className={className}>
      <StepperStickyContent>
        <Title size="h5" weight={700} as="h3">
          {isNotValid ? (
            <>
              Add all{' '}
              <RedText size="h5" weight={700}>
                required
              </RedText>{' '}
              info to publish your routine
            </>
          ) : (
            'Complete steps below to create a routine'
          )}
        </Title>
        <Divider />
        {Object.entries(stepNames).map(([stepNumber, name]) => {
          const step = Number(stepNumber);
          const disabled = step > 1 ? !stepCompleteness[step - 1] : false;
          return (
            <Fragment key={stepNumber}>
              <Step onClick={() => handleStepClick(step)} disabled={disabled}>
                <Text weight={currentStep === step ? 800 : 600}>{name}</Text>
                {getStepIcon(step)}
              </Step>
              <Divider />
            </Fragment>
          );
        })}
        <Actions>
          <Button
            onClick={handlePreview}
            variant="outlined"
            disabled={!isOverviewComplete}
          >
            Preview
          </Button>
          <Button onClick={handleSave} disabled={isSaveDisabled || isNotValid}>
            Save
          </Button>
        </Actions>
      </StepperStickyContent>
    </StepperContainer>
  );
}

Stepper.defaultProps = {
  className: undefined,
};

export default styled(Stepper)``;
