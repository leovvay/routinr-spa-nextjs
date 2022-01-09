import styled from 'styled-components';

import LinkTo from '@components/LinkTo';
import Card from '@components/Card';

export const CurrentUserMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuLink = styled(LinkTo)`
  display: block;
  font-size: 16px;

  &:hover {
    color: var(--primary-color);
  }
`;

export const CurrentUserMenuCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 248px;
  padding: 0;

  & > ul {
    width: 100%;
  }
`;

export const CurrentUserMenuItem = styled.div`
  padding: 16px 24px;
  width: 100%;
`;
