import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import Stack from '@mui/material/Stack';
import { FormControlLabel } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { SOCIAL_REGEXPS } from '@constants';
import { LoginLogo, LoginTitle } from '@components/LoginForm/LoginForm.styled';
import Image from '@components/Image/Image';
import { TextLight } from '@components/Text';
import TextField from '@components/TextField/TextField.styled';
import { NewSwitch } from '@components/Switch';
import Social from '@components/Social';
import { SignUpWithEmailButton } from '@components/LoginForm/components/SignUpWithEmail/SignUpWithEmail.styled';
import { getErrorText, getSocialErrorText } from '@utils';
import { useUpdateMeMutation } from '@store/services/users';
import UpdateMeArgs from '@store/services/users/dto/UpdateMe.args';

import {
  CompleteRegistrationFormInputs,
  CustomControllerRenderProps,
} from './CompleteRegistration.interface';

const schema = yup
  .object({
    firstName: yup.string().required(getErrorText('First name')),
    lastName: yup.string().required(getErrorText('Last name')),
    handle: yup.string().required(getErrorText('@Ideal handle')),
    isCreator: yup.boolean().required(),
    facebook: yup.string().matches(SOCIAL_REGEXPS.facebook, {
      message: getSocialErrorText('Facebook'),
      excludeEmptyString: true,
    }),
    twitter: yup.string().matches(SOCIAL_REGEXPS.twitter, {
      message: getSocialErrorText('Twitter'),
      excludeEmptyString: true,
    }),
    youtube: yup.string().matches(SOCIAL_REGEXPS.youtube, {
      message: getSocialErrorText('Youtube'),
      excludeEmptyString: true,
    }),
    instagram: yup.string().matches(SOCIAL_REGEXPS.instagram, {
      message: getSocialErrorText('Instagram'),
      excludeEmptyString: true,
    }),
  })
  .required();

function CompleteRegistration(): JSX.Element {
  const router = useRouter();
  const [updateMe, { isLoading: isUpdating }] = useUpdateMeMutation();
  const { control, watch, handleSubmit } =
    useForm<CompleteRegistrationFormInputs>({
      resolver: yupResolver(schema),
    });

  const isCreator = watch('isCreator');

  const onSubmit = async (data: CompleteRegistrationFormInputs) => {
    await updateMe(new UpdateMeArgs(data));
    router.push(isCreator ? '/dashboard' : '/');
  };

  return (
    <Stack spacing={4}>
      <LoginTitle>
        <LoginLogo>
          <Image src="/logoR.svg" width={50} height={54} />
          <TextLight size="h3" weight={800}>
            Complete registration
          </TextLight>
        </LoginLogo>
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
            name="handle"
            control={control}
            render={useCallback(
              ({
                field,
                fieldState,
              }: CustomControllerRenderProps<'handle'>) => (
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
                name="facebook"
                control={control}
                render={({
                  field,
                  fieldState,
                }: CustomControllerRenderProps<'facebook'>) => (
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
                name="twitter"
                control={control}
                render={({
                  field,
                  fieldState,
                }: CustomControllerRenderProps<'twitter'>) => (
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
                name="youtube"
                control={control}
                render={({
                  field,
                  fieldState,
                }: CustomControllerRenderProps<'youtube'>) => (
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
                name="instagram"
                control={control}
                render={({
                  field,
                  fieldState,
                }: CustomControllerRenderProps<'instagram'>) => (
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
        <SignUpWithEmailButton
          onClick={handleSubmit(onSubmit)}
          disabled={isUpdating}
        >
          Complete registration
        </SignUpWithEmailButton>
      </form>
    </Stack>
  );
}

export default CompleteRegistration;
