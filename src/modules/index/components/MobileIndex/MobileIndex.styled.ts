import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import Stack from '@mui/material/Stack';

export const MobileIndexContainer = styled.main`
  padding: 20px;
`;

export const MobileIndexSection = styled.section`
  padding-bottom: 16px;
  border-bottom: 1px solid var(--main-border-color);
  margin-bottom: 16px;
`;

export const MobileIndexSectionTitle = styled(Stack)`
  margin-bottom: 16px;
`;

export const MobileIndexRoutineSwiper = styled(Swiper)`
  .swiper-slide {
    width: 90%;
  }
`;

export const MobileIndexCategorySwiper = styled(Swiper)`
  .swiper-slide {
    width: 45%;
    height: 129px;
    border-radius: 10px;
    overflow: hidden;
  }
`;
