import React from 'react';

import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import Paper from '@mui/material/Paper';

import Button from '@components/Button';
import Text from '@components/Text';
import { PaymentCard as IPaymentCard } from '@store/services/purchases';

import { ChooseCardActions, ChooseCardBrand } from './PaymentCard.styled';

interface PaymentCardProps {
  card: IPaymentCard;
  onRemove(): void;
  onSelect?(): void;
}

function PaymentCard({
  card,
  onRemove,
  onSelect,
}: PaymentCardProps): JSX.Element {
  return (
    <Paper key={card.id} elevation={6}>
      <CardContent>
        <Stack spacing={1}>
          <Text size="bodySmallMedium">{`xxxx xxxx xxxx ${card.last4}`}</Text>
          <Text size="bodySmallMedium">
            {card.expMonth}/{card.expYear}
          </Text>
        </Stack>
      </CardContent>
      <ChooseCardActions>
        <Button variant="outlined" size="small" onClick={onRemove}>
          Remove
        </Button>
        {onSelect && (
          <Button size="small" onClick={onSelect}>
            Select
          </Button>
        )}
        <ChooseCardBrand
          size="2x"
          icon={card.brand === 'visa' ? faCcVisa : faCcMastercard}
        />
      </ChooseCardActions>
    </Paper>
  );
}

PaymentCard.defaultProps = {
  onSelect: undefined,
};

export default PaymentCard;
