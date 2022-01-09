import React from 'react';
import Head from 'next/head';

import { skipToken } from '@reduxjs/toolkit/query/react';

import { authGuardSSR } from '@utils';
import { useIsMobileVersion, useSegmentPageEvent, useUser } from '@hooks';
import { useDashboardInfoQuery } from '@store/services/users';
import {
  useDashboardLinkQuery,
  useMigrationLinkQuery,
} from '@store/services/stripe';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Followers from '@components/Followers';
import Text from '@components/Text';
import LinkTo from '@components/LinkTo';

import {
  ActionCard,
  ActionCardButton,
  CreatorInfo,
  DashboardContainer,
  Handle,
  LinksContainer,
  MainContent,
} from '@modules/dashboard/index.styled';
import GrowthBlog from '@modules/dashboard/components/GrowthBlog';
import LinkCard from '@modules/dashboard/components/LinkCard';

const LINKS = [
  {
    title: 'My routines',
    description: 'Manage routines that you have created',
    href: '/dashboard/routines',
  },
  {
    title: 'My memberships',
    description: 'Manage and review your premium content and subscriptions',
    href: '/dashboard/memberships',
  },
  {
    title: 'My posts',
    description: 'Manage posts that you have created',
    href: '/dashboard/posts',
  },
];

function Index(): JSX.Element {
  const { currentUser } = useUser({
    redirectTo: process.env.NEXT_PUBLIC_HOST,
  });
  const { data: dashboardInfo } = useDashboardInfoQuery();

  const isMobile = useIsMobileVersion();

  const isStripeVerified =
    dashboardInfo?.stripeAccountStatus === 'verified' &&
    dashboardInfo.stripeAccount?.accountType === 'express';

  const { data: migrationLink } = useMigrationLinkQuery(
    !dashboardInfo || isStripeVerified ? skipToken : undefined
  );
  const { data: dashboardLink } = useDashboardLinkQuery(
    currentUser && isStripeVerified ? undefined : skipToken
  );

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>Creator&apos;s dashboard | Routinr</title>
        <meta
          property="og:title"
          content="Creator's dashboard | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <PageContent>
        <DashboardContainer>
          <CreatorInfo>
            <div>
              <Text fontSize={isMobile ? 30 : 50} as="h1">
                Hello {currentUser?.displayName}
              </Text>
              <Handle size="h3" weight={600}>
                @{currentUser?.handle}
              </Handle>
            </div>
            <Followers
              list={dashboardInfo?.followers ?? []}
              numberToShow={5}
              avatarSize={35}
            />
          </CreatorInfo>
          <MainContent>
            <LinksContainer>
              {migrationLink && (
                <ActionCard variant="warning">
                  <Text size="h5">Action Required</Text>
                  <Text size="bodySmallMedium">
                    We have recently moved to a more robust payout system. In
                    order to continue to get paid and utilise our new payment
                    reporting and tools, please migrate over to the new system.
                  </Text>
                  <Text size="bodySmallMedium">
                    Click the “migrate” button below to get started (it will
                    only take a few minutes!)
                  </Text>
                  <ActionCardButton>
                    <LinkTo href="/account/get-paid" target="_blank">
                      <Text weight={700}>Migrate</Text>
                    </LinkTo>
                  </ActionCardButton>
                </ActionCard>
              )}
              {dashboardInfo?.stripeAccountStatus !== 'verified' && (
                <ActionCard variant="success">
                  <Text size="h5">Start earning</Text>
                  <Text size="bodySmallMedium">
                    In order to sell your content and get paid, you’ll need to
                    add your payout details (Don’t worry it’s super quick and
                    easy!)
                  </Text>
                  <ActionCardButton>
                    <LinkTo href="/account/get-paid">
                      <Text weight={700}>Add payout</Text>
                    </LinkTo>
                  </ActionCardButton>
                </ActionCard>
              )}
              {LINKS.map(({ title, href, description }) => (
                <LinkCard
                  key={title}
                  title={title}
                  href={href}
                  description={description}
                />
              ))}
              {dashboardLink && (
                <LinkCard
                  title="My financials"
                  description="View and manage your financial accounts and payouts information here"
                  href={dashboardLink}
                />
              )}
            </LinksContainer>
            <GrowthBlog />
          </MainContent>
        </DashboardContainer>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Index;

export const getServerSideProps = authGuardSSR;
