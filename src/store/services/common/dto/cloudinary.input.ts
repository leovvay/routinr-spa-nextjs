import { CloudinaryMedia } from '@store/services/types/media.interface';

class CloudinaryInput {
  id?: string;

  url: string;

  type?: string;

  bytes?: number;

  format?: string;

  api_key?: string;

  secure_url: string;

  thumbnail_url?: string;

  routinr_type?: string;

  resource_type: 'video' | 'image' | 'audio' | 'raw';

  full_file_name?: string;

  original_filename?: string;

  original_extension?: string;

  constructor(mediaUpload: CloudinaryMedia) {
    this.id = mediaUpload.id;
    this.url = mediaUpload.url;
    this.type = mediaUpload.type;
    this.bytes = mediaUpload.bytes;
    this.format = mediaUpload.format;
    this.api_key = mediaUpload.api_key;
    this.secure_url = mediaUpload.secure_url;
    this.thumbnail_url = mediaUpload.thumbnail_url;
    this.routinr_type = mediaUpload.resource_type;
    this.resource_type = mediaUpload.resource_type;
    this.full_file_name = mediaUpload.full_file_name;
    this.original_filename = mediaUpload.original_filename;
    this.original_extension = mediaUpload.original_extension;
  }
}

export default CloudinaryInput;
