import styled from 'styled-components';

import Touchable from '@components/Touchable';

// eslint-disable-next-line import/prefer-default-export
export const NextButtonStyled = styled(Touchable)`
  position: absolute;
  width: 32px;
  height: 32px;

  top: 50%;
  right: 0;
  transform: translate(0, -50%);

  &::before {
    display: none;
  }

  &.swiper-button-disabled {
    opacity: 0;
  }
`;
