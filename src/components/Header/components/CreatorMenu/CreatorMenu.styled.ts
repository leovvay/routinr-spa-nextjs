import styled from 'styled-components';

import Card from '@components/Card';
import LinkTo from '@components/LinkTo';
import Touchable from '@components/Touchable';

export const CreatorMenuContainer = styled.div<{ fullwidth: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ fullwidth }) => fullwidth && 'width: 100%;'}
`;

export const CreatorMenuCard = styled(Card)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  padding: 16px;
`;

export const CreatorMenuItem = styled(Touchable)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    color: var(--primary-color);
  }
`;

export const CreatorMenuItemLink = styled(LinkTo)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    color: var(--primary-color);
  }
`;
