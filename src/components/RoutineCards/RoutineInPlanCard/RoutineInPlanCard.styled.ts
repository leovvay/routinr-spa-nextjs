import styled from 'styled-components';

import Touchable from '@components/Touchable';

export const RoutineInPlanCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  > * {
    flex-shrink: 0;
  }
`;

export const RoutineInPlanCardButton = styled(Touchable)`
  border-radius: 50%;
  color: var(--white);
  background-color: var(--primary-color);
  padding: 5px;
`;

export const RoutineInPlanCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
