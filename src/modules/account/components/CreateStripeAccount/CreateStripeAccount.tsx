import React, { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';
import { useSnackbar } from 'notistack';

import Text from '@components/Text';
import Select, { SelectOption } from '@components/Select';
import Button from '@components/Button/Button';
import { useCreateStripeAccountMutation } from '@store/services/stripe';

const COUNTRIES = [
  { value: 'AT', label: 'Austria' },
  { value: 'AU', label: 'Australia' },
  { value: 'BE', label: 'Belgium' },
  { value: 'CA', label: 'Canada' },
  { value: 'CH', label: 'Switzerland' },
  { value: 'DE', label: 'Germany' },
  { value: 'DK', label: 'Denmark' },
  { value: 'ES', label: 'Spain' },
  { value: 'FI', label: 'Finland' },
  { value: 'FR', label: 'France' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'HK', label: 'Hong Kong' },
  { value: 'IE', label: 'Ireland' },
  { value: 'IT', label: 'Italy' },
  { value: 'JP', label: 'Japan' },
  { value: 'LU', label: 'Luxembourg' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'NO', label: 'Norway' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'PT', label: 'Portugal' },
  { value: 'SE', label: 'Sweden' },
  { value: 'SG', label: 'Singapore' },
  { value: 'US', label: 'United States' },
];

function CreateStripeAccount(): JSX.Element {
  const { enqueueSnackbar } = useSnackbar();
  const [createStripeAccount, { isLoading, error }] =
    useCreateStripeAccountMutation();

  const [country, setCountry] = useState<string>();

  const onChange = (option: SelectOption<string> | null) => {
    if (option) {
      setCountry(option.value);
    }
  };

  const createAccount = () => {
    if (country) createStripeAccount(country);
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }
  }, [enqueueSnackbar, error]);

  return (
    <Stack spacing={2}>
      <Text>Choose your country</Text>

      <Select
        options={COUNTRIES}
        // @ts-ignore
        onChange={onChange}
      />
      <div>
        <Button onClick={createAccount} disabled={!country || isLoading}>
          Create connected Stripe account
        </Button>
      </div>
    </Stack>
  );
}

export default CreateStripeAccount;
