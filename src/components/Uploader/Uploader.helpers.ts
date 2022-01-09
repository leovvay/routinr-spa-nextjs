import {
  CloudinaryWithPreviewUpload,
  GalleryWithPreviewUpload,
  UnsplashWithPreviewUpload,
  UploadType,
} from '@components/Uploader/Uploader.types';
import { MediaCover } from '@store/services/common/common.interface';

export default class UploadImages {
  isCover: boolean;

  type: UploadType;

  info:
    | CloudinaryWithPreviewUpload
    | UnsplashWithPreviewUpload
    | GalleryWithPreviewUpload;

  constructor(info: MediaCover, isCover = false) {
    this.isCover = isCover;
    this.info = {
      id: info.id,
      url: info.url,
      previewUrl: info.previewUrl,
    };
    // eslint-disable-next-line no-underscore-dangle
    this.type = info.__typename.toLowerCase() as UploadType;
  }
}
