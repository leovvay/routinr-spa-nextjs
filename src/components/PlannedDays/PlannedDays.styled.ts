import styled from 'styled-components';

import Text, { TextLight } from '@components/Text';
import Button from '@components/Button';

export const PlannedDaysNavigation = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px 0 70px;
`;

export const PlannedDaysNavigationButtons = styled.div`
  display: flex;
  gap: 10px;

  ${Button} {
    font-size: 12px;
    padding: 6px 15px;
  }
`;

export const PlannedDaysContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;

    ${PlannedDaysNavigation} {
      justify-content: center;
      margin: 30px 0;
      grid-row: 2;
    }
  }
`;

export const DataText = styled(Text)`
  font-size: 3vw;
`;
export const DataTextLight = styled(TextLight)`
  font-size: 3vw;
`;
