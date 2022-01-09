import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useStripe } from '@stripe/react-stripe-js';
import { useSnackbar } from 'notistack';

import { useAddRoutineToPlanMutation } from '@store/services/plan';

/**
 * Handle stripe paymentIntent status and if a purchase is successful add a routine to plan
 * @param routineId
 */
export default function usePaymentStatus(routineId?: number): void {
  const router = useRouter();
  const stripe = useStripe();
  const { enqueueSnackbar } = useSnackbar();
  const [addRoutine] = useAddRoutineToPlanMutation();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    // Retrieve the PaymentIntent
    if (typeof clientSecret === 'string') {
      stripe
        .retrievePaymentIntent(clientSecret)
        .then(async ({ paymentIntent }) => {
          if (paymentIntent) {
            // Inspect the PaymentIntent `status` to indicate the status of the payment
            // to your customer.
            //
            // Some payment methods will [immediately succeed or fail][0] upon
            // confirmation, while others will first enter a `processing` state.
            //
            // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
            if (paymentIntent.status === 'succeeded') {
              enqueueSnackbar('Success! Payment received.', {
                variant: 'success',
              });
              if (routineId) await addRoutine(Number(routineId));
            } else if (paymentIntent.status === 'processing') {
              enqueueSnackbar(
                "Payment processing. We'll update you when payment is received."
              );
            } else if (paymentIntent.status === 'requires_payment_method') {
              // Redirect your user back to your payment page to attempt collecting
              // payment again
              enqueueSnackbar(
                'Payment failed. Please try another payment method.',
                {
                  variant: 'error',
                }
              );
            } else {
              enqueueSnackbar('Something went wrong.', {
                variant: 'error',
              });
            }
          }
        })
        .then(() => router.push('/plan'));
    }
  }, [addRoutine, enqueueSnackbar, router, routineId, stripe]);
}
