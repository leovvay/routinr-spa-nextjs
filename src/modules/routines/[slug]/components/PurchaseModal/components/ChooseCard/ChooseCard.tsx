import React, { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import { useSnackbar } from 'notistack';

import {
  PaymentCard as IPaymentCard,
  useGetPaymentCardsQuery,
  useRemovePaymentCardMutation,
} from '@store/services/purchases';
import Loader from '@components/Loader';
import PaymentCard from '@components/PaymentCard';
import Button from '@components/Button';

import { PageLoaderContainer } from '@modules/index.styled';

import { PurchaseModalTitle } from '../../PurchaseModal.styled';

interface ChooseCardProps {
  onCard(card: IPaymentCard): void;
  onNewPaymentMethod(): void;
}

function ChooseCard({
  onCard,
  onNewPaymentMethod,
}: ChooseCardProps): JSX.Element {
  const { enqueueSnackbar } = useSnackbar();
  const { data: cards } = useGetPaymentCardsQuery();
  const [removePaymentCard, { error }] = useRemovePaymentCardMutation();

  useEffect(() => {
    if (cards && cards.length === 0) onNewPaymentMethod();
  }, [cards, onNewPaymentMethod]);

  useEffect(() => {
    if (error) enqueueSnackbar(error.message, { variant: 'error' });
  }, [enqueueSnackbar, error]);

  if (!cards)
    return (
      <PageLoaderContainer>
        <Loader />
      </PageLoaderContainer>
    );

  return (
    <div>
      <PurchaseModalTitle weight={800}>
        Select payment method
      </PurchaseModalTitle>
      <Stack spacing={2}>
        {cards.map((card) => (
          <PaymentCard
            key={card.id}
            card={card}
            onRemove={() => removePaymentCard(card.id)}
            onSelect={() => onCard(card)}
          />
        ))}
        <Button onClick={() => onNewPaymentMethod()}>
          Pay with another payment method
        </Button>
      </Stack>
    </div>
  );
}

export default ChooseCard;
