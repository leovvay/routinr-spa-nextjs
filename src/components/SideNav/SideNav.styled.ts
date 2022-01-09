import styled from 'styled-components';

import Text from '@components/Text';

export const SideNavContainer = styled.div`
  display: flex;
  min-height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SideNavNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 15px 15px;
  flex-basis: 25%;
  min-width: 25%;
  border-right: 1px solid var(--main-border-color);
  background-color: var(--white);
`;

export const SideNavContentContainer = styled.div`
  flex-basis: 75%;
  min-width: 75%;
`;

export const SideNavItemText = styled(Text)`
  padding: 15px 0;
  color: var(--text-subtitle-color);

  &.active {
    color: var(--black);
  }
`;
