import React from 'react';

import { DateTime } from 'luxon';
import Stack from '@mui/material/Stack';

import { Influencer, Socials } from '@store/services/users';
import {
  InfluencersPost,
  InfluencersPostsResponse,
} from '@store/services/posts';
import Text, { TextLight } from '@components/Text';
import Avatar from '@components/Avatar';
import DescriptionSection from '@components/ContentInfo/DescriptionSection';
import Followers from '@components/Followers/Followers';
import { RoutineCard } from '@components/RoutineCards';
import { InfluencersRoutinesResponse } from '@store/services/routines';
import PostCard from '@components/PostCard';
import ReportButton from '@components/ReportButton';
import { useSegment, useUser } from '@hooks';
import Image from '@components/Image';
import LinkTo from '@components/LinkTo';
import Social from '@components/Social';

import { InfluencersContentPaginated } from '../../index.interfaces';

import {
  ProfilePageMobileContainer,
  ProfilePageMobileHandle,
  ProfilePageMobileInfluencer,
  ProfilePageMobileListItem,
  ProfilePageMobileList,
  ProfilePageMobileSection,
  ProfilePageMobileLoaderRef,
  ProfilePageMobileLink,
  ProfilePageMobileViewMemberships,
} from './ProfilePageMobile.styled';

interface ProfilePageMobileProps {
  influencer: Influencer;
  routines: InfluencersContentPaginated<InfluencersRoutinesResponse>;
  posts: InfluencersContentPaginated<InfluencersPostsResponse>;
  showSubscribeButton: boolean;
  handleUnlock(post: InfluencersPost): () => void;
  handleSubscribe(): void;
}

function ProfilePageMobile({
  influencer,
  routines,
  posts,
  showSubscribeButton,
  handleUnlock,
  handleSubscribe,
}: ProfilePageMobileProps): JSX.Element {
  const { reportInfluencer } = useSegment();
  const { currentUser } = useUser();

  const routinesArr =
    routines.data?.pages
      .map((page) => page.getInfluencersRoutines.edges)
      .flat() ?? [];

  const postsArr =
    posts.data?.pages.map((page) => page.influencersPosts.edges).flat() ?? [];

  const influencerSince = DateTime.fromMillis(
    Number(influencer.createdAt)
  ).toFormat('MMMM yyyy');

  // @ts-ignore
  const socials: [Socials, string][] = Object.entries(
    influencer.socials ?? {}
  ).filter(([, link]) => Boolean(link));

  return (
    <ProfilePageMobileContainer>
      <ProfilePageMobileSection>
        <ProfilePageMobileInfluencer>
          <div>
            <Text size="h1" as="p" weight={800}>
              {influencer.displayName}
            </Text>
            <ProfilePageMobileHandle size="bodySmallMedium" weight={600}>
              @{influencer.handle}
            </ProfilePageMobileHandle>
          </div>
          <Avatar src={influencer.avatar} width={70} height={70} />
        </ProfilePageMobileInfluencer>
      </ProfilePageMobileSection>
      <ProfilePageMobileSection>
        <Stack direction="row" spacing={1}>
          {socials.map(([social, link]) => (
            <LinkTo key={social} href={link} target="_blank">
              <Social social={social} />
            </LinkTo>
          ))}
        </Stack>
      </ProfilePageMobileSection>
      <ProfilePageMobileSection>
        <DescriptionSection
          title={`About ${influencer.displayName}`}
          text={influencer.description}
          color="var(--main-bg-color)"
        />
      </ProfilePageMobileSection>
      <ProfilePageMobileSection>
        <Followers list={influencer.followers} numberToShow={5} />
      </ProfilePageMobileSection>
      <ProfilePageMobileSection>
        <Text size="h6" as="p" weight={700}>
          {influencer.routinesCount} Routines
        </Text>
        <ProfilePageMobileList>
          {routinesArr.map((routine) => (
            <ProfilePageMobileListItem key={routine.node.id}>
              <ProfilePageMobileLink
                key={routine.node.id}
                href={`/routines/${routine.node.slug}`}
              >
                <RoutineCard routine={routine.node} />
              </ProfilePageMobileLink>
            </ProfilePageMobileListItem>
          ))}
          <ProfilePageMobileLoaderRef ref={routines.loaderRef} />
        </ProfilePageMobileList>
      </ProfilePageMobileSection>
      <ProfilePageMobileSection>
        <Text size="h6" as="p" weight={700}>
          {influencer.postsCount} Posts
        </Text>
        <ProfilePageMobileList>
          {postsArr.map((post) => (
            <ProfilePageMobileListItem key={post.node.id}>
              {post.node.isLocked ? (
                <PostCard
                  key={post.node.id}
                  post={post.node}
                  onUnlockClick={handleUnlock(post.node)}
                />
              ) : (
                <ProfilePageMobileLink
                  key={post.node.id}
                  href={`/posts/${post.node.slug}`}
                >
                  <PostCard
                    post={post.node}
                    onUnlockClick={handleUnlock(post.node)}
                  />
                </ProfilePageMobileLink>
              )}
            </ProfilePageMobileListItem>
          ))}
          <ProfilePageMobileLoaderRef ref={posts.loaderRef} />
        </ProfilePageMobileList>
      </ProfilePageMobileSection>
      <ProfilePageMobileSection>
        <TextLight as="h5">Influencer since</TextLight>
        <Text size="bodyLead">{influencerSince}</Text>
      </ProfilePageMobileSection>
      <ProfilePageMobileSection>
        <ReportButton
          type="profile"
          onClick={() =>
            reportInfluencer(influencer.displayName, currentUser?.id)
          }
        />
      </ProfilePageMobileSection>
      {showSubscribeButton && (
        <ProfilePageMobileViewMemberships
          startIcon={<Image src="/memberships.svg" width={22} height={17} />}
          onClick={handleSubscribe}
          size="small"
          shadow
        >
          <Text>View memberships</Text>
        </ProfilePageMobileViewMemberships>
      )}
    </ProfilePageMobileContainer>
  );
}

export default ProfilePageMobile;
