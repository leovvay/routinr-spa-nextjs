import styled from 'styled-components';

import { PageContent } from '@components/PageWrapper';
import Text, { TextLight } from '@components/Text';

import Stepper from './components/Stepper';

export const RoutineBuilderContent = styled(PageContent)`
  background-color: var(--routine-builder-bg-color);
  position: relative;

  display: grid;
  grid-template-columns: 3fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    ${Stepper} {
      grid-row: 1;
    }
  }
`;

export const RoutineBuilderStep = styled.div`
  flex-grow: 1;
  padding: 42px 15% 20px 9%;

  @media screen and (max-width: 1048px) {
    padding: 20px 24px;
  }
`;

export const RoutineBuilderText = styled(Text).attrs({
  as: 'p',
})`
  color: var(--text-routine-builder-color);
  margin-bottom: 40px;
`;

export const RoutineBuilderTextFieldTitle = styled(Text).attrs({
  size: 'h5',
  as: 'h5',
  weight: 600,
})`
  margin-bottom: 8px;
`;

export const RoutineBuilderLengthLimit = styled(TextLight).attrs({
  size: 'bodyCaption',
  as: 'p',
  weight: 600,
})`
  text-align: right;
  margin-top: 5px;
`;

export const RoutineBuilderSection = styled.section`
  margin-bottom: 20px;
`;
