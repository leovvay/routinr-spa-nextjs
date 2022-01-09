import { MediaToRemove } from '@store/services/common/common.interface';
import { UploadImage, UploadType } from '@components/Uploader';

export default class MediaToRemoveInput implements MediaToRemove {
  galleryId?: number;

  unsplashId?: number;

  isCover: boolean;

  type: UploadType;

  constructor({ isCover, type, info }: UploadImage) {
    const { previewUrl, ...uploadInfo } = info;

    this.isCover = isCover;

    this.unsplashId = type === 'unsplash' ? Number(uploadInfo.id) : undefined;
    this.galleryId = type === 'gallery' ? Number(uploadInfo.id) : undefined;
    this.type = type;
  }
}
