import styled from 'styled-components';
import Card from '@mui/material/Card';
import { Swiper } from 'swiper/react';

export const ActivityCardContainer = styled(Card)`
  width: 100%;
  max-width: 480px;
  overflow: visible;
`;

export const ActivityCardImagesCarousel = styled(Swiper)`
  height: 140px;
`;
