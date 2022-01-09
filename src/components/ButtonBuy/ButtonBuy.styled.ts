import styled, { css } from 'styled-components';

import Text from '@components/Text';
import Button from '@components/Button';

export const ButtonBuyContainer = styled(Button)`
  ${({ size }) =>
    size === 'small' &&
    css`
      width: 140px;
      padding: 5px 10px;
    `}
`;

export const ButtonBuyContent = styled.div<{ $withoutIcon?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${({ $withoutIcon }) =>
    $withoutIcon &&
    css`
      justify-content: center;
    `}
`;

export const ButtonBuyText = styled(Text)`
  display: inline-flex;
  align-items: center;
`;
