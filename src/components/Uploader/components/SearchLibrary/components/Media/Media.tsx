import React from 'react';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import { UnsplashStock } from '@store/services/types/unsplash.interface';
import Text from '@components/Text';
import Button from '@components/Button';
import { Gallery } from '@store/services/types/media.interface';

import {
  MediaContainer,
  MediaPhotoInfoContainer,
  MediaPhotoByText,
  MediaView,
  MediaPhotoByContainer,
  MediaPhotoUsedButton,
} from './Media.styled';

interface MediaProps {
  media: UnsplashStock | Gallery;
  unsplash?: boolean;
  disabled?: boolean;
  isUsed: boolean;
  onAction(): void;
}

function Media({
  media,
  unsplash,
  isUsed,
  disabled,
  onAction,
}: MediaProps): JSX.Element {
  const url = unsplash
    ? (media as UnsplashStock).urls.small
    : (media as Gallery).previewUrl;

  return (
    <MediaContainer>
      <MediaView src={url} alt="something nice" />
      <MediaPhotoInfoContainer>
        <MediaPhotoByContainer>
          {unsplash ? (
            <>
              <MediaPhotoByText>Photo By</MediaPhotoByText>
              <MediaPhotoByText>
                {(media as UnsplashStock).user.username}
              </MediaPhotoByText>
            </>
          ) : (
            <MediaPhotoByText>{(media as Gallery).filename}</MediaPhotoByText>
          )}
        </MediaPhotoByContainer>
        {isUsed ? (
          <MediaPhotoUsedButton onClick={onAction}>
            <CheckRoundedIcon />
          </MediaPhotoUsedButton>
        ) : (
          <Button onClick={onAction} disabled={disabled}>
            <Text>Add</Text>
          </Button>
        )}
      </MediaPhotoInfoContainer>
    </MediaContainer>
  );
}

Media.defaultProps = {
  unsplash: false,
  disabled: false,
};

export default Media;
