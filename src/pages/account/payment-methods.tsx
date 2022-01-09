import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { Elements } from '@stripe/react-stripe-js';
import Stack from '@mui/material/Stack';
import { useSnackbar } from 'notistack';
import Paper from '@mui/material/Paper';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { loadStripe } from '@stripe/stripe-js';

import { authGuardSSR } from '@utils';
import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';
import Text, { TextLight } from '@components/Text';
import {
  useGetPaymentCardsQuery,
  useRemovePaymentCardMutation,
} from '@store/services/purchases';
import PaymentCard from '@components/PaymentCard';
import { useCardSetupIntentQuery } from '@store/services/stripe';

import SettingsNav from '@modules/account/components/SettingsNav';
import { AccountSettingsContainer } from '@modules/account/index.styled';
import {
  AddPaymentButton,
  PaymentsList,
} from '@modules/account/payment-methods.styled';
import AddPaymentCardModal from '@modules/account/components/AddPaymentCardModal';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

function PaymentMethods() {
  const { enqueueSnackbar } = useSnackbar();
  const { data: cards } = useGetPaymentCardsQuery();

  const [removePaymentCard, { error }] = useRemovePaymentCardMutation();
  const { data: clientSecret } = useCardSetupIntentQuery();

  const [openAddCard, setOpenAddCard] = useState(false);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }
  }, [enqueueSnackbar, error]);

  return (
    <PageWrapper>
      <Head>
        <title>Payment methods | Routinr</title>
        <meta
          property="og:title"
          content="Payment methods | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <PageContent>
        <SettingsNav>
          <AccountSettingsContainer>
            <Stack spacing={2}>
              <Text size="h5" weight={600}>
                Payment methods
              </Text>
              <TextLight weight={600}>
                Add a payment method to purchase routines and support influencer
                memberships.
              </TextLight>
              <PaymentsList>
                {cards?.map((card) => (
                  <PaymentCard
                    key={card.id}
                    card={card}
                    onRemove={() => removePaymentCard(card.id)}
                  />
                ))}
                <Paper elevation={6}>
                  <AddPaymentButton
                    onClick={() => setOpenAddCard(true)}
                    disabled={!clientSecret}
                  >
                    <AddCircleRoundedIcon fontSize="large" />
                    <Text>Add payment method</Text>
                  </AddPaymentButton>
                </Paper>
              </PaymentsList>
            </Stack>
          </AccountSettingsContainer>
        </SettingsNav>
        {clientSecret && (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                variables: {
                  colorPrimary: '#2348f1',
                  fontFamily: '"Muli", sans-serif',
                },
              },
            }}
          >
            <AddPaymentCardModal
              open={openAddCard}
              onClose={() => setOpenAddCard(false)}
            />
          </Elements>
        )}
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default PaymentMethods;

export const getServerSideProps = authGuardSSR;
