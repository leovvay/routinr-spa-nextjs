import React, { memo } from 'react';

import Image from '@components/Image';
import { User } from '@store/services/users';
import Text from '@components/Text';
import Button from '@components/Button';
import Touchable from '@components/Touchable';
import ButtonShare from '@components/ButtonShare';
import StatisticItem from '@components/StatisticItem';
import Followers from '@components/Followers';

import {
  ContentInfoDialog,
  ContentInfoDialogActions,
  ContentInfoDialogContent,
  ContentInfoDialogHeaderActions,
  ContentInfoDialogTitle,
  ContentInfoDialogAvatar,
  ContentInfoDialogHeaderInfoContainer,
  ContentInfoDialogHeaderContentInfo,
  ContentInfoDialogContentSection,
  ContentInfoDialogActionButton,
  ContentInfoDialogStatistic,
  ContentInfoDialogAbout,
} from '../ContentInfo.styled';

interface ModalInfluencerInfoProps {
  influencer: User;
  onClose(): void;
}

function ModalInfluencerInfo({
  influencer,
  onClose,
}: ModalInfluencerInfoProps): JSX.Element {
  return (
    <ContentInfoDialog open onClose={onClose} scroll="body">
      <ContentInfoDialogTitle>
        <ContentInfoDialogHeaderInfoContainer>
          <ContentInfoDialogAvatar
            src={influencer.avatar}
            width={70}
            height={70}
          />
          <ContentInfoDialogHeaderContentInfo>
            <Text size="h3" as="p" weight={600}>
              {influencer.displayName}
            </Text>
            <Text size="h6" weight={600}>
              @{influencer.handle}
            </Text>
          </ContentInfoDialogHeaderContentInfo>
        </ContentInfoDialogHeaderInfoContainer>
        <ContentInfoDialogHeaderActions>
          <ButtonShare
            title={influencer.displayName}
            slug={influencer.slug}
            type="user"
          />
          <Touchable onClick={onClose}>
            <Image src="/close-white.svg" width={25} height={25} />
          </Touchable>
        </ContentInfoDialogHeaderActions>
      </ContentInfoDialogTitle>
      <ContentInfoDialogContent>
        <ContentInfoDialogStatistic>
          <StatisticItem
            icon="/membership-options.svg"
            count={influencer.membershipsCount}
            text="membership options"
          />
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
        </ContentInfoDialogStatistic>
        <ContentInfoDialogContentSection>
          <Followers list={influencer.followers} numberToShow={8} />
        </ContentInfoDialogContentSection>
        <ContentInfoDialogContentSection>
          <Text size="h6" weight={700} as="h6">
            About
          </Text>
          <ContentInfoDialogAbout size="bodySmall" as="pre">
            {influencer.description}
          </ContentInfoDialogAbout>
        </ContentInfoDialogContentSection>
      </ContentInfoDialogContent>
      <ContentInfoDialogActions>
        <ContentInfoDialogActionButton href={`/profile/${influencer.slug}`}>
          <Button
            variant="outlined"
            startIcon={<Image src="/profile-icon.svg" width={22} height={20} />}
            shadow
          >
            <Text>View Profile</Text>
          </Button>
        </ContentInfoDialogActionButton>
        <ContentInfoDialogActionButton
          href={`/profile/${influencer.slug}?subscribe=true`}
        >
          <Button
            startIcon={
              <Image src="/subscribe-icon.svg" width={22} height={17} />
            }
            shadow
          >
            <Text>Subscribe</Text>
          </Button>
        </ContentInfoDialogActionButton>
      </ContentInfoDialogActions>
    </ContentInfoDialog>
  );
}

export default memo(ModalInfluencerInfo);
