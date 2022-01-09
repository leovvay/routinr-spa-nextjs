import styled, { css } from 'styled-components';
import Stack from '@mui/material/Stack';

import Text from '@components/Text';
import ButtonBuy from '@components/ButtonBuy';
import Card from '@components/Card';
import Button from '@components/Button';

export const MembershipCardMainInfo = styled(Stack)`
  margin-bottom: 30px;
`;

export const MembershipCardTitle = styled(Text)`
  text-align: center;
`;

export const MembershipCardCard = styled(Card)<{
  $variant?: 'vertical' | 'horizontal';
}>`
  display: flex;
  flex-direction: ${({ $variant }) =>
    $variant === 'vertical' ? 'column' : 'row'};
  justify-content: space-between;

  ${({ $variant }) =>
    $variant === 'horizontal' &&
    css`
      align-items: center;

      ${MembershipCardMainInfo} {
        margin-bottom: 0;
      }

      ${MembershipCardTitle} {
        text-align: start;
      }

      span:first-child {
        flex-shrink: 0;
      }
    `}
`;

export const MembershipCardDescription = styled(Text)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const MembershipCardRecurrence = styled(Text)`
  color: var(--text-primary-color);
`;

export const MembershipCardButton = styled(ButtonBuy)`
  margin: 0 auto;
`;

export const MembershipCardSubscribedButton = styled(Button)`
  margin: 0 auto;
`;
