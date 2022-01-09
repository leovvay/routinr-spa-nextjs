import React from 'react';
import Head from 'next/head';

import RoutineBuilder from '@components/RoutineBuilder';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { PageWrapper } from '@components/PageWrapper';
import { useSegmentPageEvent, useUser } from '@hooks';

function RoutineBuilderPage(): JSX.Element {
  useUser({ redirectTo: process.env.NEXT_PUBLIC_HOST });

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>Routine builder | Routinr</title>
        <meta
          property="og:title"
          content="Routine builder | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <RoutineBuilder />
      <Footer />
    </PageWrapper>
  );
}

export default RoutineBuilderPage;
