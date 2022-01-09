import styled from 'styled-components';

import Touchable from '@components/Touchable';

export const PlannedDaysMonthNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
export const PlannedDaysMonthNavigationPrevMonth = styled(Touchable)``;
export const PlannedDaysMonthNavigationNextMonth = styled(
  PlannedDaysMonthNavigationPrevMonth
)`
  transform: rotate(180deg);
`;
