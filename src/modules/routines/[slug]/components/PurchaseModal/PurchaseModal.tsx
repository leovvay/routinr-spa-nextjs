import React, { useEffect, useState } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { PaymentCard } from '@store/services/purchases';
import Loader from '@components/Loader';

import { PageLoaderContainer } from '@modules/index.styled';

import ChooseCard from './components/ChooseCard';
import ConfirmPurchase from './components/ConfirmPurchase';

import { PurchaseModalDialog } from './PurchaseModal.styled';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

interface PurchaseModalProps {
  open: boolean;
  isFetchingSecret: boolean;
  clientSecret?: string;
  price: number;
  fullScreen?: boolean;
  handleCancel(): void;
  getClientSecret(paymentMethodId?: string): Promise<void>;
}

function PurchaseModal({
  open,
  handleCancel,
  price,
  clientSecret,
  isFetchingSecret,
  fullScreen,
  getClientSecret,
}: PurchaseModalProps): JSX.Element {
  const [step, setStep] = useState(0);
  const [chosenCard, setChosenCard] = useState<PaymentCard>();

  const options = {
    clientSecret,
  };

  const handlePaymentMethod = async (card?: PaymentCard) => {
    await getClientSecret(card?.id);

    setStep(1);
    if (card) setChosenCard(card);
  };

  const resetModal = () => {
    setStep(0);
    setChosenCard(undefined);
  };

  useEffect(() => {
    if (!open) resetModal();
  }, [open]);

  return (
    <PurchaseModalDialog
      onClose={handleCancel}
      aria-labelledby="purchase-routine-modal"
      scroll="body"
      open={open}
      fullScreen={fullScreen}
    >
      {step === 0 && (
        <ChooseCard
          onNewPaymentMethod={handlePaymentMethod}
          onCard={handlePaymentMethod}
        />
      )}
      {step === 1 &&
        (clientSecret && !isFetchingSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <ConfirmPurchase
              price={price}
              card={chosenCard}
              clientSecret={clientSecret}
              onCancel={handleCancel}
            />
          </Elements>
        ) : (
          <PageLoaderContainer>
            <Loader />
          </PageLoaderContainer>
        ))}
    </PurchaseModalDialog>
  );
}

PurchaseModal.defaultProps = {
  fullScreen: false,
  clientSecret: undefined,
};

export default PurchaseModal;
