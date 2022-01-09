import React, { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';

import { youtubeValidator } from '@utils';
import {
  useCreatePostMutation,
  useUpdatePostCoverMutation,
  useUpdatePostMutation,
} from '@store/services/posts/posts';
import CreatePostInput from '@store/services/posts/dto/createPost.input';
import { Post } from '@store/services/posts';
import UpdatePostInput from '@store/services/posts/dto/updatePost.input';
import UploadImages from '@components/Uploader/Uploader.helpers';
import TextField from '@components/TextField';
import Text from '@components/Text';
import Switch from '@components/Switch';
import CategoriesSelector from '@components/CategoriesSelector';
import Button from '@components/Button';
import MembershipsSelector from '@components/MembershipsSelector';
import { SelectOption } from '@components/Select';
import Uploader, { UploadImage } from '@components/Uploader';
import YouTubeInput from '@components/YouTubeInput';
import UpdatePostCover from '@store/services/posts/dto/updatePostCover.input';
import { queryClient } from '@store/graphql.client';
import { useUser } from '@hooks';

import { CreatorModalForm, CreatorModalSection } from '../CreatorModals.styled';

interface PostCreatorModalProps {
  open: boolean;
  onClose(): void;
  post?: Post;
}

export interface PostCreatorFormFields {
  description: string;
  isPremium: boolean;
  membership?: SelectOption<number>;
  tags: SelectOption<string>[];
  title: string;
  youtubeUrl: string;
  attachments: UploadImage[];

  mediaToRemove?: UploadImage[];
}

const INPUT_RULES = {
  required: {
    value: true,
    message: 'required',
  },
};

function PostCreatorModal({
  post,
  open,
  onClose,
}: PostCreatorModalProps): JSX.Element {
  const { currentUser } = useUser();
  const [coverChanges, setCoverChanges] =
    useState<{ prevCover: UploadImage; newCover?: UploadImage }>();
  const [currentAttachments, setCurrentAttachments] = useState<UploadImages[]>(
    post?.attachments
      .map((attachment) => new UploadImage(attachment))
      .concat([new UploadImage(post.cover, true)]) ?? []
  );

  const { watch, control, handleSubmit, reset, setValue, getValues } =
    useForm<PostCreatorFormFields>({
      defaultValues: {
        title: post?.title,
        description: post?.description,
        youtubeUrl: post?.youtubeUrl,
        isPremium: post?.isPremium ?? false,
        tags: post?.tags.map((tag) => ({ label: tag, value: tag })) ?? [],
        membership:
          post && post.membership
            ? { value: post.membership.id, label: post.membership.title }
            : { value: -1, label: 'All memberships' },
      },
    });

  const [createPost, { isLoading: isCreating, isSuccess }] =
    useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [updatePostCover] = useUpdatePostCoverMutation();

  const isPremium = watch('isPremium');

  const handleCancel = useCallback(() => {
    reset();
    onClose();
  }, [onClose, reset]);

  const handleSave = async (data: PostCreatorFormFields) => {
    if (post) {
      if (coverChanges)
        await updatePostCover(
          new UpdatePostCover({
            postId: post.id,
            ...coverChanges,
          })
        );
      await updatePost(new UpdatePostInput({ id: post.id, ...data }));
    } else await createPost(new CreatePostInput(data));
    queryClient.invalidateQueries('MyPosts');
    queryClient.invalidateQueries(`InfluencersPosts-${currentUser?.id}`);
    onClose();
  };

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
    if (isSuccess) handleCancel();
  }, [handleCancel, isSuccess]);

  return (
    <Dialog
      onClose={handleCancel}
      aria-labelledby="create-post-modal"
      scroll="body"
      open={open}
    >
      <Controller
        name="attachments"
        control={control}
        defaultValue={[]}
        rules={{
          validate: (images: UploadImage[]) =>
            currentAttachments.concat(images).some((image) => image.isCover),
        }}
        render={({ fieldState }) => (
          <Uploader
            currentFiles={currentAttachments}
            handleRemove={handleExistingRemove}
            handleCoverChange={handleCoverChange}
            onChange={handleUploadChange}
            invalid={fieldState.invalid}
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
              control={control}
              defaultValue=""
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
          <CreatorModalSection row>
            <Text size="h6">Premium Content?</Text>
            <Controller
              name="isPremium"
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <Switch
                  checked={value}
                  onChange={onChange}
                  inputRef={ref}
                  color="primary"
                  name="isPremium"
                />
              )}
            />
          </CreatorModalSection>
          {isPremium && (
            <CreatorModalSection>
              <Text size="h6" as="h6">
                Membership
              </Text>
              <Controller
                name="membership"
                control={control}
                render={({ field: { value, onChange } }) => (
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  <MembershipsSelector value={value} onChange={onChange} />
                )}
              />
            </CreatorModalSection>
          )}
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
              Tags
            </Text>
            <Controller
              name="tags"
              control={control}
              render={({ field: { value, onChange } }) => (
                <CategoriesSelector value={value} onChange={onChange} />
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

PostCreatorModal.defaultProps = {
  post: undefined,
};

export default PostCreatorModal;
