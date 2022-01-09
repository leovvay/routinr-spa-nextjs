import React from 'react';
import Head from 'next/head';

import useInfinityMyPremiumPostsQuery from '@store/services/posts/useInfinityMyPremiumPostsQuery';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Text from '@components/Text';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import PostCard from '@components/PostCard';
import LinkTo from '@components/LinkTo';
import { useSegmentPageEvent, useUser } from '@hooks';

import Navigation from '@modules/plan/components/Navigation';
import { PlanPosts, PlanPostsContainer } from '@modules/plan/posts.styled';

function Posts(): JSX.Element {
  useUser({
    redirectTo: process.env.NEXT_PUBLIC_HOST,
  });
  const { data, loaderRef } = useInfinityMyPremiumPostsQuery();

  const posts =
    data?.pages.map((page) => page.myPremiumPosts.edges).flat() ?? [];

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>Posts | Routinr</title>
        <meta property="og:title" content="Posts | Routinr" key="title" />
      </Head>
      <Header />
      <PageContent>
        <Navigation />
        <PlanPostsContainer>
          <Text size="h3">Posts you are subscribed to</Text>
          <PlanPosts>
            {posts.map((post) => (
              <LinkTo key={post.cursor} href={`/posts/${post.node.slug}`}>
                <PostCard post={post.node} />
              </LinkTo>
            ))}
            <div ref={loaderRef} />
          </PlanPosts>
        </PlanPostsContainer>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Posts;
