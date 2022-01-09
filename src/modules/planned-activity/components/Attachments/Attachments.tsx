import React, { useState } from 'react';

import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Attachment } from '@hooks';
import Image from '@components/Image';

import {
  AttachmentsContainer,
  AttachmentSlide,
  AttachmentsMainSwiperContainer,
  AttachmentsNavButton,
  AttachmentsSwiper,
  AttachmentsThumbsSwiper,
  AttachmentVideo,
  AttachmentYoutube,
} from './Attachments.styled';

interface AttachmentsProps {
  attachments: Attachment[];
}

const mainSwiperSettings = {
  modules: [Thumbs, Navigation],
  spaceBetween: 10,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
};

function Attachments({ attachments }: AttachmentsProps): JSX.Element {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <AttachmentsContainer>
      <AttachmentsMainSwiperContainer>
        <AttachmentsNavButton className="next">
          <ArrowForwardIcon fontSize="inherit" />
        </AttachmentsNavButton>
        <AttachmentsNavButton className="prev">
          <ArrowBackIcon fontSize="inherit" />
        </AttachmentsNavButton>
        <AttachmentsSwiper
          {...mainSwiperSettings}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {attachments.map((attachment) => (
            <SwiperSlide key={attachment.url}>
              <AttachmentSlide>
                {attachment.type === 'youtube' && (
                  <AttachmentYoutube url={attachment.url} />
                )}
                {attachment.type === 'video' && (
                  <AttachmentVideo
                    src={attachment.url}
                    controls
                    controlsList="nodownload"
                  />
                )}
                {attachment.type === 'image' && (
                  <Image
                    src={attachment.url}
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              </AttachmentSlide>
            </SwiperSlide>
          ))}
        </AttachmentsSwiper>
      </AttachmentsMainSwiperContainer>
      <AttachmentsThumbsSwiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
      >
        {attachments.map((attachment) => (
          <SwiperSlide key={attachment.url}>
            <Image
              src={attachment.previewUrl}
              layout="fill"
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </AttachmentsThumbsSwiper>
    </AttachmentsContainer>
  );
}

export default Attachments;
