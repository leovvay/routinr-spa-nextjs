import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { authGuardSSR } from '@utils';
import { useIsMobileVersion, useUser, useSegmentPageEvent } from '@hooks';
import { useInfinityMyMembershipsQuery } from '@store/services/membership';
import { useDashboardInfoQuery } from '@store/services/users';
import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';
import Touchable from '@components/Touchable';
import Text from '@components/Text';
import LinkTo from '@components/LinkTo';
import MembershipCreatorModal from '@components/CreatorModals/MembershipCreatorModal';

import {
  ActionCard,
  ActionCardButton,
  CreatorInfo,
  DashboardContainer,
  ItemsList,
  MainContent,
  TitleContainer,
} from '@modules/dashboard/index.styled';
import MembershipDashboardCard from '@modules/dashboard/components/MembershipDashboardCard';
import GrowthBlog from '@modules/dashboard/components/GrowthBlog';

function Memberships(): JSX.Element {
  useUser({
    redirectTo: process.env.NEXT_PUBLIC_HOST,
  });

  const router = useRouter();
  const isMobile = useIsMobileVersion();

  const [openCreate, setOpenCreate] = useState(false);

  const { data: dashboardInfo } = useDashboardInfoQuery();
  const { data, refetch, loaderRef } = useInfinityMyMembershipsQuery();

  const memberships =
    data?.pages.map((page) => page.myMembershipsInfo.edges).flat() ?? [];

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>Creator&apos;s memberships | Routinr</title>
        <meta
          property="og:title"
          content="Creator's memberships | Routinr"
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
                My memberships
              </Text>
            </TitleContainer>
          </CreatorInfo>
          <MainContent>
            <ItemsList>
              {!dashboardInfo?.stripeAccount && (
                <ActionCard variant="success">
                  <Text size="h5">Start earning</Text>
                  <Text size="bodySmallMedium">
                    Add your payout details in order to create a membership
                  </Text>
                  <ActionCardButton>
                    <LinkTo href="/account/get-paid">
                      <Text weight={700}>Add payout</Text>
                    </LinkTo>
                  </ActionCardButton>
                </ActionCard>
              )}
              {!memberships.length && (
                <ActionCard variant="info">
                  <Text size="h5">
                    Create your first membership and start earning money!
                  </Text>
                  <Text size="bodySmallMedium">
                    Create premium content memberships for your fans to
                    subscribe to. Offer single or recurring payment memberships
                    and build a recurring revenue business in minutes.
                  </Text>
                  <ActionCardButton>
                    <Touchable onClick={() => setOpenCreate(true)}>
                      <Text weight={700}>Create membership</Text>
                    </Touchable>
                  </ActionCardButton>
                </ActionCard>
              )}
              {memberships.map((membership) => (
                <MembershipDashboardCard
                  key={membership.node.id}
                  membership={membership.node}
                  onDelete={refetch}
                  onUpdate={refetch}
                />
              ))}
              <div ref={loaderRef} />
            </ItemsList>
            <GrowthBlog />
          </MainContent>
        </DashboardContainer>
        {!memberships.length && (
          <MembershipCreatorModal
            open={openCreate}
            onClose={() => setOpenCreate(false)}
          />
        )}
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Memberships;

export const getServerSideProps = authGuardSSR;
