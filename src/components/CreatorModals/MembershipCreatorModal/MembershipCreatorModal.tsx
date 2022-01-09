import React, { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import FormHelperText from '@mui/material/FormHelperText';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import {
  useCreateMembershipMutation,
  useUpdateMembershipMutation,
} from '@store/services/membership';
import CreateMembershipInput from '@store/services/membership/dto/createMembership.input';
import { MembershipInfo } from '@store/services/membership/membership.interface';
import Text, { TextLight } from '@components/Text';
import TextField from '@components/TextField';
import Button from '@components/Button';
import Select, { SelectOption } from '@components/Select';
import Uploader, { UploadImage } from '@components/Uploader';
import Switch from '@components/Switch';
import PriceSelector from '@components/PriceSelector/PriceSelector';
import UploadImages from '@components/Uploader/Uploader.helpers';
import UpdateMembershipInput from '@store/services/membership/dto/updateMembership.input';

import { CreatorModalForm, CreatorModalSection } from '../CreatorModals.styled';

interface MembershipCreatorModalProps {
  open: boolean;
  onClose(): void;
  membership?: MembershipInfo;
}

export interface MembershipCreatorFormFields {
  cover: UploadImage;
  title: string;
  content: SelectOption<'All Routines and selected posts' | 'Selected posts'>;
  description: string;
  price: SelectOption<number>;
  recurrence: 'month' | 'one-off';
  includeAddress: boolean;
}

const INPUT_RULES = {
  required: {
    value: true,
    message: 'required',
  },
};

const CONTENT_OPTIONS = [
  {
    value: 'All Routines and selected posts',
    label: 'All Routines and selected posts',
  },
  { value: 'Selected posts', label: 'Selected posts' },
] as SelectOption[];

const ALLOWED_FORMATS = ['image'];

function MembershipCreatorModal({
  open,
  onClose,
  membership,
}: MembershipCreatorModalProps): JSX.Element {
  const [existing, setExisting] = useState(
    membership?.cover ? [new UploadImages(membership.cover, true)] : []
  );
  const [createMembership, { isLoading: isCreating, isSuccess }] =
    useCreateMembershipMutation();
  const [updateMembership] = useUpdateMembershipMutation();

  const { control, handleSubmit, reset, setValue } =
    useForm<MembershipCreatorFormFields>({
      defaultValues: {
        title: membership?.title,
        description: membership?.description,
        recurrence: membership?.recurrence ?? ('month' as const),
        includeAddress: membership?.includeAddress ?? false,
        content: membership?.content
          ? { value: membership.content, label: membership.content }
          : undefined,
        price: membership?.price
          ? { value: membership.price, label: membership.price }
          : undefined,
      },
    });

  const handleExistingRemove = () => setExisting([]);
  const handleCancel = useCallback(() => {
    reset();
    onClose();
  }, [onClose, reset]);

  const handleSave = async (data: MembershipCreatorFormFields) => {
    if (membership)
      await updateMembership(
        new UpdateMembershipInput({ id: membership.id, ...data })
      );
    else await createMembership(new CreateMembershipInput(data));
    onClose();
  };

  const handleUploadChange = useCallback(
    ([image]: UploadImage[]) => {
      setValue('cover', image);
    },
    [setValue]
  );

  useEffect(() => {
    if (isSuccess) handleCancel();
  }, [handleCancel, isSuccess]);

  return (
    <Dialog
      onClose={handleCancel}
      aria-labelledby="create-membership-modal"
      open={open}
    >
      <Controller
        name="cover"
        control={control}
        rules={{
          validate: (image: UploadImage) =>
            Boolean(image?.isCover) || Boolean(existing[0]?.isCover),
        }}
        render={({ fieldState }) => (
          <Uploader
            currentFiles={existing}
            handleRemove={handleExistingRemove}
            onChange={handleUploadChange}
            maxFilesCount={1}
            allowedFormat={ALLOWED_FORMATS}
            invalid={fieldState.invalid}
            error="Please select a cover"
          />
        )}
      />

      <DialogContent>
        <CreatorModalForm>
          <CreatorModalSection>
            <Text size="h6" as="h6">
              Title
            </Text>
            <Controller
              name="title"
              control={control}
              rules={INPUT_RULES}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </CreatorModalSection>
          <CreatorModalSection>
            <Text size="h6" as="h6">
              Content
            </Text>
            <Controller
              name="content"
              control={control}
              rules={INPUT_RULES}
              render={({ field: { onChange, value }, fieldState }) => (
                <FormControl component="fieldset" error={fieldState.invalid}>
                  <Select
                    value={value}
                    error={fieldState.invalid}
                    options={CONTENT_OPTIONS}
                    onChange={onChange}
                  />
                  <FormHelperText variant="outlined">
                    {fieldState.error?.message}
                  </FormHelperText>
                </FormControl>
              )}
            />
          </CreatorModalSection>
          <CreatorModalSection>
            <Text size="h6" as="h6">
              Description
            </Text>
            <Controller
              name="description"
              control={control}
              rules={INPUT_RULES}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  variant="outlined"
                  minRows={3}
                  fullWidth
                  multiline
                />
              )}
            />
          </CreatorModalSection>
          <CreatorModalSection>
            <Text size="h6" as="h6">
              Pricing
            </Text>
            <Controller
              name="price"
              control={control}
              rules={INPUT_RULES}
              render={({ field, fieldState }) => (
                <FormControl component="fieldset" error={fieldState.invalid}>
                  <PriceSelector
                    value={field.value}
                    error={fieldState.invalid}
                    onChange={field.onChange}
                  />
                  <FormHelperText variant="outlined">
                    {fieldState.error?.message}
                  </FormHelperText>
                  <TextLight size="bodyCaptionSmall">
                    *All Prices in USD
                  </TextLight>
                </FormControl>
              )}
            />
          </CreatorModalSection>
          <CreatorModalSection>
            <Text size="h6" as="h6">
              Recurrence
            </Text>
            <Controller
              name="recurrence"
              control={control}
              rules={INPUT_RULES}
              render={({ field }) => (
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="recurrence"
                    name="recurrence"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <FormControlLabel
                      value="month"
                      control={<Radio color="primary" />}
                      label="Monthly"
                    />
                    <FormControlLabel
                      value="one-off"
                      control={<Radio color="primary" />}
                      label="One-off"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </CreatorModalSection>
          <CreatorModalSection row>
            <Text size="h6">Include address?</Text>
            <Controller
              name="includeAddress"
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <Switch
                  checked={value}
                  onChange={onChange}
                  inputRef={ref}
                  color="primary"
                  name="includeAddress"
                />
              )}
            />
          </CreatorModalSection>
        </CreatorModalForm>
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={handleSubmit(handleSave)}>
          {isCreating ? <CircularProgress size={21} color="inherit" /> : 'Save'}
        </Button>
        <Button onClick={handleCancel} variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

MembershipCreatorModal.defaultProps = {
  membership: undefined,
};

export default MembershipCreatorModal;
