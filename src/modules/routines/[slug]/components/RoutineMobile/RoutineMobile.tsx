import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { DateTime } from 'luxon';

import { RoutineMedia, RoutineWithUserInfo } from '@store/services/routines';
import Image from '@components/Image';
import RoutineCreatorLink from '@components/RoutineCreatorLink';
import Text from '@components/Text';
import StatisticItem from '@components/StatisticItem';
import RoutineBenefits from '@components/RoutineBenefits';
import PlannedDays from '@components/PlannedDays';
import { useDownloads, useFakeDays, useUser } from '@hooks';
import { pluralize } from '@utils';
import MediaCarousel from '@components/MediaCarousel';

import {
  RoutineShareButton,
  SectionTitle,
  TagItem,
  TagsList,
} from '@modules/routines/[slug]/index.styled';

import RoutineActionButton from '../RoutineActionButton';

import { RoutineDesktopShareButton } from '../RoutineDesktop/RoutineDesktop.styled';
import {
  RoutineMobileSupport,
  RoutineMobileSupports,
  RoutineMobileBackButton,
  RoutineMobileContainer,
  RoutineMobileContent,
  RoutineMobileCover,
  RoutineMobileSection,
  RoutineMobileStatistics,
  RoutineMobilePreviewTitle,
  RoutineMobileDownloadCard,
  RoutineMobileTags,
  RoutineMobileButtons,
} from './RoutineMobile.styled';

interface RoutineMobileProps {
  routine: RoutineWithUserInfo;
  onUpdate(): void;
  onBuy(): void;
}

function RoutineMobile({
  routine,
  onUpdate,
  onBuy,
}: RoutineMobileProps): JSX.Element {
  const router = useRouter();
  const { currentUser } = useUser();

  const [currentDay, setCurrentDay] = useState(DateTime.now().startOf('day'));
  const [imageToShow, setImageToShow] = useState<RoutineMedia>();
  const fakeDays = useFakeDays(routine);
  const { filesWithNames, downloadItem } = useDownloads(routine.attachments);

  return (
    <RoutineMobileContainer>
      <RoutineMobileBackButton onClick={router.back} />
      <RoutineMobileCover>
        <RoutineMobileBackButton onClick={router.back} />
        <Image src={routine.cover.previewUrl} layout="fill" objectFit="cover" />
      </RoutineMobileCover>
      <RoutineMobileContent>
        <RoutineMobileSection>
          <RoutineCreatorLink creator={routine.creator} />
        </RoutineMobileSection>
        {Boolean(routine.supports.length) && (
          <RoutineMobileSection>
            <RoutineMobileSupports>
              {routine.supports.map((support) => (
                <RoutineMobileSupport
                  key={support.previewUrl}
                  onClick={() => setImageToShow(support)}
                >
                  <Image
                    src={support.previewUrl}
                    layout="fill"
                    objectFit="cover"
                  />
                </RoutineMobileSupport>
              ))}
            </RoutineMobileSupports>
          </RoutineMobileSection>
        )}
        <RoutineMobileSection>
          <Text size="h1" weight={700}>
            {routine.title}
          </Text>
        </RoutineMobileSection>
        <RoutineMobileSection>
          <RoutineMobileStatistics>
            <StatisticItem
              icon="/followers.svg"
              count={routine.usageCount}
              text="use this"
            />
            <StatisticItem
              icon="/calendar.svg"
              count={routine.daysCount}
              text="days"
            />
          </RoutineMobileStatistics>
        </RoutineMobileSection>
        {Boolean(routine.benefits.length) && (
          <RoutineMobileSection>
            <SectionTitle size="h5" weight={700}>
              How it will change your life
            </SectionTitle>
            <RoutineBenefits benefits={routine.benefits} />
          </RoutineMobileSection>
        )}
        <RoutineMobileSection>
          <SectionTitle size="h5" weight={700}>
            Description
          </SectionTitle>
          <Text size="bodySmallMedium" as="pre">
            {routine.description || 'No description'}
          </Text>
        </RoutineMobileSection>
      </RoutineMobileContent>
      <RoutineMobileSection>
        <RoutineMobilePreviewTitle size="h5" weight={700}>
          Routine preview
        </RoutineMobilePreviewTitle>
        <PlannedDays
          currentDay={currentDay}
          days={fakeDays}
          onCurrentDayChange={setCurrentDay}
          disableInteractions
        />
      </RoutineMobileSection>
      <RoutineMobileContent>
        {Boolean(routine.attachments.length) && (
          <RoutineMobileSection>
            <SectionTitle size="h5" weight={700}>
              {pluralize(routine.attachments.length, 'Download')}
            </SectionTitle>
            <RoutineMobileSupports>
              {filesWithNames.map((support) => (
                <RoutineMobileDownloadCard
                  key={support.name}
                  isLocked={!support.url}
                  filename={support.name}
                  onClick={() => downloadItem(support)}
                />
              ))}
            </RoutineMobileSupports>
          </RoutineMobileSection>
        )}
        <RoutineMobileTags>
          <SectionTitle size="h5" weight={700}>
            <Image src="/tagsIcon.svg" width={20} height={20} />
            Tags
          </SectionTitle>
          <TagsList>
            {routine.categories.map((category) => (
              <TagItem key={category.id} href={`/category/${category.title}`}>
                <Text size="bodyLead">{category.title}</Text>
              </TagItem>
            ))}
          </TagsList>
        </RoutineMobileTags>
      </RoutineMobileContent>
      {Boolean(imageToShow) && (
        <MediaCarousel
          medias={routine.supports}
          initial={imageToShow}
          onClose={() => setImageToShow(undefined)}
        />
      )}
      <RoutineMobileButtons>
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
      </RoutineMobileButtons>
    </RoutineMobileContainer>
  );
}

export default RoutineMobile;
