import React from 'react';

import styled from 'styled-components';

import Touchable from '@components/Touchable';
import Text from '@components/Text';

export const SwitchCreativeContainer = styled(Touchable)<{
  $fullWidth: boolean;
}>`
  display: flex;
  justify-content: space-between;

  ${({ $fullWidth }) =>
    $fullWidth &&
    `
    width: 100%;
    font-size: 16px;
  `}
`;

interface SwitchCreativeLabelProps {
  isMobile: boolean;
}

export const SwitchCreativeLabel = styled(Text).attrs<SwitchCreativeLabelProps>(
  ({ isMobile }) => ({
    size: isMobile ? 'body' : 'bodySmallBold',
  })
)`
  && {
    margin-right: 10px;
  }
` as React.ComponentType<SwitchCreativeLabelProps>;
