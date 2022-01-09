import React from 'react';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import { Routine } from '@store/services/routines';
import Image from '@components/Image';
import Text from '@components/Text';
import StatisticItem from '@components/StatisticItem';
import {
  ContentInfoDialogContent,
  ContentInfoDialogContentSection,
  ContentInfoDrawer,
  ContentInfoDrawerBackButton,
  ContentInfoDrawerHeader,
  ContentInfoDrawerMoreButton,
  ContentInfoDrawerStatistic,
} from '@components/ContentInfo/ContentInfo.styled';
import Loader from '@components/Loader';
import DescriptionSection from '@components/ContentInfo/DescriptionSection';
import ButtonShare from '@components/ButtonShare';

import { PageLoaderContainer } from '@modules/index.styled';

import { RoutineDrawerCoverContainer } from './RoutineDrawer.styled';

interface RoutineDrawerProps {
  open: boolean;
  routine: Routine | undefined;
  onClose(): void;
}

function RoutineDrawer({
  routine,
  onClose,
  open,
}: RoutineDrawerProps): JSX.Element {
  return (
    <ContentInfoDrawer open={open} onClose={onClose} anchor="right">
      {routine ? (
        <>
          <RoutineDrawerCoverContainer>
            <Image src={routine.cover.url} layout="fill" objectFit="cover" />
            <ContentInfoDrawerHeader>
              <ContentInfoDrawerBackButton onClick={onClose} />
              <ButtonShare
                title={routine.title}
                type="routine"
                slug={routine.slug}
                userId={routine.creator.id}
              />
            </ContentInfoDrawerHeader>
          </RoutineDrawerCoverContainer>
          <ContentInfoDialogContent>
            <Text size="h3" as="p" weight={600}>
              {routine.title}
            </Text>
            <ContentInfoDrawerStatistic>
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
            </ContentInfoDrawerStatistic>
            <ContentInfoDialogContentSection>
              <DescriptionSection
                text={routine.description}
                title="Routine notes"
              />
            </ContentInfoDialogContentSection>
            <ContentInfoDialogContentSection>
              <ContentInfoDrawerMoreButton
                href={`/routines/${routine.slug}`}
                blue
              >
                <Text>More info</Text>
                <ArrowForwardRoundedIcon />
              </ContentInfoDrawerMoreButton>
            </ContentInfoDialogContentSection>
          </ContentInfoDialogContent>
        </>
      ) : (
        <PageLoaderContainer>
          <Loader />
        </PageLoaderContainer>
      )}
    </ContentInfoDrawer>
  );
}

export default RoutineDrawer;
