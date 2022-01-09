import styled, { css } from 'styled-components';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import Image from '@components/Image';
import LinkTo from '@components/LinkTo';
import Card from '@components/Card';
import Touchable from '@components/Touchable';

import { CategoryCardProps } from './CategoryCard.types';

export const CardContainer = styled.div<Pick<CategoryCardProps, 'isBanner'>>`
  width: 100%;
  min-width: 300px;
  height: 336px;
  padding-bottom: 60px;

  ${({ isBanner }) =>
    isBanner &&
    css`
      padding-bottom: 0;
      grid-column: span 4;
    `}
`;

export const CardLinkTo = styled(LinkTo)`
  height: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 15vh;
  }
`;

export const CardImage = styled(Image)`
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    border-radius: 10px;
  }
`;

export const CardBody = styled(Card)<Pick<CategoryCardProps, 'isBanner'>>`
  position: absolute;
  box-shadow: 0 10px 10px rgb(116 116 116 / 50%);
  width: 75%;
  bottom: -40px;
  left: 8%;

  background-color: var(--white);
  border-radius: 10px;
  padding: 15px;

  ${({ isBanner }) =>
    isBanner &&
    `
    top: 96px;
    height: 145px;
    width: 251px;
    padding: 33px 17.5px 23px 29.5px;
    border-radius: 4px;
    box-shadow: 0 15px 20px rgb(0 31 80 / 17%);
  `}
`;

export const CardArrowIcon = styled(ArrowForwardRoundedIcon)`
  color: var(--white);
`;

export const CardButton = styled(Touchable)`
  border-radius: 50%;
  padding: 5px;
  background-color: var(--primary-color);

  position: absolute;
  bottom: 20px;
  right: 16px;
`;
