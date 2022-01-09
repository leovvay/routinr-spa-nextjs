import { MediaUpload } from '@store/services/common/common.interface';
import {
  CloudinaryMedia,
  Gallery,
  GalleryUpload,
} from '@store/services/types/media.interface';
import { UnsplashUpload } from '@store/services/types/unsplash.interface';
import { UploadImage, UploadType } from '@components/Uploader';
import CloudinaryInput from '@store/services/common/dto/cloudinary.input';

export default class MediaInput implements MediaUpload {
  cloudinary?: CloudinaryInput;

  gallery?: GalleryUpload;

  isCover: boolean;

  type: UploadType;

  unsplash?: UnsplashUpload;

  constructor({ isCover, type, info }: UploadImage) {
    const { previewUrl, ...uploadInfo } = info;

    this.isCover = isCover;

    this.cloudinary =
      type === 'cloudinary'
        ? new CloudinaryInput(uploadInfo as CloudinaryMedia)
        : undefined;
    this.unsplash =
      type === 'unsplash' ? (uploadInfo as UnsplashUpload) : undefined;
    this.gallery =
      type === 'gallery' ? { id: (uploadInfo as Gallery).id } : undefined;
    this.type = type;
  }
}
