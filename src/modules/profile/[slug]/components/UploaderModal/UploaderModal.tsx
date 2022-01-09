import React from 'react';

import { Dialog } from '@mui/material';

import Uploader, { UploadImage } from '@components/Uploader';

interface UploaderModalProps {
  open: boolean;
  onClose(): void;
  onFile(image: UploadImage): void;
}

const ALLOWED_FORMATS = ['image'];

function UploaderModal({
  open,
  onClose,
  onFile,
}: UploaderModalProps): JSX.Element {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <Uploader
        maxFilesCount={1}
        allowedFormat={ALLOWED_FORMATS}
        placeholder="Choose an image"
        onChange={(image) => onFile(image[0])}
      />
    </Dialog>
  );
}

export default UploaderModal;
