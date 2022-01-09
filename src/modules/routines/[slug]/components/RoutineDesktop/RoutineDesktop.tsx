import React, { useEffect, useState } from 'react';

import { DateTime } from 'luxon';
import Divider from '@mui/material/Divider';
import { SwiperSlide } from 'swiper/react';

import { useDownloads, useFakeDays, useSegment, useUser } from '@hooks';
import { pluralize } from '@utils';
import {
  RoutineWithUserInfo,
  useInfinityCategoryRoutinesQuery,
} from '@store/services/routines';
import Text, { TextLight } from '@components/Text';
import PlannedDays from '@components/PlannedDays';
import DownloadCard from '@components/DownloadCard';
import Image from '@components/Image';
import ReportButton from '@components/ReportButton';
import RoutineCreatorLink from '@components/RoutineCreatorLink';
import StatisticItem from '@components/StatisticItem';
import RoutineCard from '@components/RoutineCards/RoutineCard';
import RoutineBenefits from '@components/RoutineBenefits';

import {
  RoutineShareButton,
  SectionTitle,
  TagItem,
  TagsList,
} from '@modules/routines/[slug]/index.styled';
import RoutineActionButton from '@modules/routines/[slug]/components/RoutineActionButton';

import {
  RoutineDesktopButtons,
  RoutineDesktopContainer,
  RoutineDesktopCover,
  RoutineDesktopDownloadSection,
  RoutineDesktopInfo,
  RoutineDesktopLeft,
  RoutineDesktopMainContainer,
  RoutineDesktopMedia,
  RoutineDesktopMedias,
  RoutineDesktopRight,
  RoutineDesktopRoutineLink,
  RoutineDesktopSection,
  RoutineDesktopShareButton,
  RoutineDesktopStatistic,
  RoutineDesktopSupportItem,
  RoutineDesktopSwiper,
  RoutineDesktopTagsSection,
  RoutineDesktopTitle,
  RoutineDesktopVideo,
  RoutineDesktopYoutube,
} from './RoutineDesktop.styled';

interface RoutineDesktopProps {
  routine: RoutineWithUserInfo;
  onUpdate(): void;
  onBuy(): void;
}

const similarRoutinesSwiperSettings = {
  slidesPerView: 'auto' as const,
  spaceBetween: 20,
  grabCursor: true,
  touchEventsTarget: 'container' as const,
};

