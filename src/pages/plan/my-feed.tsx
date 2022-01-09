import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { DateTime } from 'luxon';

import useInfinityFeedPostsQuery from '@store/services/posts/useInfinityFeedPostsQuery';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import LinkTo from '@components/LinkTo';
import { useSegmentPageEvent, useUser } from '@hooks';
import { useGetPlannedDaysQuery } from '@store/services/plan';

import Navigation from '@modules/plan/components/Navigation';
import {
  MyFeedContainer,
  MyFeedPlannedDaysActivities,
  MyFeedPosts,
} from '@modules/plan/my-feed.styled';
import FeedPostCard from '@modules/plan/components/FeedPostCard';
import FeedFilter from '@modules/plan/components/FeedFilter';

function MyFeed(): JSX.Element {
  useUser({
    redirectTo: process.env.NEXT_PUBLIC_HOST,
  });

  const [filterCreatorId, setFilterCreatorId] = useState<number>();

  const {
    data: premiumPosts,
    loaderRef,
    refetch,
  } = useInfinityFeedPostsQuery(filterCreatorId);

  const { data: plannedDays } = useGetPlannedDaysQuery({
    from: DateTime.now().startOf('day').toISO({ includeOffset: false }),
    to: DateTime.now().endOf('day').toISO({ includeOffset: false }),
  });

  const posts =
    premiumPosts?.pages.map((page) => page.myPremiumPosts.edges).flat() ?? [];

  useEffect(() => {
    refetch();
  }, [filterCreatorId, refetch]);

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>My feed | Routinr</title>
        <meta property="og:title" content="My feed | Routinr" key="title" />
      </Head>
      <Header />
      <PageContent>
        <Navigation />
        <MyFeedContainer>
          <FeedFilter value={filterCreatorId} onChange={setFilterCreatorId} />
          {plannedDays && plannedDays[0]?.plannedActivities && (
            <MyFeedPlannedDaysActivities
              plannedActivities={plannedDays[0].plannedActivities}
              forceMobile
            />
          )}
          <MyFeedPosts>
            {posts.map((post) => (
              <LinkTo key={post.cursor} href={`/posts/${post.node.slug}`}>
                <FeedPostCard post={post.node} />
              </LinkTo>
            ))}
            <div ref={loaderRef} />
          </MyFeedPosts>
        </MyFeedContainer>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default MyFeed;
