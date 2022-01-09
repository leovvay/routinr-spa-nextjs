import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { authGuardSSR, currencyFormat } from '@utils';
import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';
import Text from '@components/Text';
import { useDashboardInfoQuery } from '@store/services/users';
import { useIsMobileVersion, useSegmentPageEvent, useUser } from '@hooks';
import { useInfinityMyRoutinesQuery } from '@store/services/routines';
import Touchable from '@components/Touchable';
import LinkTo from '@components/LinkTo';

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
import {
  RoutinesCommonStatistic,
  RoutinesDivider,
} from '@modules/dashboard/routines.styled';
import RoutineDashboardCard from '@modules/dashboard/components/RoutineDashboardCard';

function Routines(): JSX.Element {
  useUser({
    redirectTo: process.env.NEXT_PUBLIC_HOST,
  });

  const router = useRouter();
  const { data: dashboardInfo } = useDashboardInfoQuery();
  const {
    data,
    refetch,
    loaderRef: routinesLoaderRef,
  } = useInfinityMyRoutinesQuery();

  const routines =
    data?.pages.map((page) => page.getMyRoutinesInfo.edges).flat() ?? [];
  const isPendingAprroval = routines.some(
    (routine) => routine.node.status === 'pending'
  );

  const isMobile = useIsMobileVersion();

  const revenue = dashboardInfo
    ? currencyFormat(dashboardInfo.revenue / 100)
    : 0;

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>Creator&apos;s routines | Routinr</title>
        <meta
          property="og:title"
          content="Creator's routines | Routinr"
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
                My routines
              </Text>
            </TitleContainer>
            {isMobile && <RoutinesDivider />}
            <RoutinesCommonStatistic>
              <Text size={isMobile ? 'h6' : 'h5'} weight={700}>
                {dashboardInfo?.followers.length} Total buyers
              </Text>
              <Text size={isMobile ? 'h6' : 'h5'} weight={700}>
                {revenue} Total revenue
              </Text>
            </RoutinesCommonStatistic>
          </CreatorInfo>
          <MainContent>
            <ItemsList>
              {!routines.length && (
                <ActionCard variant="info">
                  <Text size="h5">
                    Create your first routine and start earning money!
                  </Text>
                  <Text size="bodySmallMedium">
                    Create an amazing routine to share with your fans and
                    followers. Click the button below to get started
                  </Text>
                  <ActionCardButton>
                    <LinkTo href="/routine-builder">
                      <Text weight={700}>Create routine</Text>
                    </LinkTo>
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
              {routines.map((routine) => (
                <RoutineDashboardCard
                  key={routine.node.id}
                  routine={routine.node}
                  onDelete={refetch}
                  onClone={refetch}
                />
              ))}
              <div ref={routinesLoaderRef} />
            </ItemsList>
            <GrowthBlog />
          </MainContent>
        </DashboardContainer>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Routines;

export const getServerSideProps = authGuardSSR;
