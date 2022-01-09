import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { CardActions } from '@mui/material';
import { useSnackbar } from 'notistack';

import { PaymentCard } from '@store/services/purchases';
import Text, { TextLight } from '@components/Text';
import { currencyFormat } from '@utils';
import Button from '@components/Button/Button';

import { PurchaseModalTitle } from '../../PurchaseModal.styled';
import {
  ConfirmPurchaseLink,
  ConfirmPurchasePaymentDetails,
  ConfirmPurchasePrice,
  ConfirmPurchaseSection,
} from './ConfirmPurchase.styled';

interface ConfirmPurchaseProps {
  price: number;
  onCancel(): void;
  card?: PaymentCard;
  clientSecret?: string;
  recurrence?: string;
}

function ConfirmPurchase({
  price,
  card,
  onCancel,
  clientSecret,
  recurrence,
}: ConfirmPurchaseProps): JSX.Element {
  const { enqueueSnackbar } = useSnackbar();
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState(false);

  const amount = currencyFormat(price);
  const isConfirmDisabled = card
    ? !stripe || !elements || processing
    : processing;

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setProcessing(true);
    if (card && clientSecret) {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          return_url: window.location.href,
        }
      );

      if (error) enqueueSnackbar('Please, try again later');
      else {
        // Imitate stripe.confirmPayment behavior
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set(
          'payment_intent_client_secret',
          paymentIntent?.client_secret as string
        );
        window.location.search = searchParams.toString();
      }
    } else {
      await stripe.confirmPayment({
        // `Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: window.location.href,
        },
      });
    }
    setProcessing(false);
  };

  return (
    <div>
      <div>
        <PurchaseModalTitle weight={800}>Confirm purchase</PurchaseModalTitle>
      </div>
      <ConfirmPurchaseSection>
        <Text size="bodyLead">
          Price:{' '}
          <ConfirmPurchasePrice size="bodyLead">
            {amount} {recurrence}
          </ConfirmPurchasePrice>
        </Text>
      </ConfirmPurchaseSection>
      <ConfirmPurchasePaymentDetails>
        {card ? (
          <Stack spacing={1}>
            <Text size="bodySmallMedium">{`xxxx xxxx xxxx ${card.last4}`}</Text>
            <Text size="bodySmallMedium">
              {card.expMonth}/{card.expYear}
            </Text>
          </Stack>
        ) : (
          <PaymentElement />
        )}
      </ConfirmPurchasePaymentDetails>
      <ConfirmPurchaseSection>
        <Stack spacing={1}>
          <Text size="bodyCaptionBold">
            By clicking Confirm purchase, I agree to Routinr{' '}
            <ConfirmPurchaseLink href="legal-text/terms" target="_blank">
              Terms of Service
            </ConfirmPurchaseLink>
            , and{' '}
            <ConfirmPurchaseLink href="legal-text" target="_blank">
              Privacy policy
            </ConfirmPurchaseLink>
            .
          </Text>
          <TextLight size="footerCaption">*All prices are in USD.</TextLight>
        </Stack>
      </ConfirmPurchaseSection>
      <CardActions>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button disabled={isConfirmDisabled} onClick={handleSubmit}>
          Confirm purchase
        </Button>
      </CardActions>
    </div>
  );
}

ConfirmPurchase.defaultProps = {
  card: undefined,
  clientSecret: undefined,
  recurrence: undefined,
};

export default ConfirmPurchase;
