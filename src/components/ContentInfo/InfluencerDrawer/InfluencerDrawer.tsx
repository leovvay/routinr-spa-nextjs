import React from 'react';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import { User } from '@store/services/users';
import Loader from '@components/Loader';
import ButtonShare from '@components/ButtonShare';
import Text from '@components/Text';
import StatisticItem from '@components/StatisticItem';
import Followers from '@components/Followers';
import DescriptionSection from '@components/ContentInfo/DescriptionSection';
import LinkTo from '@components/LinkTo';
import Image from '@components/Image';

import { PageLoaderContainer } from '@modules/index.styled';

import {
  ContentInfoDialogAvatar,
  ContentInfoDialogContent,
  ContentInfoDialogContentSection,
  ContentInfoDialogHeaderContentInfo,
  ContentInfoDrawer,
  ContentInfoDrawerBackButton,
  ContentInfoDrawerStatistic,
} from '../ContentInfo.styled';
import {
  InfluencerDrawerHandle,
  InfluencerDrawerHeader,
  InfluencerDrawerInfluencerInfo,
  InfluencerDrawerMoreButton,
  InfluencerDrawerSubscribeButton,
  InfluencerDrawerSubscribeSection,
} from './InfluencerDrawer.styled';

interface InfluencerDrawerProps {
  open: boolean;
  influencer: User | undefined;
  onClose(): void;
}
function InfluencerDrawer({
  influencer,
  onClose,
  open,
}: InfluencerDrawerProps): JSX.Element {
  return (
    <ContentInfoDrawer open={open} onClose={onClose} anchor="right">
      {influencer ? (
        <>
          <InfluencerDrawerHeader>
            <ContentInfoDrawerBackButton onClick={onClose} />
            <ButtonShare
              title={influencer.displayName}
              type="user"
              slug={influencer.slug}
              userId={influencer.id}
            />
          </InfluencerDrawerHeader>
          <ContentInfoDialogContent>
            <InfluencerDrawerInfluencerInfo>
              <ContentInfoDialogAvatar
                src={influencer.avatar}
                width={70}
                height={70}
              />
              <ContentInfoDialogHeaderContentInfo>
                <Text size="h3" as="p" weight={600}>
                  {influencer.displayName}
                </Text>
                <InfluencerDrawerHandle size="h6" weight={600}>
                  @{influencer.handle}
                </InfluencerDrawerHandle>
              </ContentInfoDialogHeaderContentInfo>
            </InfluencerDrawerInfluencerInfo>
            <ContentInfoDrawerStatistic>
              <StatisticItem
                icon="/logoR.svg"
                count={influencer.routinesCount}
                text="routines"
              />
              <StatisticItem
                icon="/posts-count-icon.svg"
                count={influencer.postsCount}
                text="posts"
              />
            </ContentInfoDrawerStatistic>
            <ContentInfoDialogContentSection>
              <Followers list={influencer.followers} numberToShow={5} />
            </ContentInfoDialogContentSection>
            <ContentInfoDialogContentSection>
              <DescriptionSection
                title={`About ${influencer.displayName}`}
                text={influencer.description}
              />
            </ContentInfoDialogContentSection>
            <ContentInfoDialogContentSection>
              <InfluencerDrawerMoreButton
                href={`/profile/${influencer.slug}`}
                blue
              >
                <Text>More info</Text>
                <ArrowForwardRoundedIcon />
              </InfluencerDrawerMoreButton>
            </ContentInfoDialogContentSection>
            <InfluencerDrawerSubscribeSection>
              <LinkTo href={`/profile/${influencer.slug}?subscribe=true`}>
                <InfluencerDrawerSubscribeButton>
                  <Image src="/subscribe-icon.svg" width={22} height={17} />
                  Subscribe
                </InfluencerDrawerSubscribeButton>
              </LinkTo>
            </InfluencerDrawerSubscribeSection>
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

export default InfluencerDrawer;
