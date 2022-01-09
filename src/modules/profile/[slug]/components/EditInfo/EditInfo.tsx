import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';

import Button from '@components/Button';
import Text from '@components/Text';
import { SOCIAL_REGEXPS } from '@constants';
import { useUpdateMeMutation } from '@store/services/users';
import UpdateMeArgs from '@store/services/users/dto/UpdateMe.args';
import Social from '@components/Social';

import { EditInfoFormInputs, EditInfoProps } from './EditInfo.interfaces';

const getErrorText = (field: string): string => `${field} is a required field`;
const getSocialErrorText = (field: string): string =>
  `Please enter valid ${field} profile link`;

const schema = yup
  .object({
    displayName: yup.string().required(getErrorText('Display name')),
    handle: yup.string().required(getErrorText('@Ideal handle')),
    description: yup.string(),
    facebook: yup.string().matches(SOCIAL_REGEXPS.facebook, {
      message: getSocialErrorText('Facebook'),
    }),
    twitter: yup.string().matches(SOCIAL_REGEXPS.twitter, {
      message: getSocialErrorText('Twitter'),
    }),
    youtube: yup.string().matches(SOCIAL_REGEXPS.youtube, {
      message: getSocialErrorText('Youtube'),
    }),
    instagram: yup.string().matches(SOCIAL_REGEXPS.instagram, {
      message: getSocialErrorText('Instagram'),
    }),
  })
  .required();

function EditInfo({ influencer, className }: EditInfoProps): JSX.Element {
  const [updateMe, { isLoading: isUpdating }] = useUpdateMeMutation();
  const { control, handleSubmit, reset } = useForm<EditInfoFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: influencer.description,
      displayName: influencer.displayName,
      handle: influencer.handle,
      facebook: influencer.socials?.facebook || undefined,
      twitter: influencer.socials?.twitter || undefined,
      youtube: influencer.socials?.youtube || undefined,
      instagram: influencer.socials?.instagram || undefined,
    },
  });
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const handleSave = async (data: EditInfoFormInputs) => {
    await updateMe(new UpdateMeArgs(data));
    reset(data);
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={className}
        size="large"
        variant="outlined"
      >
        <Text weight={700}>Edit info</Text>
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          <Text size="h6">Edit main information</Text>
        </DialogTitle>
        <DialogContent>
          <form>
            <Stack spacing={3} sx={{ mb: 2, pt: 1 }}>
              <Controller
                name="displayName"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    placeholder="Display name"
                    label="Display name"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              <Controller
                name="handle"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    placeholder="@Ideal handle"
                    label="@Ideal handle"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    placeholder="About"
                    label="About"
                    variant="outlined"
                    minRows={5}
                    multiline
                    fullWidth
                  />
                )}
              />
              <Controller
                name="facebook"
                control={control}
                render={({ field, fieldState }) => (
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
                render={({ field, fieldState }) => (
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
                render={({ field, fieldState }) => (
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
                render={({ field, fieldState }) => (
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
            </Stack>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit(handleSave)} disabled={isUpdating}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditInfo;
