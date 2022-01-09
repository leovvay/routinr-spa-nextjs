import styled, { css } from 'styled-components';

import Touchable from '@components/Touchable';

// eslint-disable-next-line import/prefer-default-export
export const BackButtonContainer = styled(Touchable)<{
  $color: string;
  $noShadow: boolean;
}>`
  color: ${({ $color }) => $color};
  ${({ $noShadow }) =>
    !$noShadow &&
    css`
      filter: drop-shadow(2px 4px 6px black);
    `};
`;
