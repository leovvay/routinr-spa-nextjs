import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import Image from '@components/Image/Image';
import { RoutineMedia } from '@store/services/routines';
import { useIsMobileVersion } from '@hooks';

import { MediaCarouselDialog } from './MediaCarousel.styled';

import 'swiper/css';
import 'swiper/css/pagination';

const swiperSettings = {
  modules: [Pagination],
  pagination: {
    dynamicBullets: true,
    clickable: true,
  },
};

interface MediaCarouselProps {
  medias: RoutineMedia[];
  initial: RoutineMedia | undefined;
  onClose?(): void;
}

function MediaCarousel({
  onClose,
  medias,
  initial,
}: MediaCarouselProps): JSX.Element {
  const isMobile = useIsMobileVersion();
  const initialIndex = initial
    ? medias.findIndex((media) => media === initial)
    : 0;

  return (
    <MediaCarouselDialog open onClose={onClose}>
      <Swiper
        {...swiperSettings}
        slidesPerView={1}
        onSwiper={(swiper) => swiper.slideTo(initialIndex)}
      >
        {medias.map((media) => (
          <SwiperSlide>
            <Image
              src={isMobile ? media.previewUrl : media.url}
              layout="fill"
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </MediaCarouselDialog>
  );
}

MediaCarousel.defaultProps = {
  onClose: () => {},
};

export default MediaCarousel;
