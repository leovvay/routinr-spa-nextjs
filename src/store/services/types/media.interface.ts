export interface CloudinaryMedia {
  id: string;
  url: string;
  etag?: string;
  type?: string;
  bytes?: number;
  width?: number;
  format?: string;
  height?: number;
  api_key?: string;
  version?: number;
  asset_id?: string;
  public_id?: string;
  signature?: string;
  created_at?: string;
  secure_url: string;
  thumbnail_url?: string;
  version_id?: string;
  placeholder?: boolean;
  routinr_type?: string;
  resource_type: 'video' | 'image' | 'audio' | 'raw';
  full_file_name?: string;
  original_filename?: string;
  original_extension?: string;
}

export interface Unsplash {
  mediumUrl: string;
  unsplashId: string;
  url: string;
  userName: string;
  id?: number;
}

export type Media = {
  url: string;
};

export interface Gallery {
  id: number;
  filename?: string;
  url: string;
  previewUrl: string;
}

export type GalleryUpload = Pick<Gallery, 'id'>;
