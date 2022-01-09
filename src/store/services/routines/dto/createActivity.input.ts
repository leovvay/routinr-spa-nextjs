import MediaInput from '@store/services/common/dto/media.input';
import { CreateActivityInput as ICreateActivityInput } from '@store/services/routines/activity.interface';
import { ActivityForm } from '@components/CreatorModals/AddActivityModal/AddActivityModal';

class CreateActivityInput implements ICreateActivityInput {
  dayId: number;

  routineId: number;

  description: string;

  endTime: string;

  startTime: string;

  title: string;

  youtubeUrl: string;

  attachments: MediaInput[];

  constructor(
    activityData: ActivityForm & { dayId: number; routineId: number }
  ) {
    this.dayId = activityData.dayId;
    this.routineId = activityData.routineId;
    this.description = activityData.description;
    this.endTime = activityData.endTime;
    this.startTime = activityData.startTime;
    this.title = activityData.title;
    this.youtubeUrl = activityData.youtubeUrl;

    this.attachments =
      activityData.attachments?.map((media) => new MediaInput(media)) ?? [];
  }
}

export default CreateActivityInput;
