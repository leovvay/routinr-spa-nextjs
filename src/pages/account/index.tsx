import React, { useState } from 'react';
import Head from 'next/head';
import { Controller, useForm } from 'react-hook-form';

import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useSnackbar } from 'notistack';

import { authGuardSSR } from '@utils';
import { useUser } from '@hooks';
import Header from '@components/Header';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Footer from '@components/Footer';
import Text from '@components/Text';
import Button from '@components/Button';

import SettingsNav from '@modules/account/components/SettingsNav';
import { AccountSettingsContainer } from '@modules/account/index.styled';
import RemoveAccountModal from '@modules/account/components/RemoveAccountModal';

import getLegacyAuthHeaders from '../../utils/getLegacyAuthHeaders';

interface PasswordChangeForm {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

const schema = yup
  .object({
    oldPassword: yup.string().required('Old Password is required'),
    newPassword: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('New Password is required'),
    newPasswordConfirm: yup
      .string()
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
      .required('Password confirmation is required'),
  })
  .required();

function Account() {
  const { currentUser } = useUser();
  const { control, handleSubmit, reset } = useForm<PasswordChangeForm>({
    resolver: yupResolver(schema),
  });
  const { enqueueSnackbar } = useSnackbar();

  const [openRemove, setOpenRemove] = useState(false);

  const handlePasswordChange = async (data: PasswordChangeForm) => {
    const body = {
      password: data.oldPassword,
      new_password: data.newPassword,
    };
    const headers = {
      'content-type': 'application/json',
      accept: 'application/json',
      ...getLegacyAuthHeaders(),
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LEGACY_API_HOST}/api/v1/change-password`,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers,
      }
    );

    if (!response.ok) {
      const text = await response.json();
      enqueueSnackbar(text.errors[0].detail, {
        variant: 'error',
      });
    } else {
      enqueueSnackbar('Password was changed!', {
        variant: 'success',
      });
      reset();
    }
  };

  return (
    <PageWrapper>
      <Head>
        <title>Account settings | Routinr</title>
        <meta
          property="og:title"
          content="Account settings | Routinr"
          key="title"
        />
      </Head>
      <Header />
      <PageContent>
        <SettingsNav>
          <AccountSettingsContainer>
            <Stack spacing={2}>
              <Text size="h5" weight={600}>
                Email address
              </Text>
            </Stack>
            <TextField
              placeholder="Email address"
              value={currentUser?.email}
              variant="outlined"
              type="email"
              disabled
              fullWidth
            />
            <Stack spacing={2}>
              <Text size="h5" weight={600}>
                Change password
              </Text>
              <Controller
                name="oldPassword"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    placeholder="Old password"
                    label="Old password"
                    variant="outlined"
                    type="password"
                    fullWidth
                  />
                )}
              />
              <Controller
                name="newPassword"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    placeholder="New password"
                    label="New password"
                    variant="outlined"
                    type="password"
                    fullWidth
                  />
                )}
              />
              <Controller
                name="newPasswordConfirm"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    placeholder="Confirm password"
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    fullWidth
                  />
                )}
              />
              <div>
                <Button
                  variant="alert"
                  onClick={handleSubmit(handlePasswordChange)}
                >
                  Update password
                </Button>
              </div>
            </Stack>
            <Divider />
            <Stack spacing={2} justifyContent="end" direction="row">
              <Button variant="alert" onClick={() => setOpenRemove(true)}>
                Remove account
              </Button>
            </Stack>
          </AccountSettingsContainer>
        </SettingsNav>
        <RemoveAccountModal
          open={openRemove}
          onClose={() => setOpenRemove(false)}
        />
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Account;

export const getServerSideProps = authGuardSSR;
