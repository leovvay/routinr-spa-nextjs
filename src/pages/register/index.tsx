import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Container from '@mui/material/Container';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import { useUser } from '@hooks';
import LoginForm from '@components/LoginForm';
import { unAuthGuardSSR } from '@utils';

function Register() {
  const router = useRouter();
  const { currentUser } = useUser();

  useEffect(() => {
    if (currentUser) router.push('/');
  }, [currentUser, router]);

  return (
    <PageWrapper>
      <Head>
        <title>Register | Routinr</title>
        <meta property="og:title" content="Register | Routinr" key="title" />
      </Head>
      <Header />
      <PageContent>
        <Container maxWidth="sm">
          <LoginForm initialStep="signUp" />
        </Container>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Register;

export const getServerSideProps = unAuthGuardSSR;
