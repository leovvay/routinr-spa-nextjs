import React from 'react';
import Head from 'next/head';

import Container from '@mui/material/Container';

import { PageContent, PageWrapper } from '@components/PageWrapper';
import LoginForm from '@components/LoginForm';
import Footer from '@components/Footer';

function CompleteRegistration(): JSX.Element {
  return (
    <PageWrapper>
      <Head>
        <title>Complete registration | Routinr</title>
        <meta
          property="og:title"
          content="Complete registration | Routinr"
          key="title"
        />
      </Head>
      <PageContent>
        <Container maxWidth="sm">
          <LoginForm initialStep="completeRegistration" />
        </Container>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default CompleteRegistration;
