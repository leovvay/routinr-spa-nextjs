import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { authGuardSSR } from '@utils';
import { useIsMobileVersion, useSegmentPageEvent, useUser } from '@hooks';
import useInfinityMyRoutinesQuery from '@store/services/posts/useInfinityMyPostsQuery';
import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';
import Touchable from '@components/Touchable';
import Text from '@components/Text';
import PostCreatorModal from '@components/CreatorModals/PostCreatorModal';

import {
  ActionCard,
  ActionCardButton,
  CreatorInfo,
  DashboardContainer,
  ItemsList,
  MainContent,
  TitleContainer,
} from '@modules/dashboard/index.styled';
import GrowthBlog from '@modules/dashboard/components/GrowthBlog';
import PostDashboardCard from '@modules/dashboard/components/PostDashboardCard/PostDashboardCard';

function Posts(): JSX.Element {
  useUser({
    redirectTo: process.env.NEXT_PUBLIC_HOST,
  });

  const router = useRouter();
  const isMobile = useIsMobileVersion();

  const [openCreate, setOpenCreate] = useState(false);

  const { data, refetch, loaderRef } = useInfinityMyRoutinesQuery();

  const posts = data?.pages.map((page) => page.myPosts.edges).flat() ?? [];
  const isPendingAprroval = posts.some(
    (post) => post.node.status === 'pending'
  );

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>Creator&apos;s posts | Routinr</title>
        <meta
          property="og:title"
          content="Creator's posts | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <PageContent>
        <DashboardContainer>
          <CreatorInfo>
            <TitleContainer>
              {isMobile && (
                <Touchable onClick={() => router.back()}>
                  <ArrowBackIosRoundedIcon color="primary" />
                </Touchable>
              )}
              <Text fontSize={isMobile ? 30 : 50} as="h1">
                My posts
              </Text>
            </TitleContainer>
          </CreatorInfo>
          <MainContent>
            <ItemsList>
              {!posts.length && (
                <ActionCard variant="info">
                  <Text size="h5">
                    Create your first post and start earning money!
                  </Text>
                  <Text size="bodySmallMedium">
                    Create posts to assign to one of your memberships or simply
                    allow anyone to view it. Manage your posts below or create a
                    new one by clicking the button below.
                  </Text>
                  <ActionCardButton>
                    <Touchable onClick={() => setOpenCreate(true)}>
                      <Text weight={700}>Create post</Text>
                    </Touchable>
                  </ActionCardButton>
                </ActionCard>
              )}
              {isPendingAprroval && (
                <ActionCard variant="warning">
                  <Text size="h5">
                    Your content is currently with our moderators for approval.
                  </Text>
                  <Text size="bodySmallMedium">
                    Note that approval generally takes around 24hrs but
                    hopefully sooner!
                  </Text>
                </ActionCard>
              )}
              {posts.map((post) => (
                <PostDashboardCard
                  key={post.node.id}
                  post={post.node}
                  onUpdate={refetch}
                  onDelete={refetch}
                />
              ))}
              <div ref={loaderRef} />
            </ItemsList>
            <GrowthBlog />
          </MainContent>
        </DashboardContainer>
        {!posts.length && (
          <PostCreatorModal
            open={openCreate}
            onClose={() => setOpenCreate(false)}
          />
        )}
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Posts;

export const getServerSideProps = authGuardSSR;
