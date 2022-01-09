import { useCallback, useMemo } from 'react';
import { useUnmount } from 'react-use';

import { CloudinaryResultCallback, FileInfo, Widget } from '@globalTypes';
import { useGetCloudinarySignatureQuery } from '@store/services/common';

interface CloudinaryWidget {
  widget: Widget | null;
}

const useCloudinaryWidget = (
  onUpload: (fileInfo: FileInfo) => void,
  allowedFormats?: string[],
  maxFilesCount?: number
): CloudinaryWidget => {
  const { data } = useGetCloudinarySignatureQuery();

  const processResults = useCallback<CloudinaryResultCallback>(
    (error, result) => {
      if (!error && result && result.event === 'success') {
        onUpload(result.info);
      }
    },
    [onUpload]
  );

  const widget = useMemo(() => {
    if (data) {
      const options = {
        cloudName: 'routinr',
        apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
        uploadSignatureTimestamp: data.timestamp,
        uploadSignature: data.signature,
        folder: 'routinr',
        cropping: false,
        clientAllowedFormats: allowedFormats,
        maxFiles: maxFilesCount,
      };

      return window.cloudinary.createUploadWidget(options, processResults);
    }
    return null;
  }, [allowedFormats, data, maxFilesCount, processResults]);

  useUnmount(() => widget?.destroy());

  return { widget };
};

export default useCloudinaryWidget;
