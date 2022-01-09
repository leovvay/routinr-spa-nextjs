import React, { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { DateTime } from 'luxon';

import {
  useCreateActivityMutation,
  useUpdateActivityCoverMutation,
  useUpdateActivityMutation,
} from '@store/services/routines';
import CreateActivityInput from '@store/services/routines/dto/createActivity.input';
import UpdateActivity from '@store/services/routines/dto/updateActivity.input';
import UpdateActivityCover from '@store/services/routines/dto/updateActivityCover.input';
import { Day } from '@store/services/routines/day.interface';
import { Activity } from '@store/services/routines/activity.interface';
import { youtubeValidator } from '@utils';
import { UploadImage } from '@components/Uploader';
import Uploader from '@components/Uploader/Uploader';
import {
  CreatorModalForm,
  CreatorModalSection,
} from '@components/CreatorModals/CreatorModals.styled';
import Text from '@components/Text';
import TextField from '@components/TextField/TextField.styled';
import Button from '@components/Button';
import UploadImages from '@components/Uploader/Uploader.helpers';
import YouTubeInput from '@components/YouTubeInput';

import { AddActivityModalTimePicker } from './AddActivityModal.styled';

const ALLOWED_FORMATS = [
  'image',
  'video',
  'aac',
  'mp3',
  'wav',
  'm4a',
  'ogg',
  'oga',
];

const INPUT_RULES = {
  required: {
    value: true,
    message: 'required',
  },
};

export interface ActivityForm
  extends Omit<Activity, 'id' | 'cover' | 'attachments' | 'routineId'> {
  attachments: UploadImage[];
  mediaToRemove?: UploadImage[];
}

interface AddActivityModalProps {
  day: Day;
  open: boolean;
  onClose(): void;
  activity?: Activity;
}

function AddActivityModal({
  day,
  activity,
  open,
  onClose,
}: AddActivityModalProps): JSX.Element {
  const [coverChanges, setCoverChanges] =
    useState<{ prevCover: UploadImage; newCover?: UploadImage }>();
  const [currentAttachments, setCurrentAttachments] = useState<UploadImages[]>(
    []
  );
  const { control, handleSubmit, reset, setValue, getValues } = useForm();

  const [updateActivity] = useUpdateActivityMutation();
  const [updateActivityCover] = useUpdateActivityCoverMutation();
  const [createActivity] = useCreateActivityMutation();

  const defaultStartTime = activity
    ? DateTime.fromFormat(activity.startTime, 'HH:mm', { zone: 'utc' }).setZone(
        'local'
      )
    : DateTime.now().set({
        hour: 8,
        minute: 0,
      });

  const defaultEndTime = activity
    ? DateTime.fromFormat(activity.endTime, 'HH:mm', { zone: 'utc' }).setZone(
        'local'
      )
    : defaultStartTime.set({ hour: 9 });

  const handleCancel = useCallback(() => {
    setCurrentAttachments([]);
    reset();
    onClose();
  }, [onClose, reset]);

  const handleSave = useCallback(
    async (activityData: ActivityForm) => {
      if (activity) {
        if (coverChanges) {
          await updateActivityCover(
            new UpdateActivityCover({
              activityId: activity.id,
              ...coverChanges,
            })
          );
        }
        await updateActivity(
          new UpdateActivity({
            id: Number(activity.id),
            dayId: Number(day.id),
            routineId: Number(day.routineId),
            ...activityData,
          })
        );
      } else {
        await createActivity(
          new CreateActivityInput({
            dayId: Number(day.id),
            routineId: Number(day.routineId),
            ...activityData,
          })
        );
      }
      handleCancel();
    },
    [
      activity,
      coverChanges,
      createActivity,
      day,
      handleCancel,
      updateActivity,
      updateActivityCover,
    ]
  );

  const handleUploadChange = useCallback(
    (images: UploadImage[]) => {
      setValue('attachments', images);
    },
    [setValue]
  );

  const handleExistingRemove = useCallback(
    (image: UploadImage) => {
      const mediaToRemove = getValues('mediaToRemove') || [];
      setValue('mediaToRemove', mediaToRemove.concat(image));

      const index = currentAttachments.findIndex(
        (attachment) => attachment.info.url === image.info.url
      );
      setCurrentAttachments((prevAttachments) =>
        prevAttachments.slice(0, index).concat(prevAttachments.slice(index + 1))
      );
    },
    [currentAttachments, getValues, setValue]
  );

  const handleCoverChange = useCallback(
    (image: UploadImage, isNew: boolean) => {
      if (image.isCover) return;

      setCurrentAttachments((prevAttachments) =>
        prevAttachments.map((attachment) => {
          if (attachment.isCover) {
            setCoverChanges({
              prevCover: attachment,
              newCover: isNew ? undefined : image,
            });
            // eslint-disable-next-line no-param-reassign
            attachment.isCover = false;
          }
          if (attachment.info.url === image.info.url) {
            // eslint-disable-next-line no-param-reassign
            attachment.isCover = true;
          }
          return attachment;
        })
      );
    },
    []
  );

  useEffect(() => {
    if (activity) {
      setCurrentAttachments(
        [new UploadImages(activity.cover, true)].concat(
          activity.attachments.map((attachment) => new UploadImages(attachment))
        )
      );
    }
  }, [activity]);

  return (
    <Dialog
      onClose={handleCancel}
      aria-labelledby="create-activity-modal"
      scroll="body"
      open={open}
    >
      <Controller
        name="attachments"
        control={control}
        defaultValue={[]}
        rules={{
          validate: (images: UploadImage[]) => {
            if (images.length || currentAttachments.length)
              return currentAttachments
                .concat(images)
                .some((image) => image.isCover);
            return false;
          },
        }}
        render={({ fieldState }) => (
          <Uploader
            currentFiles={currentAttachments}
            handleCoverChange={handleCoverChange}
            handleRemove={handleExistingRemove}
            onChange={handleUploadChange}
            allowedFormat={ALLOWED_FORMATS}
            invalid={fieldState.invalid}
            placeholder="Upload photos, videos or audio"
            error="Please select a cover"
          />
        )}
      />

      <DialogContent>
        <CreatorModalForm>
          <CreatorModalSection>
            <Text size="h6" as="h6">
              Got a YouTube video? Enter the YouTube URL here...
            </Text>
            <Controller
              name="youtubeUrl"
              control={control}
              defaultValue={activity?.youtubeUrl}
              rules={{
                validate: (url) => {
                  if (url) return youtubeValidator(url).isValid;
                  return true;
                },
              }}
              render={({ field, fieldState }) => (
                <YouTubeInput
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </CreatorModalSection>
          <CreatorModalSection>
            <Text size="h6" as="h6">
              Title
            </Text>
            <Controller
              name="title"
              defaultValue={activity?.title}
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
              Start time
            </Text>
            <Controller
              name="startTime"
              defaultValue={defaultStartTime}
              control={control}
              rules={INPUT_RULES}
              render={({ field, fieldState }) => (
                <AddActivityModalTimePicker
                  {...field}
                  inputRef={field.ref}
                  ampm={false}
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                      variant="outlined"
                    />
                  )}
                />
              )}
            />
          </CreatorModalSection>
          <CreatorModalSection>
            <Text size="h6" as="h6">
              End time
            </Text>
            <Controller
              name="endTime"
              defaultValue={defaultEndTime}
              control={control}
              rules={INPUT_RULES}
              render={({ field, fieldState }) => (
                <AddActivityModalTimePicker
                  {...field}
                  inputRef={field.ref}
                  ampm={false}
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                      variant="outlined"
                    />
                  )}
                />
              )}
            />
          </CreatorModalSection>
          <CreatorModalSection>
            <Text size="h6" as="h6">
              Description
            </Text>
            <Controller
              name="description"
              defaultValue={activity?.description}
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
        </CreatorModalForm>
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={handleSubmit(handleSave)}>
          Save
        </Button>
        <Button onClick={handleCancel} variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AddActivityModal.defaultProps = {
  activity: undefined,
};

export default AddActivityModal;
