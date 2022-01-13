import React from 'react';
import Head from 'next/head';

import Container from '@mui/material/Container';

import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import LoginForm from '@components/LoginForm';
import Footer from '@components/Footer';

function ResetPassword() {
  return (
    <PageWrapper>
      <Head>
        <title>Reset password | Routinr</title>
        <meta
          property="og:title"
          content="Reset password | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <PageContent>
        <Container maxWidth="sm">
          <LoginForm initialStep="resetPassword" />
        </Container>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default ResetPassword;
