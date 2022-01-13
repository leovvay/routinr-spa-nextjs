import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Stack from '@mui/material/Stack';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import {
  LoginButton,
  LoginInput,
  LoginLabel,
  LoginLogo,
  LoginTitle,
} from '@components/LoginForm/LoginForm.styled';
import Image from '@components/Image/Image';
import { TextLight } from '@components/Text';
import Card from '@components/Card';
import { useLegacyAppLogin } from '@hooks';
import LinkTo from '@components/LinkTo';

import type {
  ResetPasswordFormInputs,
  ResetResponse,
} from './PasswordReset.types';

import { HelperText } from './PasswordReset.styled';

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

function PasswordReset(): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ResetPasswordFormInputs>({
    resolver: yupResolver(schema),
  });

  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<ResetResponse>({
    success: false,
    error: null,
  });

  const { resetPassword } = useLegacyAppLogin();

  const onSubmit = async (data: ResetPasswordFormInputs) => {
    setProcessing(true);
    const response = await resetPassword(data);
    setResult(response);
    setProcessing(false);
  };

  return result.success ? (
    <>
      <HelperText size="bodyCaption">
        Check your email for a link to reset your password. If it doesn’t appear
        within a few minutes, check your spam folder.
      </HelperText>
      <LinkTo href="/login">
        <LoginButton>Return to sign in</LoginButton>
      </LinkTo>
    </>
  ) : (
    <>
      <Stack spacing={4}>
        <LoginTitle>
          <LoginLogo>
            <Image src="/logoR.svg" width={50} height={54} />
            <TextLight size="h3" weight={800}>
              Password reset
            </TextLight>
          </LoginLogo>
        </LoginTitle>
        <HelperText size="bodyCaption">
          Enter your email address and we will send you a link to reset your
          password.
        </HelperText>
        <Card noPadding>
          <div>
            <LoginLabel htmlFor="email">
              <TextLight
                size="bodyLead"
                weight={600}
                color={errors.email && 'var(--red)'}
              >
                Email
              </TextLight>
              <LoginInput {...register('email')} type="email" id="email" />
            </LoginLabel>
          </div>
        </Card>
        {(result.error || errors.email) && (
          <HelperText size="bodyCaption" color="var(--red)">
            {result.error || errors.email?.message}
          </HelperText>
        )}
      </Stack>
      <LoginButton onClick={handleSubmit(onSubmit)} disabled={processing}>
        Send
      </LoginButton>
    </>
  );
}

export default PasswordReset;
