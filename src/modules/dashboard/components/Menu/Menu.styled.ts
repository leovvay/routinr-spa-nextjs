import styled from 'styled-components';

import Touchable from '@components/Touchable';

// eslint-disable-next-line import/prefer-default-export
export const MenuButton = styled(Touchable)`
  position: absolute;
  right: 16px;
  top: 16px;

  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  border-radius: 50%;
  color: var(--white);

  &:hover {
    background-color: var(--primary-color-dark);
  }
`;
