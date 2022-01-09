import styled, { css } from 'styled-components';

import { CardProps } from './Card.types';

const CardContainer = styled.div<Pick<CardProps, 'noPadding' | 'noShadow'>>`
  padding: 16px;
  border-radius: 8px;
  border: 0;
  overflow: hidden;
  background-color: var(--main-card-color);
  box-shadow: 0 2px 4px var(--grey);

  ${({ noPadding }) =>
    noPadding &&
    css`
      padding: 0;
    `}

  ${({ noShadow }) =>
    noShadow &&
    css`
      box-shadow: none;
    `}
`;

export default CardContainer;
