import React, { useCallback, useEffect, useState } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import { youtubeValidator } from '@utils';
import { Routine } from '@store/services/routines';
import Text from '@components/Text';
import Button from '@components/Button';
import Uploader, { UploadImage } from '@components/Uploader';
import YouTubeInput from '@components/YouTubeInput';
import UploadImages from '@components/Uploader/Uploader.helpers';
import {
  RoutineBuilderSection,
  RoutineBuilderText,
} from '@components/RoutineBuilder/RoutineBuilder.styled';
import { MediaAndAttachmentsForm } from '@components/RoutineBuilder/RoutineBuilder.types';

const ALLOWED_FORMATS = ['image'];
const VIDEO_FORMATS = ['video'];

interface MediaAttachmentsProps {
  handleSave(routine: MediaAndAttachmentsForm): void;
  routine?: Routine;
  form: UseFormReturn<MediaAndAttachmentsForm>;
}

function MediaAttachments({
  handleSave,
  routine,
  form,
}: MediaAttachmentsProps): JSX.Element {
  const { control, handleSubmit, setValue, getValues, watch, formState } = form;

  const { isSubmitted } = formState;
  const hasYouTube = watch('youtubeUrl');
  const hasPromoVideo = watch('promoVideo');
  const hasCover = watch('cover');

  const routineHasCover = hasCover || hasPromoVideo || hasYouTube;

  const [currentSupports, setCurrentSupports] = useState<UploadImages[]>([]);
  const [currentAttachments, setCurrentAttachments] = useState<UploadImages[]>(
    []
  );
  const [currentCover, setCurrentCover] = useState<UploadImages[]>([]);

  const handleExistingRemove = useCallback(
    (image: UploadImage, type: 'cover' | 'attachment' | 'support') => {
      const mediaToRemove = getValues('mediaToRemove') || [];
      setValue('mediaToRemove', mediaToRemove.concat(image));

      switch (type) {
        case 'attachment': {
          const index = currentAttachments.findIndex(
            (attachment) => attachment.info.url === image.info.url
          );
          setCurrentAttachments((prevAttachments) =>
            prevAttachments
              .slice(0, index)
              .concat(prevAttachments.slice(index + 1))
          );
          break;
        }
        case 'support': {
          const index = currentSupports.findIndex(
            (attachment) => attachment.info.url === image.info.url
          );
          setCurrentSupports((prevSupports) =>
            prevSupports.slice(0, index).concat(prevSupports.slice(index + 1))
          );
          break;
        }
        default: {
          setCurrentCover([]);
          break;
        }
      }
    },
    [currentAttachments, currentSupports, getValues, setValue]
  );

  const handleCoverChange = useCallback(
    ([image]: UploadImage[]) => {
      setValue('cover', image);
    },
    [setValue]
  );

  const handleVideoChange = useCallback(
    ([video]: UploadImage[]) => {
      setValue('promoVideo', video);
    },
    [setValue]
  );

  const handleSupportChange = useCallback(
    (images: UploadImage[]) => {
      setValue('supports', images);
    },
    [setValue]
  );

  const handleAttachmentsChange = useCallback(
    (images: UploadImage[]) => {
      setValue('attachments', images);
    },
    [setValue]
  );

  useEffect(() => {
    if (routine && Number(routine.cover.id) !== 0) {
      setCurrentCover([new UploadImages(routine.cover)]);
    }
  }, [routine]);

  useEffect(() => {
    if (routine) {
      setCurrentAttachments(
        routine.attachments.map((attachment) => new UploadImages(attachment))
      );
    }
  }, [routine]);

  useEffect(() => {
    if (routine) {
      setCurrentSupports(
        routine.supports.map((attachment) => new UploadImages(attachment))
      );
    }
  }, [currentAttachments, routine]);

  return (
    <div>
      <RoutineBuilderSection>
        <Text size="h0" as="h1">
          Routine Cover
        </Text>
        <RoutineBuilderText>
          Choose a great cover image. This is your first impression and people
          are visual so pick an awesome image!
        </RoutineBuilderText>
        <Controller
          name="cover"
          control={control}
          render={() => (
            <Uploader
              currentFiles={currentCover}
              onChange={handleCoverChange}
              handleRemove={(image) => handleExistingRemove(image, 'cover')}
              maxFilesCount={1}
              allowedFormat={ALLOWED_FORMATS}
              invalid={isSubmitted && !routineHasCover}
              error="Please select a cover"
              placeholder="Upload photo"
              withoutCover
            />
          )}
        />
      </RoutineBuilderSection>
      <RoutineBuilderSection>
        <Text size="h0" as="h1">
          Promo video
        </Text>
        {!hasYouTube && (
          <RoutineBuilderSection>
            <RoutineBuilderText>
              If you want to use a video to promote your routine you can upload
              it here
            </RoutineBuilderText>
            <Controller
              name="promoVideo"
              control={control}
              render={() => (
                <Uploader
                  onChange={handleVideoChange}
                  maxFilesCount={1}
                  allowedFormat={VIDEO_FORMATS}
                  invalid={isSubmitted && !routineHasCover}
                  error="Please select a cover"
                  placeholder="Upload video"
                  justUpload
                  withoutCover
                />
              )}
            />
          </RoutineBuilderSection>
        )}
        {!hasPromoVideo && (
          <RoutineBuilderSection>
            <Text size="h6" as="h6">
              Got a YouTube video? Enter the YouTube URL here...
            </Text>
            <Controller
              name="youtubeUrl"
              control={control}
              defaultValue={routine?.youtubeUrl}
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
          </RoutineBuilderSection>
        )}
      </RoutineBuilderSection>
      <RoutineBuilderSection>
        <Text size="h0" as="h1">
          Supporting Media
        </Text>
        <RoutineBuilderText>
          Got any testimonials, screenshots or promotional images you want to
          add as part of your routine page? Add them here!
        </RoutineBuilderText>
        <Controller
          name="supports"
          control={control}
          render={() => (
            <Uploader
              currentFiles={currentSupports}
              handleRemove={(image) => handleExistingRemove(image, 'support')}
              onChange={handleSupportChange}
              maxFilesCount={5}
              allowedFormat={ALLOWED_FORMATS}
              placeholder="Upload photos"
              withoutCover
            />
          )}
        />
      </RoutineBuilderSection>
      <RoutineBuilderSection>
        <Text size="h0" as="h1">
          Attachments
        </Text>
        <RoutineBuilderText>
          For any supporting docs such as shopping lists, ebooks, checklists or
          any other downloads you want to include with your routine you can add
          them here.
        </RoutineBuilderText>
        <Controller
          name="attachments"
          control={control}
          render={() => (
            <Uploader
              currentFiles={currentAttachments}
              handleRemove={(image) =>
                handleExistingRemove(image, 'attachment')
              }
              onChange={handleAttachmentsChange}
              maxFilesCount={5}
              placeholder="Upload files"
              withoutCover
            />
          )}
        />
      </RoutineBuilderSection>
      <Button size="large" onClick={handleSubmit(handleSave)}>
        <Text>Save & continue</Text>
      </Button>
    </div>
  );
}

MediaAttachments.defaultProps = {
  routine: undefined,
};

export default MediaAttachments;
