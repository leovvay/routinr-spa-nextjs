import styled from 'styled-components';

import Card from '@components/Card';

export const AnalyticCard = styled(Card).attrs({
  noPadding: true,
})``;

export const AnalyticCardCover = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

export const AnalyticCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const AnalyticCardStatistic = styled.div`
  display: flex;
  flex-direction: column;
`;
