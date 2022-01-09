import MediaInput from '@store/services/common/dto/media.input';
import CreateActivityInput from '@store/services/routines/dto/createActivity.input';
import { ActivityForm } from '@components/CreatorModals/AddActivityModal/AddActivityModal';
import { Activity } from '@store/services/routines/activity.interface';
import { UploadImage } from '@components/Uploader';
import MediaToRemoveInput from '@store/services/common/dto/media-to-remove.input';

class UpdateActivity extends CreateActivityInput {
  id: number;

  mediaToRemove?: MediaInput[];

  constructor(
    activityData: ActivityForm &
      Pick<Activity, 'id' | 'routineId'> & {
        dayId: number;
        mediaToRemove?: UploadImage[];
      }
  ) {
    super(activityData);

    this.id = activityData.id;

    this.mediaToRemove =
      activityData.mediaToRemove?.map(
        (media) => new MediaToRemoveInput(media)
      ) ?? [];
  }
}

export default UpdateActivity;
