import styled, { css } from 'styled-components';

import { CardProps } from './Card.types';

export const CardContainer = styled.div<Pick<CardProps, 'bgColor'>>`
  border-radius: 12px;
  overflow: hidden;
  width: 216px;
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}
`;

interface CardTextContentProps {
  flexColumn?: Boolean;
  padding?: string;
}

export const CardTextContent = styled.div<CardTextContentProps>`
  display: flex;
  ${({ flexColumn }) =>
    flexColumn &&
    css`
      flex-direction: column;
    `}
  align-items: flex-start;
  gap: 6px;
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;
