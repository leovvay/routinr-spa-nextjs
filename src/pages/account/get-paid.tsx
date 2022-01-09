import React from 'react';
import Head from 'next/head';

import { skipToken } from '@reduxjs/toolkit/query/react';
import Stack from '@mui/material/Stack';

import { authGuardSSR } from '@utils';
import {
  useMyStripeInfoQuery,
  useOnboardingLinkQuery,
} from '@store/services/stripe';
import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';
import Text, { TextLight } from '@components/Text';
import LinkTo from '@components/LinkTo';
import Button from '@components/Button';

import SettingsNav from '@modules/account/components/SettingsNav';
import { AccountSettingsContainer } from '@modules/account/index.styled';
import CreateStripeAccount from '@modules/account/components/CreateStripeAccount';

function GetPaid() {
  const { data: myStripeInfo } = useMyStripeInfoQuery();
  const needCreateAccount = !myStripeInfo?.stripeAccount;
  const needStripeOnboard =
    !needCreateAccount && myStripeInfo?.stripeAccountStatus !== 'verified';

  const skipOnboardingLinkRequest =
    !myStripeInfo || !(myStripeInfo && needStripeOnboard);

  const { data: onboardingLink } = useOnboardingLinkQuery(
    skipOnboardingLinkRequest ? skipToken : undefined
  );
  return (
    <PageWrapper>
      <Head>
        <title>Get paid | Routinr</title>
        <meta property="og:title" content="Get paid | Routinr" key="title" />
      </Head>
      <Header />
      <PageContent>
        <SettingsNav>
          <AccountSettingsContainer>
            <Stack spacing={2}>
              <Text size="h5" weight={600}>
                Getting paid
              </Text>
              {myStripeInfo && needCreateAccount && (
                <Stack>
                  <TextLight weight={600}>
                    In order to start selling and taking funds, you need to
                    nominate and connect your bank account that we pay into. To
                    start the process please create connected Stripe stripe
                    account by clicking the button below.
                  </TextLight>
                  <CreateStripeAccount />
                </Stack>
              )}
              {needStripeOnboard && onboardingLink && (
                <Stack alignItems="start" spacing={1}>
                  <TextLight weight={600}>
                    In order to start selling and taking funds, you need to
                    nominate and connect your bank account that we pay into. To
                    start the process please verify your details with Stripe by
                    clicking the button below.
                  </TextLight>
                  <Button onClick={() => {}}>
                    <LinkTo href={onboardingLink}>
                      <Text>
                        Connect with <Text weight={800}>stripe</Text>
                      </Text>
                    </LinkTo>
                  </Button>
                </Stack>
              )}
              {!needStripeOnboard && !needCreateAccount && (
                <Stack alignItems="start" spacing={1}>
                  <Button onClick={() => {}} disabled>
                    <Text>Payout Details Verified</Text>
                  </Button>
                </Stack>
              )}
            </Stack>
          </AccountSettingsContainer>
        </SettingsNav>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default GetPaid;

export const getServerSideProps = authGuardSSR;
