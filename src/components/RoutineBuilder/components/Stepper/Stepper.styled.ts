import styled from 'styled-components';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MuiErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import Touchable from '@components/Touchable';
import Text from '@components/Text';

export const StepperContainer = styled.div`
  min-width: 235px;
  padding: 24px 20px;

  border-left: 1px solid var(--main-border-color);
  background-color: var(--white);
`;

export const StepperStickyContent = styled.div`
  position: sticky;
  top: 90px;
`;

export const Step = styled(Touchable)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 16px 0;
`;

export const Title = styled(Text)`
  margin-bottom: 18px;
`;

export const RedText = styled(Text)`
  color: var(--red);
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 40px;
`;

export const ErrorIcon = styled(MuiErrorIcon).attrs({
  htmlColor: 'var(--red)',
})``;
export const CompleteIcon = styled(CheckCircleIcon).attrs({
  htmlColor: 'var(--green)',
})``;
export const InProgressIcon = styled(AddCircleIcon).attrs({
  htmlColor: 'var(--grey)',
})``;