function RoutineDesktop({
  routine,
  onUpdate,
  onBuy,
}: RoutineDesktopProps): JSX.Element {
  const { currentUser } = useUser();
  const { reportRoutine } = useSegment();
  const [currentDay, setCurrentDay] = useState(DateTime.now().startOf('day'));

  const fakeDays = useFakeDays(routine);
  const { filesWithNames, downloadItem } = useDownloads(routine.attachments);
  const { data, refetch, hasNextPage, fetchNextPage } =
    useInfinityCategoryRoutinesQuery({
      categoryIds: routine.categories.map((category) => String(category.id)),
      skipRoutines: [routine.id],
      first: 12,
      contentType: 'all',
      sort: 'recent',
    });

  const similarRoutines =
    data?.pages.map((page) => page.categoryRoutines.edges).flat() ?? [];

  const loadMoreSimilarRoutines = () => {
    if (hasNextPage) fetchNextPage();
  };

  useEffect(() => {
    if (routine.id) refetch();
  }, [refetch, routine]);

  return (
    <RoutineDesktopMainContainer>
      <RoutineDesktopContainer>
        <RoutineDesktopLeft>
          <RoutineDesktopSection>
            <RoutineDesktopCover>
              {routine.promoVideo && (
                <RoutineDesktopVideo src={routine.promoVideo} />
              )}
              {routine.youtubeUrl && (
                <RoutineDesktopYoutube url={routine.youtubeUrl} />
              )}
              {!routine.promoVideo && !routine.youtubeUrl && (
                <RoutineDesktopMedia
                  src={routine.cover.previewUrl}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </RoutineDesktopCover>
            {Boolean(routine.supports.length) && (
              <RoutineDesktopMedias>
                {routine.supports.map((support) => (
                  <RoutineDesktopSupportItem key={support.id}>
                    <RoutineDesktopMedia
                      src={support.previewUrl}
                      layout="fill"
                      objectFit="cover"
                    />
                  </RoutineDesktopSupportItem>
                ))}
              </RoutineDesktopMedias>
            )}
          </RoutineDesktopSection>
          {Boolean(routine.benefits.length) && (
            <RoutineDesktopSection>
              <SectionTitle size="h5" weight={700}>
                How it will change your life
              </SectionTitle>
              <RoutineBenefits benefits={routine.benefits} />
            </RoutineDesktopSection>
          )}
          <RoutineDesktopSection>
            <SectionTitle size="h3" weight={700}>
              Description
            </SectionTitle>
            <Text as="pre">{routine.description}</Text>
          </RoutineDesktopSection>
          <RoutineDesktopSection>
            <SectionTitle size="h3" weight={700}>
              Routine preview
            </SectionTitle>
            <PlannedDays
              currentDay={currentDay}
              days={fakeDays}
              onCurrentDayChange={setCurrentDay}
              showCurrentDate={false}
              disableInteractions
            />
          </RoutineDesktopSection>
          {Boolean(routine.attachments.length) && (
            <RoutineDesktopSection>
              <SectionTitle size="h3" weight={700}>
                {pluralize(routine.attachments.length, 'Download')}
              </SectionTitle>
              <RoutineDesktopDownloadSection>
                {filesWithNames.map((attachment) => (
                  <DownloadCard
                    key={attachment.name}
                    filename={attachment.name}
                    isLocked={!attachment.url}
                    onClick={() => downloadItem(attachment)}
                  />
                ))}
              </RoutineDesktopDownloadSection>
            </RoutineDesktopSection>
          )}
          <RoutineDesktopTagsSection>
            <SectionTitle size="h3" weight={700}>
              <Image src="/tagsIcon.svg" width={33} height={33} />
              Tags
            </SectionTitle>
            <TagsList>
              {routine.categories.map((category) => (
                <TagItem key={category.id} href={`/category/${category.title}`}>
                  <Text size="bodyLead">{category.title}</Text>
                </TagItem>
              ))}
            </TagsList>
          </RoutineDesktopTagsSection>
          <RoutineDesktopSection>
            <ReportButton
              type="routine"
              onClick={() => reportRoutine(routine.title, currentUser?.id)}
            />
          </RoutineDesktopSection>
        </RoutineDesktopLeft>
        <RoutineDesktopRight>
          <RoutineDesktopInfo>
            <RoutineCreatorLink creator={routine.creator} />
            <RoutineDesktopTitle size="h3" weight={800}>
              {routine.title}
            </RoutineDesktopTitle>
            <RoutineDesktopStatistic>
              <StatisticItem
                icon="/shop-card.svg"
                count={routine.usageCount}
                text="use this"
                noPaddings
              />
              <Divider orientation="vertical" flexItem />
              <StatisticItem
                icon="/calendar.svg"
                count={routine.daysCount}
                text="days"
                noPaddings
              />
            </RoutineDesktopStatistic>
            <RoutineDesktopButtons>
              <RoutineShareButton
                title={routine.title}
                type="routine"
                slug={routine.slug}
                userId={currentUser?.id}
              >
                <RoutineDesktopShareButton onClick={() => {}}>
                  <Text weight={700}>Share</Text>
                </RoutineDesktopShareButton>
              </RoutineShareButton>
              <RoutineActionButton
                routine={routine}
                onUpdate={onUpdate}
                onBuy={onBuy}
              />
            </RoutineDesktopButtons>
          </RoutineDesktopInfo>
        </RoutineDesktopRight>
      </RoutineDesktopContainer>
      <RoutineDesktopSection>
        <SectionTitle size="h3" weight={700}>
          You may also like
        </SectionTitle>
        <TextLight>We’ve highlighted Routines for you</TextLight>
        <RoutineDesktopSwiper
          {...similarRoutinesSwiperSettings}
          onReachEnd={loadMoreSimilarRoutines}
        >
          {similarRoutines.map((similarRoutine) => (
            <SwiperSlide key={similarRoutine.node.slug}>
              <RoutineDesktopRoutineLink
                key={similarRoutine.node.slug}
                href={`/routines/${similarRoutine.node.slug}`}
              >
                <RoutineCard routine={similarRoutine.node} />
              </RoutineDesktopRoutineLink>
            </SwiperSlide>
          ))}
        </RoutineDesktopSwiper>
      </RoutineDesktopSection>
    </RoutineDesktopMainContainer>
  );
}

export default RoutineDesktop;
