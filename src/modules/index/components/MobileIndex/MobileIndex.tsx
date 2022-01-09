import React from 'react';

import Stack from '@mui/material/Stack';
import { SwiperSlide } from 'swiper/react';

import Text from '@components/Text';
import { User } from '@store/services/users';
import {
  useInfinityTrendyFreeRoutinesQuery,
  useInfinityTrendyRoutinesQuery,
} from '@store/services/routines';
import { RoutineCard } from '@components/RoutineCards';
import { useGetCategoriesQuery } from '@store/services/categories';
import Image from '@components/Image';
import MobileOnPageNav from '@components/MobileOnPageNav';

import InfluencerCardMobile from '@modules/index/components/InfluencerCardMobile';
import {
  IndexRoutineLink,
  IndexViewAllLink,
} from '@modules/index/index.styled';

import {
  MobileIndexCategorySwiper,
  MobileIndexContainer,
  MobileIndexRoutineSwiper,
  MobileIndexSection,
  MobileIndexSectionTitle,
} from './MobileIndex.styled';

interface MobileIndexProps {
  influencers: Pick<User, 'id' | 'avatar' | 'slug' | 'handle' | 'followers'>[];
}

const routinesSwiperSettings = {
  slidesPerView: 'auto' as const,
  spaceBetween: 10,
  grabCursor: true,
  touchEventsTarget: 'container' as const,
};

function MobileIndex({ influencers }: MobileIndexProps): JSX.Element {
  const {
    data: trendyRoutines,
    fetchNextPage: fetchNextTrendyRoutinesPage,
    hasNextPage: hasNextTrendyRoutinePage,
  } = useInfinityTrendyRoutinesQuery();
  const {
    data: trendyFreeRoutines,
    fetchNextPage: fetchNextTrendyFreeRoutinesPage,
    hasNextPage: hasNextTrendyFreeRoutinePage,
  } = useInfinityTrendyFreeRoutinesQuery();
  const { data: categories } = useGetCategoriesQuery();

  const loadMoreTrendyRoutines = () => {
    if (hasNextTrendyRoutinePage) fetchNextTrendyRoutinesPage();
  };

  const loadMoreTrendyFreeRoutines = () => {
    if (hasNextTrendyFreeRoutinePage) fetchNextTrendyFreeRoutinesPage();
  };

  return (
    <MobileIndexContainer>
      <MobileOnPageNav />
      <MobileIndexSection>
        <MobileIndexSectionTitle direction="row" spacing={2}>
          <Text size="h3" weight={700}>
            Top Routinrs
          </Text>
          <IndexViewAllLink href="/search" blue>
            <Text size="bodySmallBold" weight={600}>
              See all
            </Text>
          </IndexViewAllLink>
        </MobileIndexSectionTitle>
        <Stack direction="row" spacing={2} overflow="scroll" flexWrap="nowrap">
          {influencers.map((influencer) => (
            <InfluencerCardMobile key={influencer.id} influencer={influencer} />
          ))}
        </Stack>
      </MobileIndexSection>
      <MobileIndexSection>
        <MobileIndexSectionTitle direction="row" spacing={2}>
          <Text size="h3" weight={700}>
            Trending routines
          </Text>
          <IndexViewAllLink href="/search" blue>
            <Text size="bodySmallBold" weight={600}>
              See all
            </Text>
          </IndexViewAllLink>
        </MobileIndexSectionTitle>
        <MobileIndexRoutineSwiper
          {...routinesSwiperSettings}
          onReachEnd={loadMoreTrendyRoutines}
        >
          {trendyRoutines.map((routine) => (
            <SwiperSlide key={routine.node.slug}>
              <IndexRoutineLink href={`/routines/${routine.node.slug}`}>
                <RoutineCard routine={routine.node} />
              </IndexRoutineLink>
            </SwiperSlide>
          ))}
        </MobileIndexRoutineSwiper>
      </MobileIndexSection>
      <MobileIndexSection>
        <MobileIndexSectionTitle direction="row" spacing={2}>
          <Text size="h3" weight={700}>
            Trending categories
          </Text>
          <IndexViewAllLink href="/browse" blue>
            <Text size="bodySmallBold" weight={600}>
              See all
            </Text>
          </IndexViewAllLink>
        </MobileIndexSectionTitle>
        <MobileIndexCategorySwiper
          {...routinesSwiperSettings}
          onReachEnd={loadMoreTrendyRoutines}
        >
          {categories?.map((category) => (
            <SwiperSlide key={category.id}>
              <IndexRoutineLink href={`/search?categories=${category.title}`}>
                <Image
                  src={category.image.url}
                  layout="fill"
                  objectFit="cover"
                />
              </IndexRoutineLink>
            </SwiperSlide>
          ))}
        </MobileIndexCategorySwiper>
      </MobileIndexSection>
      <MobileIndexSection>
        <MobileIndexSectionTitle direction="row" spacing={2}>
          <Text size="h3" weight={700}>
            Free to try
          </Text>
          <IndexViewAllLink href="/search?contentType=free" blue>
            <Text size="bodySmallBold" weight={600}>
              See all
            </Text>
          </IndexViewAllLink>
        </MobileIndexSectionTitle>
        <MobileIndexRoutineSwiper
          {...routinesSwiperSettings}
          onReachEnd={loadMoreTrendyFreeRoutines}
        >
          {trendyFreeRoutines.map((routine) => (
            <SwiperSlide key={routine.node.slug}>
              <IndexRoutineLink href={`/routines/${routine.node.slug}`}>
                <RoutineCard routine={routine.node} />
              </IndexRoutineLink>
            </SwiperSlide>
          ))}
        </MobileIndexRoutineSwiper>
      </MobileIndexSection>
    </MobileIndexContainer>
  );
}

export default MobileIndex;
