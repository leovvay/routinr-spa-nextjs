import {
  CloudinaryMedia,
  Gallery,
} from '@store/services/types/media.interface';
import { UnsplashUpload } from '@store/services/types/unsplash.interface';
import { UploadImage } from '@components/Uploader';

export interface UploaderProps {
  currentFiles?: UploadImage[];
  onChange(image: UploadImage[]): void;
  handleRemove?(image: UploadImage): void;
  handleCoverChange?(image: UploadImage, isNew?: boolean): void;
  maxFilesCount?: number;
  allowedFormat?: string[];
  invalid?: boolean;
  error?: string;
  placeholder?: string;
  justUpload?: boolean;
  withoutCover?: boolean;
}

interface UploadWithPreview {
  previewUrl: string;
}

export type UnsplashWithPreviewUpload = UnsplashUpload & UploadWithPreview;
export type GalleryWithPreviewUpload = Gallery & UploadWithPreview;
export type CloudinaryWithPreviewUpload = CloudinaryMedia & UploadWithPreview;

export type UploadType = 'cloudinary' | 'unsplash' | 'gallery';
