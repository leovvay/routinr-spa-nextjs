import { UploadType } from '@components/Uploader/Uploader.types';
import CloudinaryInput from '@store/services/common/dto/cloudinary.input';

import { Paginated, PaginationArgs } from '../types/pagination.interface';
import { Gallery, GalleryUpload } from '../types/media.interface';
import { CloudinarySignature } from '../types/cloudinarySignature.interface';
import {
  UnsplashStock,
  UnsplashStockPaginated,
  UnsplashUpload,
} from '../types/unsplash.interface';

export interface GetCloudinarySignatureResponse {
  uploadSignature: CloudinarySignature;
}

export interface GetRandomUnsplashResponse {
  randomUnsplash: UnsplashStock[];
}

export interface GetUnsplashResponse {
  getUnsplash: UnsplashStockPaginated;
}

export type PaginatedGalleryModel = Paginated<Gallery>;

export interface GetMyGalleryResponse {
  myGallery: PaginatedGalleryModel;
}

export interface MyGalleryFindOptions extends PaginationArgs {
  allowedFormats: string[];
  filename?: string;
}

export interface MediaUpload {
  isCover: boolean;
  cloudinary?: CloudinaryInput;
  unsplash?: UnsplashUpload;
  gallery?: GalleryUpload;
  type: UploadType;
}

export interface MediaToRemove {
  isCover: boolean;
  unsplashId?: number;
  galleryId?: number;
  type: UploadType;
}

export interface MediaCover {
  id: number;
  url: string;
  previewUrl: string;
  __typename: 'Gallery' | 'Unsplash';
  resource_type: 'image' | 'video' | 'audio' | 'raw';
}

export interface UpdateEntityCover {
  prevGalleryCoverId?: number;
  prevUnsplashCoverId?: number;
  galleryCoverId?: number;
  unsplashCoverId?: number;
}
