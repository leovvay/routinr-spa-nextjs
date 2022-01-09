import React from 'react';

import Stack from '@mui/material/Stack';

import StatisticItem from '@components/StatisticItem/StatisticItem';
import Text, { TextLight } from '@components/Text';
import GridList from '@components/GridList/GridList.styled';
import MembershipCard from '@components/MembershipCard';
import Followers from '@components/Followers/Followers';
import LinkTo from '@components/LinkTo/LinkTo';
import { RoutineCard } from '@components/RoutineCards';
import PostCard from '@components/PostCard';
import Image from '@components/Image';
import { Influencer, Socials } from '@store/services/users';
import { Membership } from '@store/services/membership/membership.interface';
import {
  InfluencersPost,
  InfluencersPostsResponse,
} from '@store/services/posts';
import { InfluencersRoutinesResponse } from '@store/services/routines';
import { useUser } from '@hooks';
import Social from '@components/Social';

import {
  InfluencerPageAboutTitle,
  InfluencerPageBanner,
  InfluencerPageHandle,
  InfluencerPageMainContainer,
  InfluencerPageMainInfo,
  InfluencerPageNames,
  InfluencerPageSection,
  InfluencerPageSectionTitle,
  InfluencerPageStatistic,
  InfluencerPageStatisticSection,
  InfluencerPageSubscribeButton,
} from '@modules/profile/[slug]/index.styled';
import { InfluencersContentPaginated } from '@modules/profile/[slug]/index.interfaces';
import EditInfo from '@modules/profile/[slug]/components/EditInfo';
import EditBackground from '@modules/profile/[slug]/components/EditBackground';
import AvatarEditable from '@modules/profile/[slug]/components/AvatarEditable';

import {
  ProfilePageDesktopEditInfo,
  ProfilePageDesktopLoadMore,
} from './ProfilePageDesktop.styled';

interface ProfilePageDesktopProps {
  influencer: Influencer;
  routines: InfluencersContentPaginated<InfluencersRoutinesResponse>;
  posts: InfluencersContentPaginated<InfluencersPostsResponse>;
  showSubscribeButton: boolean;
  handleUnlock(post: InfluencersPost): () => void;
  onBuy(membership: Membership): void;
  handleSubscribe(): void;
}

function ProfilePageDesktop({
  influencer,
  routines,
  posts,
  onBuy,
  showSubscribeButton,
  handleUnlock,
  handleSubscribe,
}: ProfilePageDesktopProps): JSX.Element {
  const { currentUser } = useUser();

  const routinesArr =
    routines.data?.pages
      .map((page) => page.getInfluencersRoutines.edges)
      .flat() ?? [];

  const postsArr =
    posts.data?.pages.map((page) => page.influencersPosts.edges).flat() ?? [];

  // @ts-ignore
  const socials: [Socials, string][] = Object.entries(
    influencer.socials || {}
  ).filter(([, link]) => Boolean(link));

  const isMine = Number(currentUser?.id) === Number(influencer.id);

  return (
    <>
      <InfluencerPageBanner src={influencer.background}>
        <AvatarEditable influencer={influencer} editable={isMine} />
        <InfluencerPageMainInfo>
          <InfluencerPageNames size="h3">
            {influencer.displayName}
          </InfluencerPageNames>
          <InfluencerPageNames size="bodyLead">
            @{influencer.handle}
          </InfluencerPageNames>
        </InfluencerPageMainInfo>
        <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
          {socials.map(([social, link]) => (
            <LinkTo key={social} href={link} target="_blank">
              <Social social={social} />
            </LinkTo>
          ))}
        </Stack>
        {isMine && (
          <ProfilePageDesktopEditInfo spacing={1}>
            <EditBackground />
            <EditInfo influencer={influencer} />
          </ProfilePageDesktopEditInfo>
        )}
      </InfluencerPageBanner>
      <InfluencerPageStatisticSection>
        <InfluencerPageStatistic>
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
        </InfluencerPageStatistic>
      </InfluencerPageStatisticSection>
      <InfluencerPageMainContainer>
        <InfluencerPageSection>
          <InfluencerPageSectionTitle>
            Membership options
          </InfluencerPageSectionTitle>
          <TextLight size="bodySmallBold">
            @{influencer.handle} has currently {influencer.membershipsCount}{' '}
            membership options
          </TextLight>
          <GridList>
            {influencer.memberships.map((membership) => (
              <MembershipCard
                key={membership.id}
                membership={membership}
                onBuy={() => onBuy(membership)}
              />
            ))}
          </GridList>
        </InfluencerPageSection>
        <InfluencerPageSection>
          <InfluencerPageAboutTitle>
            About {influencer.displayName}
          </InfluencerPageAboutTitle>
          <TextLight as="pre" size="h5" weight={600}>
            {influencer.description}
          </TextLight>
        </InfluencerPageSection>
        <InfluencerPageSection>
          <Followers
            list={influencer.followers}
            numberToShow={8}
            titleSize="h3"
          />
        </InfluencerPageSection>
        <InfluencerPageSection>
          <InfluencerPageSectionTitle>
            <InfluencerPageHandle>@{influencer.handle}</InfluencerPageHandle>{' '}
            Routines
          </InfluencerPageSectionTitle>
          <TextLight size="bodySmallBold">
            We’ve highlighted Routines for you
          </TextLight>
          <div>
            <GridList>
              {routinesArr.map((routine) => (
                <LinkTo
                  key={routine.node.id}
                  href={`/routines/${routine.node.slug}`}
                >
                  <RoutineCard routine={routine.node} />
                </LinkTo>
              ))}
            </GridList>
            {routines.hasNextPage && (
              <ProfilePageDesktopLoadMore
                fetchNextPage={routines.fetchNextPage}
                isFetchingNextPage={routines.isFetchingNextPage}
              />
            )}
          </div>
        </InfluencerPageSection>
        <InfluencerPageSection>
          <InfluencerPageSectionTitle>
            <InfluencerPageHandle>@{influencer.handle}</InfluencerPageHandle>{' '}
            Posts
          </InfluencerPageSectionTitle>
          <TextLight size="bodySmallBold">Latest Posts</TextLight>
          <GridList>
            {postsArr.map((post) =>
              post.node.isLocked ? (
                <PostCard
                  key={post.node.id}
                  post={post.node}
                  onUnlockClick={handleUnlock(post.node)}
                />
              ) : (
                <LinkTo key={post.node.id} href={`/posts/${post.node.slug}`}>
                  <PostCard
                    post={post.node}
                    onUnlockClick={handleUnlock(post.node)}
                  />
                </LinkTo>
              )
            )}
          </GridList>
          {posts.hasNextPage && (
            <ProfilePageDesktopLoadMore
              fetchNextPage={posts.fetchNextPage}
              isFetchingNextPage={posts.isFetchingNextPage}
            />
          )}
        </InfluencerPageSection>
        {showSubscribeButton && (
          <InfluencerPageSubscribeButton onClick={handleSubscribe}>
            <Image src="/subscribe-icon.svg" width={22} height={17} />
            <Text weight={700}>Subscribe</Text>
          </InfluencerPageSubscribeButton>
        )}
      </InfluencerPageMainContainer>
    </>
  );
}

export default ProfilePageDesktop;
