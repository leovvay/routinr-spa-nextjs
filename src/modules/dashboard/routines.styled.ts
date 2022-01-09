import styled from 'styled-components';
import Divider from '@mui/material/Divider';

export const RoutinesCommonStatistic = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const RoutinesDivider = styled(Divider)`
  margin: 20px 0;
`;
