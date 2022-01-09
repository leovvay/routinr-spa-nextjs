import styled from 'styled-components';

import NavActiveLink from '@components/NavActiveLink';

// eslint-disable-next-line import/prefer-default-export
export const MobileOnPageNavLink = styled(NavActiveLink)`
  &:not(.active) {
    opacity: 0.6;
  }
`;
