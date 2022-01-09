import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import Image from '@components/Image';
import ButtonBackMobile from '@components/ButtonBackMobile';

export const MembershipOptionsMobileContainer = styled.div`
  padding: 20px;
`;

export const MembershipOptionsMobileSwiper = styled(Swiper)`
  width: 100%;
  height: 203px;
  flex-shrink: 0;
`;

export const MembershipOptionsMobileShape = styled(Image)`
  z-index: 3;
`;

export const MembershipOptionsMobilePrice = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 25px;
  color: var(--white);
  background-color: var(--grey);
`;

export const MembershipOptionsMobilePriceSwiper = styled(Swiper)`
  width: 100%;
  margin: 25px 0;
  flex-shrink: 0;

  & .swiper-slide {
    width: 40vw;
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }

  & .swiper-slide-active {
    ${MembershipOptionsMobilePrice} {
      background-color: var(--text-primary-color);
    }
  }
`;

export const MembershipOptionsMobileSection = styled.section`
  padding: 20px 0;
  margin: 0 20px;
  border-top: 1px solid var(--main-border-color);
`;

export const MembershipOptionsMobileActions = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
  padding: 20px;
  background-color: var(--white);
  border-top: 1px solid var(--main-border-color);
`;

export const MembershipOptionsMobileBackButton = styled(ButtonBackMobile)`
  align-self: start;
  margin-left: 20px;
  margin-top: 20px;
`;
