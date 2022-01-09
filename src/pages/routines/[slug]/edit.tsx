import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { skipToken } from '@reduxjs/toolkit/dist/query/react';

import { useGetRoutineBySlugQuery } from '@store/services/routines';
import RoutineBuilder from '@components/RoutineBuilder';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { PageWrapper } from '@components/PageWrapper';
import Loader from '@components/Loader';
import { useSegmentPageEvent, useUser } from '@hooks';

import { LoaderContainer } from '@modules/routines/[slug]/edit.styled';

function Edit(): JSX.Element {
  useUser({ redirectTo: process.env.NEXT_PUBLIC_HOST });
  useSegmentPageEvent();

  const router = useRouter();
  const { slug } = router.query;
  const { data: routine } = useGetRoutineBySlugQuery(
    (slug as string) ?? skipToken
  );

  return (
    <PageWrapper>
      <Head>
        <title>Routine edit | Routinr</title>
        <meta
          property="og:title"
          content="Routine edit | Routinr"
          key="title"
        />
      </Head>
      <Header />
      {routine ? (
        <RoutineBuilder slug={routine.slug} initialStep={1} />
      ) : (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      <Footer />
    </PageWrapper>
  );
}

export default Edit;
