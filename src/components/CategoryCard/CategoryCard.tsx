import React from 'react';

import styled from 'styled-components';

import Text, { TextLight } from '@components/Text';
import { useIsMobileVersion } from '@hooks';

import { CategoryCardProps } from './CategoryCard.types';

import {
  CardContainer,
  CardLinkTo,
  CardImage,
  CardBody,
  CardArrowIcon,
  CardButton,
} from './CategoryCard.styled';

function CategoryCard({
  title,
  image,
  routinesCount,
  isBanner = false,
  className,
}: CategoryCardProps): JSX.Element {
  const isMobile = useIsMobileVersion();

  return (
    <CardContainer isBanner={isBanner} className={className}>
      <CardLinkTo href={`/category/${title.toLocaleLowerCase()}`}>
        <CardImage
          layout="fill"
          src={image}
          objectFit="cover"
          alt={`${title}-category`}
        />
        <CardBody isBanner={isBanner}>
          <Text
            size={isMobile ? 'bodyBold' : 'h3'}
            as="h3"
            color={isMobile ? 'var(--text-subtitle-color)' : 'inherit'}
            weight={800}
          >
            {title}
          </Text>
          <TextLight
            size={isMobile ? 'bodyCaptionBold' : 'bodySmallBold'}
            weight={600}
            color={isMobile ? 'var(--black)' : undefined}
          >{`${routinesCount} routines`}</TextLight>
          <CardButton onClick={() => {}}>
            <CardArrowIcon />
          </CardButton>
        </CardBody>
      </CardLinkTo>
    </CardContainer>
  );
}

export default styled(CategoryCard)``;
