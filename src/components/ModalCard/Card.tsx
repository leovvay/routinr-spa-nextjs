import React from 'react';

import Image from '@components/Image';
import Text from '@components/Text';

import { CardProps } from './Card.types';

import { CardContainer, CardTextContent } from './Card.styled';

export default function Card({
  className,
  imageSrc,
  textColor,
  textContent,
  textDays,
  bgColor,
  iconSrc,
}: CardProps): JSX.Element {
  return (
    <CardContainer className={className} bgColor={bgColor}>
      <Image src={imageSrc} width={216} height={140} />
      <CardTextContent flexColumn padding="16px">
        <Text
          color={textColor}
          fontSize={16}
          lineHeight={20}
          letterSpacing="0.01em"
          fontFamily="var(--font-secondary)"
        >
          {textContent}
        </Text>
        <CardTextContent>
          <Image src={iconSrc} width={16} height={16} objectFit="contain" />
          <Text
            color={textColor}
            fontSize={12}
            lineHeight={18}
            letterSpacing="0.01em"
            fontFamily="var(--font-secondary)"
            weight={400}
          >
            {textDays} days
          </Text>
        </CardTextContent>
      </CardTextContent>
    </CardContainer>
  );
}
