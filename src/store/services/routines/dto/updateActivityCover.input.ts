import { UpdateActivityCover as IUpdateActivityCover } from '@store/services/routines/activity.interface';
import { UploadImage } from '@components/Uploader';
import UpdateEntityCover from '@store/services/common/dto/updateEntityCover.input';

class UpdateActivityCover
  extends UpdateEntityCover
  implements IUpdateActivityCover
{
  activityId: number;

  constructor(updateCoverData: {
    activityId: number;
    prevCover: UploadImage;
    newCover?: UploadImage;
  }) {
    super(updateCoverData);

    this.activityId = Number(updateCoverData.activityId);
  }
}

export default UpdateActivityCover;
