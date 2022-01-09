import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Container from '@mui/material/Container';

import { unAuthGuardSSR } from '@utils';
import { useUser } from '@hooks';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import LoginForm from '@components/LoginForm';

function Login() {
  const router = useRouter();
  const { currentUser } = useUser();

  useEffect(() => {
    if (currentUser) router.push('/');
  }, [currentUser, router]);

  return (
    <PageWrapper>
      <Head>
        <title>Login | Routinr</title>
        <meta property="og:title" content="Login | Routinr" key="title" />
      </Head>
      <Header />
      <PageContent>
        <Container maxWidth="sm">
          <LoginForm />
        </Container>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Login;

export const getServerSideProps = unAuthGuardSSR;
