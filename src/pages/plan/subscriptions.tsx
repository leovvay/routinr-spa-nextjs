import React, { useState } from 'react';
import Head from 'next/head';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Text from '@components/Text';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import { useSegmentPageEvent, useUser } from '@hooks';
import { useInfinityMySubscribedMembershipsQuery } from '@store/services/membership';
import ModalMembershipInfo from '@components/ContentInfo/ModalMembershipInfo';
import { MembershipAsSubscription } from '@store/services/membership/membership.interface';

import Navigation from '@modules/plan/components/Navigation';
import {
  PlanSubscriptions,
  PlanSubscriptionsContainer,
} from '@modules/plan/subscriptions.styled';
import MembershipCard from '@modules/plan/components/MembershipCard/MembershipCard';

function Subscriptions(): JSX.Element {
  useUser({
    redirectTo: process.env.NEXT_PUBLIC_HOST,
  });

  const [shownMembership, setShownMembership] =
    useState<MembershipAsSubscription>();

  const { data, refetch, loaderRef } =
    useInfinityMySubscribedMembershipsQuery();

  const memberships =
    data?.pages.map((page) => page.mySubscribedMemberships.edges).flat() ?? [];

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>Subscriptions | Routinr</title>
        <meta
          property="og:title"
          content="Subscriptions | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <PageContent>
        <Navigation />
        <PlanSubscriptionsContainer>
          <Text size="h3">What you’ve subscribed to</Text>
          <PlanSubscriptions>
            {memberships.map((membership) => (
              <MembershipCard
                key={membership.cursor}
                membership={membership.node}
                onClick={() => setShownMembership(membership.node)}
              />
            ))}
            <div ref={loaderRef} />
          </PlanSubscriptions>
        </PlanSubscriptionsContainer>
        {shownMembership && (
          <ModalMembershipInfo
            membership={shownMembership}
            onClose={() => setShownMembership(undefined)}
            onUpdate={refetch}
          />
        )}
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Subscriptions;
