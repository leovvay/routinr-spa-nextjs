import React from 'react';

import Stack from '@mui/material/Stack';
import { SwiperSlide } from 'swiper/react';

import Text from '@components/Text';
import InfluencerCard from '@components/InfluencerCard';
import CategoryCard from '@components/CategoryCard';
import { User } from '@store/services/users';
import { Category } from '@store/services/categories';
import {
  useInfinityTrendyFreeRoutinesQuery,
  useInfinityTrendyRoutinesQuery,
} from '@store/services/routines';
import { RoutineCard } from '@components/RoutineCards';

import {
  IndexRoutineLink,
  IndexViewAllLink,
} from '@modules/index/index.styled';

import {
  DesktopIndexContainer,
  DesktopIndexRoutineSwiper,
  DesktopIndexSubtitle,
} from './DesktopIndex.styled';

interface DesktopIndexProps {
  influencers: Pick<User, 'id' | 'avatar' | 'slug' | 'handle' | 'followers'>[];
  mainCategory: Category;
}

const routinesSwiperSettings = {
  slidesPerView: 'auto' as const,
  spaceBetween: 20,
  grabCursor: true,
  touchEventsTarget: 'container' as const,
};

function DesktopIndex({
  influencers,
  mainCategory,
}: DesktopIndexProps): JSX.Element {
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

  const loadMoreTrendyRoutines = () => {
    if (hasNextTrendyRoutinePage) fetchNextTrendyRoutinesPage();
  };

  const loadMoreTrendyFreeRoutines = () => {
    if (hasNextTrendyFreeRoutinePage) fetchNextTrendyFreeRoutinesPage();
  };

  return (
    <DesktopIndexContainer>
      <section>
        <Text size="h3" as="h3">
          Discover top Routinrs
        </Text>
        <DesktopIndexSubtitle size="bodySmallBold" as="p">
          Discover our top talent and who&apos;s content is trending right now
        </DesktopIndexSubtitle>

        <Stack direction="row" spacing={2}>
          {influencers.slice(0, 3).map((influencer) => (
            <InfluencerCard
              key={influencer.id}
              avatar={influencer.avatar}
              handle={influencer.handle}
              slug={influencer.slug}
              followersCount={influencer.followers.length}
            />
          ))}
          <IndexViewAllLink href="/search" blue>
            <Text size="bodySmallBold" weight={700}>
              View all
            </Text>
          </IndexViewAllLink>
        </Stack>
      </section>

      <section>
        <Stack direction="row">
          <div>
            <Text
              size="h3"
              as="h3"
            >{`${mainCategory.routinesCount} ${mainCategory.title} Routinrs`}</Text>
            <DesktopIndexSubtitle size="bodySmallBold" as="p">
              Going Vegan? Looking for a smart meal plan? Check these out
            </DesktopIndexSubtitle>
          </div>
          <IndexViewAllLink href="/browse" blue>
            <Text size="bodySmallBold" weight={700}>
              View all
            </Text>
          </IndexViewAllLink>
        </Stack>

        <CategoryCard
          title={mainCategory.title}
          image={mainCategory.bannerImage.secure_url}
          routinesCount={mainCategory.routinesCount}
          isBanner
        />
      </section>
      <section>
        <Stack direction="row">
          <div>
            <Text size="h3" as="h3">
              Discover Routines
            </Text>
            <DesktopIndexSubtitle size="bodySmallBold" as="p">
              We’ve highlighted Routines for you
            </DesktopIndexSubtitle>
          </div>
          <IndexViewAllLink href="/search" blue>
            <Text size="bodySmallBold" weight={700}>
              View all
            </Text>
          </IndexViewAllLink>
        </Stack>

        <DesktopIndexRoutineSwiper
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
        </DesktopIndexRoutineSwiper>
      </section>
      <section>
        <Stack direction="row">
          <div>
            <Text size="h3" as="h3">
              Free to try
            </Text>
            <DesktopIndexSubtitle size="bodySmallBold" as="p">
              We’ve highlighted free Routines for you
            </DesktopIndexSubtitle>
          </div>
          <IndexViewAllLink href="/search?contentType=free" blue>
            <Text size="bodySmallBold" weight={700}>
              View all
            </Text>
          </IndexViewAllLink>
        </Stack>

        <DesktopIndexRoutineSwiper
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
        </DesktopIndexRoutineSwiper>
      </section>
    </DesktopIndexContainer>
  );
}

export default DesktopIndex;
