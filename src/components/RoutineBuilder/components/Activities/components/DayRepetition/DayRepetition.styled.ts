import styled from 'styled-components';
import DatePicker from '@mui/lab/DatePicker';
import Dialog from '@mui/material/Dialog';

import Text from '@components/Text';

export const DayRepetitionDialog = styled(Dialog)`
  font-family: var(--font-primary);
`;

export const DayRepetitionDatePicker = styled(DatePicker)`
  width: 100%;

  & .MuiOutlinedInput-input {
    padding: 8px 10px;
    font-family: var(--font-primary);
  }
`;

export const DayRepetitionLabel = styled(Text)`
  margin-bottom: 10px;
`;

export const DayRepetitionSection = styled.section`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
