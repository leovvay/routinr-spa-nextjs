import React from 'react';

import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useSnackbar } from 'notistack';
import Stack from '@mui/material/Stack';

import Text from '@components/Text';
import Button from '@components/Button';
import LinkTo from '@components/LinkTo';

import { AddPaymentCardModalDialog } from './AddPaymentCardModal.styled';

interface AddPaymentCardModalProps {
  open: boolean;
  onClose(): void;
}

function AddPaymentCardModal({
  open,
  onClose,
}: AddPaymentCardModalProps): JSX.Element {
  const { enqueueSnackbar } = useSnackbar();
  const stripe = useStripe();
  const elements = useElements();

  const handleSave = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: window.location.href,
      },
    });

    if (error) {
      enqueueSnackbar(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <AddPaymentCardModalDialog open={open} onClose={onClose}>
      <DialogTitle>
        <Text size="h6">New payment method</Text>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Text>Credit or debit card</Text>
          <PaymentElement />
          <Text size="bodyCaptionSmall">
            You may be charged a $1 verification fee by Stripe which will be
            reversed immediately. Contact our{' '}
            <LinkTo href="https://routinr.zendesk.com" target="_blank" blue>
              support
            </LinkTo>{' '}
            for any questions.
          </Text>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="alert"
          onClick={handleSave}
          disabled={!stripe || !elements}
        >
          Save card
        </Button>
      </DialogActions>
    </AddPaymentCardModalDialog>
  );
}

export default AddPaymentCardModal;
