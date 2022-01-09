import React, { useCallback } from 'react';
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useForm,
} from 'react-hook-form';
import { ControllerFieldState } from 'react-hook-form/dist/types/controller';

import Stack from '@mui/material/Stack';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import InputAdornment from '@mui/material/InputAdornment';
import { FormControlLabel } from '@mui/material';
import { useSnackbar } from 'notistack';

import {
  LoginLogo,
  LoginSignUpButton,
  LoginTitle,
} from '@components/LoginForm/LoginForm.styled';
import Image from '@components/Image/Image';
import Text, { TextLight } from '@components/Text';
import { SignUpLinks } from '@components/LoginForm/components/SignUp/SignUp.styled';
import TextField from '@components/TextField/TextField.styled';
import { SOCIAL_REGEXPS } from '@constants';
import { NewSwitch } from '@components/Switch';
import { SignUpWithEmailButton } from '@components/LoginForm/components/SignUpWithEmail/SignUpWithEmail.styled';
import { useLegacyAppLogin } from '@hooks';
import Social from '@components/Social';
import { getErrorText, getSocialErrorText } from '@utils';

import useRedirectTarget from '../../../../hooks/useRedirectTarget';

interface CustomControllerRenderProps<Field extends string> {
  field: ControllerRenderProps<FieldValues, Field>;
  fieldState: ControllerFieldState;
}

interface SignUpWithEmailFormInputs {
  firstName: string;
  lastName: string;
  idealHandle: string;
  email: string;
  password: string;
  isCreator: boolean;
  facebookProfileLink: string;
  twitterProfileLink: string;
  youtubeProfileLink: string;
  instagramProfileLink: string;
}

interface SignUpWithEmailProps {
  onSignIn(): void;
}

const schema = yup
  .object({
    firstName: yup.string().required(getErrorText('First name')),
    lastName: yup.string().required(getErrorText('Last name')),
    idealHandle: yup.string().required(getErrorText('@Ideal handle')),
    email: yup.string().email().required(getErrorText('Email')),
    password: yup.string().min(8).required(getErrorText('Password')),
    isCreator: yup.boolean().required(),
    facebookProfileLink: yup.string().matches(SOCIAL_REGEXPS.facebook, {
      message: getSocialErrorText('Facebook'),
    }),
    twitterProfileLink: yup.string().matches(SOCIAL_REGEXPS.twitter, {
      message: getSocialErrorText('Twitter'),
    }),
    youtubeProfileLink: yup.string().matches(SOCIAL_REGEXPS.youtube, {
      message: getSocialErrorText('Youtube'),
    }),
    instagramProfileLink: yup.string().matches(SOCIAL_REGEXPS.instagram, {
      message: getSocialErrorText('Instagram'),
    }),
  })
  .required();

