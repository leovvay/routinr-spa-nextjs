import React, { ChangeEvent, memo, useState } from 'react';

import Tooltip from '@mui/material/Tooltip';

import Image from '@components/Image';
import Touchable from '@components/Touchable';

import {
  CloseIconButton,
  ImagePreview,
  ImagePreviewIcon,
  ImageRemoveIcon,
  UploaderImageActions,
  UploaderImageCheckbox,
  UploaderImageContainer,
} from './UploaderImage.styled';

const previewableTypes = ['video', 'audio', 'image'];

interface UploaderImageProps {
  src: string;
  original: string;
  isCover: boolean;
  onSetCover(isCover: boolean): void;
  onRemove(): void;
  type?: 'video' | 'image' | 'audio' | 'raw';
  withoutCover?: boolean;
}

function UploaderImage({
  src,
  isCover,
  onSetCover,
  onRemove,
  original,
  type = 'image',
  withoutCover = false,
}: UploaderImageProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [hasPreview, setHasPreview] = useState(
    ['video', 'image'].includes(type)
  );

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleCoverChange = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    onSetCover(checked);
  };

  return (
    <UploaderImageContainer>
      {hasPreview ? (
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          onError={() => setHasPreview(false)}
        />
      ) : (
        <Image src="/file-icon.png" layout="fill" objectFit="scale-down" />
      )}

      {!withoutCover && (
        <Tooltip title="Set as cover" arrow>
          <UploaderImageCheckbox
            checked={isCover}
            onChange={handleCoverChange}
            color="primary"
          />
        </Tooltip>
      )}
      <UploaderImageActions>
        {previewableTypes.includes(type) && (
          <Touchable onClick={handleOpen}>
            <ImagePreviewIcon />
          </Touchable>
        )}
        <CloseIconButton onClick={onRemove}>
          <ImageRemoveIcon />
        </CloseIconButton>
      </UploaderImageActions>
      <ImagePreview
        onClose={handleClose}
        aria-labelledby="image-preview"
        open={open}
      >
        {type === 'image' && (
          <Image src={original} layout="fill" objectFit="scale-down" />
        )}
        {type === 'video' && <video src={original} controls />}
        {type === 'audio' && <audio src={original} controls />}
      </ImagePreview>
    </UploaderImageContainer>
  );
}

UploaderImage.defaultProps = {
  type: 'image',
  withoutCover: false,
};

export default memo(UploaderImage);
