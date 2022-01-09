import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { TextLight } from '@components/Text';

export const DesktopIndexContainer = styled.div`
  padding: 0 68px;
  display: grid !important;
  row-gap: 50px;
  margin-top: 50px;
`;

export const DesktopIndexSubtitle = styled(TextLight)`
  margin-bottom: 20px;
`;

export const DesktopIndexRoutineSwiper = styled(Swiper)`
  .swiper-slide {
    width: 30%;

    @media screen and (min-width: 1300px) {
      width: 23%;
    }
  }
`;
