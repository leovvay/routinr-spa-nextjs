import styled from 'styled-components';

import Text from '@components/Text';
import { PopupRoutineCover } from '@components/RoutinePopupControl';
import ButtonBackMobile from '@components/ButtonBackMobile';

export const PlannedActivityContainer = styled.div`
  padding: 0 68px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const PlannedActivityMainInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PlannedActivityMainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;
  margin: 0 25%;
  position: relative;

  @media screen and (max-width: 1000px) {
    margin: 0 15%;
  }

  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const PlannedActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PlannedActivityTime = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const PlannedActivityLine = styled.div`
  width: 20px;
  height: 1px;
  margin: 0 10px;
  border-bottom: 1px solid var(--grey);
`;

export const PlannedActivityDate = styled.div`
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  background-color: var(--white);
  box-shadow: 0 10px 15px var(--main-card-shadow-color);
`;

export const PlannedActivityDay = styled(Text)`
  color: var(--text-primary-color);
`;

export const PlannedActivityWeekday = styled(Text)`
  color: var(--grey);
`;

export const PlannedActivityDescription = styled(Text)`
  border-left: 3px solid var(--text-subtitle-color);
  padding-left: 47px;
  opacity: 0.7;

  @media screen and (max-width: 768px) {
    border-left: none;
    padding-left: 0;
  }
`;

export const PlannedActivityRoutine = styled(PopupRoutineCover)`
  top: -40px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    top: -50px;
  }
`;

export const PlannedActivityMobileCover = styled.div`
  width: 100%;
  height: 259px;

  position: relative;
`;

export const PlannedActivityBackButton = styled(ButtonBackMobile)`
  position: absolute;
  top: 15%;
  left: 6%;
`;