function SignUpWithEmail({ onSignIn }: SignUpWithEmailProps): JSX.Element {
  const { enqueueSnackbar } = useSnackbar();
  const { login } = useLegacyAppLogin();
  const [, setRedirectTarget] = useRedirectTarget();
  const { control, watch, handleSubmit } = useForm<SignUpWithEmailFormInputs>({
    resolver: yupResolver(schema),
  });

  const isCreator = watch('isCreator');

  const onSubmit = async (data: SignUpWithEmailFormInputs) => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (isCreator)
      setRedirectTarget(`${process.env.NEXT_PUBLIC_HOST}/dashboard`);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LEGACY_API_HOST}/api/v1/auth`,
      {
        method: 'POST',
        body: JSON.stringify({ ...data, timezone }),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      }
    );

    if (response.ok) {
      login({ email: data.email, password: data.password });
    } else {
      const text = await response.json();
      enqueueSnackbar(text.errors.full_messages['0'], {
        variant: 'error',
      });
    }
  };

  return (
    <Stack spacing={4}>
      <LoginTitle>
        <LoginLogo>
          <Image src="/logoR.svg" width={50} height={54} />
          <TextLight size="h3" weight={800}>
            Sign up with email
          </TextLight>
        </LoginLogo>
        <LoginSignUpButton size="bodySmallExtraBold" onClick={onSignIn}>
          SIGN-IN HERE
        </LoginSignUpButton>
      </LoginTitle>
      <form>
        <Stack spacing={3} sx={{ mb: 2 }}>
          <Controller
            name="firstName"
            control={control}
            render={useCallback(
              ({
                field,
                fieldState,
              }: CustomControllerRenderProps<'firstName'>) => (
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  placeholder="First name"
                  variant="outlined"
                  fullWidth
                />
              ),
              []
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={useCallback(
              ({
                field,
                fieldState,
              }: CustomControllerRenderProps<'lastName'>) => (
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  placeholder="Last name"
                  variant="outlined"
                  fullWidth
                />
              ),
              []
            )}
          />
          <Controller
            name="idealHandle"
            control={control}
            render={useCallback(
              ({
                field,
                fieldState,
              }: CustomControllerRenderProps<'idealHandle'>) => (
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  placeholder="@Ideal handle"
                  variant="outlined"
                  fullWidth
                />
              ),
              []
            )}
          />
          <Controller
            name="email"
            control={control}
            render={useCallback(
              ({ field, fieldState }: CustomControllerRenderProps<'email'>) => (
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  placeholder="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                />
              ),
              []
            )}
          />
          <Controller
            name="password"
            control={control}
            render={useCallback(
              ({
                field,
                fieldState,
              }: CustomControllerRenderProps<'password'>) => (
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  type="password"
                  placeholder="Password"
                  variant="outlined"
                  fullWidth
                />
              ),
              []
            )}
          />
          <Controller
            name="isCreator"
            control={control}
            defaultValue={false}
            render={({ field }: CustomControllerRenderProps<'isCreator'>) => (
              <FormControlLabel
                control={
                  <NewSwitch
                    checked={field.value}
                    onChange={field.onChange}
                    sx={{ mr: 1 }}
                  />
                }
                label="I'm creator"
              />
            )}
          />

          {isCreator && (
            <>
              <Controller
                name="facebookProfileLink"
                control={control}
                render={({
                  field,
                  fieldState,
                }: CustomControllerRenderProps<'facebookProfileLink'>) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    placeholder="Facebook profile link"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Social social="facebook" width={30} height={32} />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                )}
              />
              <Controller
                name="twitterProfileLink"
                control={control}
                render={({
                  field,
                  fieldState,
                }: CustomControllerRenderProps<'twitterProfileLink'>) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    placeholder="Twitter profile link"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Social social="twitter" width={30} height={32} />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                )}
              />
              <Controller
                name="youtubeProfileLink"
                control={control}
                render={({
                  field,
                  fieldState,
                }: CustomControllerRenderProps<'youtubeProfileLink'>) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    placeholder="Youtube profile link"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Social social="youtube" width={30} height={32} />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                )}
              />
              <Controller
                name="instagramProfileLink"
                control={control}
                render={({
                  field,
                  fieldState,
                }: CustomControllerRenderProps<'instagramProfileLink'>) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    placeholder="Instagram profile link"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Social social="instagram" width={30} height={32} />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                )}
              />
            </>
          )}
        </Stack>
        <Text size="bodyCaptionBold" weight={600}>
          By clicking &quot;Sign up&quot; button, I agree with Routinr{' '}
          <SignUpLinks href="/legal-text/terms">Terms of Service</SignUpLinks>{' '}
          and <SignUpLinks href="/legal-text">Privacy Policy</SignUpLinks>.
          We&apos;ll share offers and info with you by email. You can update
          your email preferences anytime.
        </Text>
        <SignUpWithEmailButton onClick={handleSubmit(onSubmit)}>
          Sign up
        </SignUpWithEmailButton>
      </form>
    </Stack>
  );
}

export default SignUpWithEmail;
