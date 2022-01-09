import styled from 'styled-components';

import Text from '@components/Text';
import LinkTo from '@components/LinkTo';

export const ConfirmPurchasePrice = styled(Text)`
  color: var(--green);
`;

export const ConfirmPurchaseLink = styled(LinkTo)`
  color: var(--text-primary-color);
`;

export const ConfirmPurchaseSection = styled.section`
  padding: 15px 0;
`;

export const ConfirmPurchasePaymentDetails = styled.section`
  padding: 15px;
  border-top: 1px solid var(--main-border-color);
  border-bottom: 1px solid var(--main-border-color);
`;
