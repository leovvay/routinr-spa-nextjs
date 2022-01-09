import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import YouTubeVideo from '@components/YouTubeVideo';

export const AttachmentsContainer = styled.div`
  padding: 20px 50px;
  background-color: var(--grey);

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const AttachmentsMainSwiperContainer = styled.div`
  position: relative;
`;

export const AttachmentsSwiper = styled(Swiper)`
  height: 623px;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

export const AttachmentsThumbsSwiper = styled(Swiper)`
  height: 122px;

  .swiper-slide {
    box-sizing: border-box;
    border: 3px solid transparent;
  }

  .swiper-slide-thumb-active {
    border: 3px solid var(--primary-color);
  }
`;

export const AttachmentVideo = styled.video`
  width: 100%;
  height: 100%;
`;

export const AttachmentYoutube = styled(YouTubeVideo)`
  width: 100%;
  height: 100%;
`;

export const AttachmentSlide = styled.div`
  width: 100%;
  height: 100%;
  padding: 84px 15% 53px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 0 15% 20px;
  }
`;

export const AttachmentsNavButton = styled.div`
  display: flex;
  color: var(--primary-color);
  font-size: 48px;

  position: absolute;
  top: 50%;
  z-index: 9999;

  &.next {
    right: 0;
  }

  &.swiper-button-disabled {
    color: var(--text-subtitle-color);
  }
`;
