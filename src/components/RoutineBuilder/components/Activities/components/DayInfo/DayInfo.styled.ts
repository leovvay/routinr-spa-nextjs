import styled from 'styled-components';

import Select from '@components/Select';

export const DayInfoContainer = styled.div``;

export const DayInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const DayInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 10px;
`;

export const DayInfoSelect = styled(Select)`
  flex-grow: 1;
`;
