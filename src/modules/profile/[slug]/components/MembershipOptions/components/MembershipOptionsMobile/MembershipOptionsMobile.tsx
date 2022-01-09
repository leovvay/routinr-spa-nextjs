import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import SwiperCore, { Thumbs } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { getMembershipPriceText } from '@utils';
import Text from '@components/Text';
import Avatar from '@components/Avatar';
import Image from '@components/Image';
import ButtonBuy from '@components/ButtonBuy';
import MembershipCover from '@components/MembershipCover';
import DescriptionSection from '@components/ContentInfo/DescriptionSection';
import { ModalMembershipInfoContent } from '@components/ContentInfo/ModalMembershipInfo/ModalMembershipInfo.styled';

import { MembershipOptionsProps } from '../../MembershipOptions.interfaces';

import {
  MembershipOptionsMobileActions,
  MembershipOptionsMobileBackButton,
  MembershipOptionsMobileContainer,
  MembershipOptionsMobilePrice,
  MembershipOptionsMobilePriceSwiper,
  MembershipOptionsMobileSection,
  MembershipOptionsMobileShape,
  MembershipOptionsMobileSwiper,
} from './MembershipOptionsMobile.styled';

import 'swiper/css';
import 'swiper/css/thumbs';

type MembershipOptionsMobileProps = Omit<MembershipOptionsProps, 'open'>;

const mainSwiperSettings = {
  modules: [Thumbs],
  spaceBetween: 10,
  slidesPerView: 1,
  centeredSlides: true,
  watchSlidesProgress: true,
};

const thumbsSwiperSettings = {
  modules: [Thumbs],
  spaceBetween: 10,
  slidesPerView: 'auto' as const,
  centeredSlides: true,
  watchSlidesProgress: true,
};

function MembershipOptionsMobile({
  influencer,
  memberships,
  onBuy,
  onClose,
}: MembershipOptionsMobileProps): JSX.Element {
  const [mainSwiper, setMainSwiper] = useState<SwiperCore>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMembership = memberships[activeIndex];

  return (
    <>
      <MembershipOptionsMobileBackButton
        onClick={onClose}
        color="var(--text-subtitle-color)"
        noShadow
      />
      <MembershipOptionsMobileContainer>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item>
            <Text size="h1" weight={700}>
              Select {influencer.displayName} memberships
            </Text>
          </Grid>
          <Grid item flexShrink={0}>
            <Avatar src={influencer.avatar} width={66} height={66} />
          </Grid>
        </Grid>
      </MembershipOptionsMobileContainer>
      <MembershipOptionsMobileSwiper
        {...mainSwiperSettings}
        onActiveIndexChange={(swiper) => {
          thumbsSwiper?.slideTo(swiper.activeIndex);
          setActiveIndex(swiper.activeIndex);
        }}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={setMainSwiper}
      >
        {memberships.map((membership) => (
          <SwiperSlide key={membership.id}>
            <MembershipCover
              src={membership.cover.previewUrl}
              layout="fill"
              objectFit="cover"
            />
            <MembershipOptionsMobileShape
              src="/membership-shape-cover.svg"
              layout="fill"
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </MembershipOptionsMobileSwiper>
      <MembershipOptionsMobilePriceSwiper
        {...thumbsSwiperSettings}
        onSwiper={setThumbsSwiper}
        onActiveIndexChange={(swiper) => {
          mainSwiper?.slideTo(swiper.activeIndex);
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {memberships.map((membership) => (
          <SwiperSlide key={membership.id}>
            <MembershipOptionsMobilePrice>
              <Text size="validationCaption" weight={700}>
                {getMembershipPriceText(membership)}
              </Text>
            </MembershipOptionsMobilePrice>
          </SwiperSlide>
        ))}
      </MembershipOptionsMobilePriceSwiper>
      <MembershipOptionsMobileSection>
        <DescriptionSection
          text={activeMembership.description}
          title={activeMembership.title}
          color="var(--main-bg-color)"
        />
      </MembershipOptionsMobileSection>
      <MembershipOptionsMobileSection>
        {activeMembership.content === 'Selected posts' ? (
          <ModalMembershipInfoContent>
            <Image src="/completeIcon.svg" width={25} height={25} />
            <Text size="bodySmall">Selected posts</Text>
          </ModalMembershipInfoContent>
        ) : (
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <ModalMembershipInfoContent>
                <Image src="/completeIcon.svg" width={25} height={25} />
                <Text size="bodySmall">All routines</Text>
              </ModalMembershipInfoContent>
            </Grid>
            <Grid item>
              <ModalMembershipInfoContent>
                <Image src="/completeIcon.svg" width={25} height={25} />
                <Text size="bodySmall">All premium posts</Text>
              </ModalMembershipInfoContent>
            </Grid>
          </Grid>
        )}
      </MembershipOptionsMobileSection>
      <MembershipOptionsMobileActions>
        <div>
          <Text size="bodySmallMedium" as="p">
            VIP Access
          </Text>
          <Text color="var(--text-primary-color)">
            {getMembershipPriceText(activeMembership)}
          </Text>
        </div>
        <ButtonBuy
          onClick={() => onBuy(activeMembership)}
          price={activeMembership.price}
          isFree={false}
        />
      </MembershipOptionsMobileActions>
    </>
  );
}

export default MembershipOptionsMobile;
