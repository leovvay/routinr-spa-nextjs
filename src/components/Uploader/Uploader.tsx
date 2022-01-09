import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { FileInfo } from '@globalTypes';
import { useCloudinaryWidget } from '@hooks';
import Button from '@components/Button';
import Text from '@components/Text';
import { UnsplashStock } from '@store/services/types/unsplash.interface';
import { UploadType } from '@components/Uploader/Uploader.types';
import {
  CloudinaryMedia,
  Gallery,
} from '@store/services/types/media.interface';

import SearchLibrary from './components/SearchLibrary';
import UploaderImage from './components/UploaderImage';
import UploadImage from './Uploader.helpers';
import { UploaderProps } from './Uploader.types';

import {
  UploaderContainer,
  UploaderContent,
  UploaderError,
  UploaderFooter,
  UploaderHeader,
} from './Uploader.styled';

function Uploader({
  onChange,
  allowedFormat,
  currentFiles,
  maxFilesCount = 10,
  invalid,
  error,
  placeholder,
  handleRemove,
  handleCoverChange,
  justUpload = false,
  withoutCover = false,
}: UploaderProps): JSX.Element {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [unsplashImages, setUnsplashImages] = useState<UploadImage[]>([]);
  const [galleryImages, setGalleryImages] = useState<UploadImage[]>([]);
  const [cloudinaryImages, setCloudinaryImages] = useState<UploadImage[]>([]);

  const libraryImages = useMemo(
    () => unsplashImages.concat(galleryImages),
    [galleryImages, unsplashImages]
  );

  const isLimitExceeded =
    (currentFiles?.length || 0) +
      libraryImages.length +
      cloudinaryImages.length >=
    maxFilesCount;

  const handleUpload = useCallback(
    (fileInfo: FileInfo) => {
      const newImage = {
        isCover: maxFilesCount === 1,
        info: {
          ...fileInfo,
          previewUrl: fileInfo.url.replace(/\.([^.]*)$/, '.jpg'),
        },
        type: 'cloudinary' as const,
      };

      setCloudinaryImages((prevImages) => prevImages.concat(newImage));
    },
    [maxFilesCount]
  );

  const openSearchLibrary = useCallback(() => {
    setIsSearchOpen(true);
  }, []);
  const closeSearchLibrary = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const handleUnsplash = useCallback(
    (image: UnsplashStock) => {
      setUnsplashImages((prevUnsplashImages) => {
        const imageIndex = prevUnsplashImages.findIndex(
          (prevUnsplashImage) => prevUnsplashImage.info.url === image.urls.full
        );

        if (imageIndex !== -1) {
          return prevUnsplashImages
            .slice(0, imageIndex)
            .concat(prevUnsplashImages.slice(imageIndex + 1));
        }

        return prevUnsplashImages.concat({
          isCover: maxFilesCount === 1,
          info: {
            unsplashId: image.id,
            previewUrl: image.urls.small,
            mediumUrl: image.urls.small,
            url: image.urls.full,
            userName: image.user.username,
            // previewUrl: image.urls.full.replace(/\.([^.]*)$/, '.jpg'),
          },
          type: 'unsplash' as const,
        });
      });
    },
    [maxFilesCount]
  );

  const handleGallery = useCallback(
    (image: Gallery) => {
      setGalleryImages((prevGalleryImages) => {
        const imageIndex = prevGalleryImages.findIndex(
          (prevGalleryImage) => prevGalleryImage.info.url === image.url
        );

        if (imageIndex !== -1) {
          return prevGalleryImages
            .slice(0, imageIndex)
            .concat(prevGalleryImages.slice(imageIndex + 1));
        }

        return prevGalleryImages.concat({
          isCover: maxFilesCount === 1,
          info: {
            id: image.id,
            url: image.url,
            previewUrl: image.url.replace(/\.([^.]*)$/, '.jpg'),
          },
          type: 'gallery' as const,
        });
      });
    },
    [maxFilesCount]
  );

  const setAllNotCover = useCallback(() => {
    setCloudinaryImages((images) =>
      images.map((image) => ({ ...image, isCover: false }))
    );
    setUnsplashImages((images) =>
      images.map((image) => ({ ...image, isCover: false }))
    );
    setGalleryImages((images) =>
      images.map((image) => ({ ...image, isCover: false }))
    );
  }, []);

  const onSetCover = useCallback(
    (type: UploadType, image: UploadImage, index: number) => {
      let setFunc = setGalleryImages;

      if (type === 'unsplash') setFunc = setUnsplashImages;
      else if (type === 'cloudinary') setFunc = setCloudinaryImages;

      return (isCover: boolean) => {
        setAllNotCover();
        setFunc((prevImages) =>
          prevImages.map((prevImage, prevImageIndex) => {
            if (index === prevImageIndex) return { ...prevImage, isCover };
            return prevImage;
          })
        );

        if (isCover && handleCoverChange) handleCoverChange(image, true);
      };
    },
    [handleCoverChange, setAllNotCover]
  );

  const onRemove = useCallback((type: UploadType, index: number) => {
    let setFunc = setGalleryImages;

    if (type === 'unsplash') setFunc = setUnsplashImages;
    else if (type === 'cloudinary') setFunc = setCloudinaryImages;

    return () =>
      setFunc((prevImages) =>
        prevImages.slice(0, index).concat(prevImages.slice(index + 1))
      );
  }, []);

  useEffect(() => {
    onChange(cloudinaryImages.concat(unsplashImages).concat(galleryImages));
  }, [cloudinaryImages, galleryImages, onChange, unsplashImages]);

  const { widget } = useCloudinaryWidget(
    handleUpload,
    allowedFormat,
    maxFilesCount
  );

  return (
    <UploaderContainer>
      <UploaderHeader>
        {currentFiles?.map((image) => (
          <UploaderImage
            key={image.info.url}
            src={image.info.previewUrl}
            type={(image.info as CloudinaryMedia).resource_type}
            original={image.info.url}
            isCover={image.isCover}
            onSetCover={() => {
              setAllNotCover();
              handleCoverChange?.(image);
            }}
            onRemove={() => handleRemove?.(image)}
            withoutCover={withoutCover}
          />
        ))}
        {cloudinaryImages.map((image, index) => (
          <UploaderImage
            key={image.info.url}
            src={image.info.previewUrl}
            type={(image.info as CloudinaryMedia).resource_type}
            original={image.info.url}
            isCover={image.isCover}
            onSetCover={onSetCover('cloudinary', image, index)}
            onRemove={onRemove('cloudinary', index)}
            withoutCover={withoutCover}
          />
        ))}
        {unsplashImages.map((image, index) => (
          <UploaderImage
            key={image.info.url}
            original={image.info.url}
            src={image.info.previewUrl}
            isCover={image.isCover}
            onSetCover={onSetCover('unsplash', image, index)}
            onRemove={onRemove('unsplash', index)}
            withoutCover={withoutCover}
          />
        ))}
        {galleryImages.map((image, index) => (
          <UploaderImage
            key={image.info.url}
            original={image.info.url}
            src={image.info.previewUrl}
            isCover={image.isCover}
            onSetCover={onSetCover('gallery', image, index)}
            onRemove={onRemove('gallery', index)}
            withoutCover={withoutCover}
          />
        ))}
      </UploaderHeader>
      <UploaderContent>
        <Button onClick={widget?.open} disabled={isLimitExceeded}>
          Upload files
        </Button>
        {!justUpload && (
          <Button
            onClick={openSearchLibrary}
            variant="outlined"
            disabled={isLimitExceeded}
          >
            Search Library
          </Button>
        )}
      </UploaderContent>
      <UploaderFooter>
        <Text>{placeholder || 'Upload photos, videos or audio'}</Text>
      </UploaderFooter>
      {invalid && error && <UploaderError>{error}</UploaderError>}

      {!justUpload && (
        <SearchLibrary
          isOpen={isSearchOpen}
          isLimitExceeded={isLimitExceeded}
          onClose={closeSearchLibrary}
          images={libraryImages}
          handleUnsplash={handleUnsplash}
          handleGallery={handleGallery}
          allowedFormats={allowedFormat}
        />
      )}
    </UploaderContainer>
  );
}

export default memo(Uploader);
