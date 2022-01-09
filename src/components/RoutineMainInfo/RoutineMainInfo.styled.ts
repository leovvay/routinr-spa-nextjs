import styled from 'styled-components';

import RoutineCover from './components/RoutineCover';

export const RoutineMainInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  padding: 20px;
`;

export const RoutineMainInfoMain = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 0 83px;

  @media screen and (max-width: 991.98px) {
    padding: 0 15%;
  }
`;

export const RoutineMainInfoStatistic = styled.div`
  display: flex;
`;

export const RoutineMainInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 598px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: unset;

    ${RoutineMainInfoContent} {
      background-color: inherit;
    }

    ${RoutineMainInfoMain} {
      padding: 0;
    }

    ${RoutineMainInfoStatistic} {
      justify-content: center;
      margin-top: 50px;
    }

    ${RoutineCover} {
      grid-row: 1;
      min-height: 210px;
      height: 56vw;
    }
  }
`;
