import React from 'react';
import Head from 'next/head';

import { useInfinityMyPlanRoutinesQuery } from '@store/services/routines';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Text from '@components/Text';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import { useSegmentPageEvent, useUser } from '@hooks';
import { RoutineInPlanCard } from '@components/RoutineCards';

import Navigation from '@modules/plan/components/Navigation';
import {
  PlanRoutines,
  PlanRoutinesContainer,
} from '@modules/plan/routines.styled';

function Routines(): JSX.Element {
  const { currentUser } = useUser({
    redirectTo: process.env.NEXT_PUBLIC_HOST,
  });
  const {
    data,
    refetch,
    loaderRef: routinesLoaderRef,
  } = useInfinityMyPlanRoutinesQuery(Number(currentUser?.id));

  const routines =
    data?.pages.map((page) => page.myPlanRoutines.edges).flat() ?? [];

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>Routines | Routinr</title>
        <meta property="og:title" content="Routines | Routinr" key="title" />
      </Head>
      <Header />
      <PageContent>
        <Navigation />
        <PlanRoutinesContainer>
          <Text size="h3">Routines you are subscribed to</Text>
          <PlanRoutines>
            {routines.map((routine) => (
              <RoutineInPlanCard
                routine={routine.node}
                key={routine.cursor}
                onUsingChange={refetch}
              />
            ))}
            <div ref={routinesLoaderRef} />
          </PlanRoutines>
        </PlanRoutinesContainer>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Routines;
