import React, { PropsWithChildren } from 'react';

import { CardProps } from './Card.types';

import CardContainer from './Card.styled';

export default function Card({
  children,
  className = '',
  noPadding = false,
  noShadow = false,
}: PropsWithChildren<CardProps>): JSX.Element {
  return (
    <CardContainer
      className={className}
      noPadding={noPadding}
      noShadow={noShadow}
    >
      {children}
    </CardContainer>
  );
}
