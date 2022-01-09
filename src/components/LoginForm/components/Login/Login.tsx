import React from 'react';
import { useForm } from 'react-hook-form';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';

import {
  LoginButton,
  LoginForgotLink,
  LoginInput,
  LoginLabel,
  LoginLogo,
  LoginSignUpButton,
  LoginSocialLink,
  LoginTitle,
} from '@components/LoginForm/LoginForm.styled';
import Image from '@components/Image/Image';
import { TextLight } from '@components/Text';
import Card from '@components/Card';
import { useLegacyAppLogin } from '@hooks';

interface LoginFormInputs {
  email: string;
  password: string;
}

interface LoginProps {
  onSignUp(): void;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

function Login({ onSignUp }: LoginProps): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });
  const { fbAuthLink, googleAuthLink, login } = useLegacyAppLogin();

  const onSubmit = async (data: LoginFormInputs) => {
    await login(data);
  };

  return (
    <>
      <Stack spacing={4}>
        <LoginTitle>
          <LoginLogo>
            <Image src="/logoR.svg" width={50} height={54} />
            <TextLight size="h3" weight={800}>
              Login
            </TextLight>
          </LoginLogo>
          <LoginSignUpButton size="bodySmallExtraBold" onClick={onSignUp}>
            SIGN-UP HERE
          </LoginSignUpButton>
        </LoginTitle>
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
          <Divider />
          <div>
            <LoginLabel htmlFor="password">
              <TextLight
                size="bodyLead"
                weight={600}
                color={errors.password && 'var(--red)'}
              >
                Password
              </TextLight>
              <LoginInput
                {...register('password')}
                type="password"
                id="password"
              />
            </LoginLabel>
          </div>
        </Card>
      </Stack>
      <LoginForgotLink href="/forgot-password" blue>
        Forgot your password?
      </LoginForgotLink>
      <Stack direction="row" justifyContent="space-between">
        <LoginSocialLink href={googleAuthLink}>
          <Image src="/google-logo.svg" width={30} height={25} />
          Login
        </LoginSocialLink>
        <LoginSocialLink href={fbAuthLink}>
          <Image src="/fb-logo.svg" width={20} height={22} />
          Login
        </LoginSocialLink>
      </Stack>
      <LoginButton onClick={handleSubmit(onSubmit)}>Login</LoginButton>
    </>
  );
}

export default Login;
