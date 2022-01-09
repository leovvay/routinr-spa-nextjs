import React from 'react';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import Text from '@components/Text';

import AnimatedText from './components/AnimatedText';

import {
  PromoCardBody,
  PromoCardContainer,
  PromoCardFooter,
  PromoCardHelperText,
  PromoCardLink,
  PromoCardShape,
} from './PromoCard.styled';

interface PromoCardProps {
  className?: string;
}

function PromoCard({ className }: PromoCardProps): JSX.Element {
  return (
    <PromoCardContainer className={className}>
      <PromoCardShape src="card-shape.svg" />
      <PromoCardBody>
        <Text size="h1" weight={700} fontSize={60} as="h1">
          Reinvent your
        </Text>
        <AnimatedText />
        <PromoCardHelperText size="h3" fontSize={25} weight={600}>
          Find the best influencers to achieve your life goals
        </PromoCardHelperText>
      </PromoCardBody>
      <PromoCardFooter>
        <PromoCardLink href="/register">
          <Text size="bodyLead">Register a new account</Text>{' '}
          <ArrowForwardRoundedIcon />
        </PromoCardLink>
      </PromoCardFooter>
    </PromoCardContainer>
  );
}

PromoCard.defaultProps = {
  className: undefined,
};

export default PromoCard;
