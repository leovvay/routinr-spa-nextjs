import { UploadImage } from '@components/Uploader';

class UpdateEntityCover {
  galleryCoverId?: number;

  prevGalleryCoverId?: number;

  prevUnsplashCoverId?: number;

  unsplashCoverId?: number;

  constructor({
    prevCover,
    newCover,
  }: {
    prevCover: UploadImage;
    newCover?: UploadImage;
  }) {
    if (prevCover.type === 'gallery') {
      this.prevGalleryCoverId = Number(prevCover.info.id);
    } else {
      this.prevUnsplashCoverId = Number(prevCover.info.id);
    }
    if (newCover?.type === 'gallery') {
      this.galleryCoverId = Number(newCover.info.id);
    } else if (newCover?.type === 'unsplash') {
      this.unsplashCoverId = Number(newCover.info.id);
    }
  }
}

export default UpdateEntityCover;
