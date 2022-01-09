import styled from 'styled-components';

import Text from '@components/Text';

export const RoutineBenefitsContainer = styled.div`
  padding: 20px 20px 20px 0;
  background-color: var(--routine-benefits-bg-color);
  border-radius: 8px;
`;

export const RoutineBenefitsList = styled.ul`
  list-style-type: none;
  margin: 0;
`;

export const RoutineBenefitsItem = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &::before {
    content: '\\02713';
    color: #2e7eff;
    font-size: 14px;
    margin-right: 5px;
    margin-left: -18px;
  }
`;

export const RoutineBenefitsListItem = styled(Text)`
  overflow: hidden;
  overflow-wrap: break-word;
`;
