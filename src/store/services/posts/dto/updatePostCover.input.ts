import { UploadImage } from '@components/Uploader';
import UpdateEntityCover from '@store/services/common/dto/updateEntityCover.input';

class UpdatePostCover extends UpdateEntityCover {
  postId: number;

  constructor(updateCoverData: {
    postId: number;
    prevCover: UploadImage;
    newCover?: UploadImage;
  }) {
    super(updateCoverData);

    this.postId = Number(updateCoverData.postId);
  }
}

export default UpdatePostCover;
