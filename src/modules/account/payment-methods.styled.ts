import styled from 'styled-components';

import Touchable from '@components/Touchable';

export const AddPaymentButton = styled(Touchable)`
  height: 100%;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: var(--text-primary-color);
`;

export const PaymentsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
