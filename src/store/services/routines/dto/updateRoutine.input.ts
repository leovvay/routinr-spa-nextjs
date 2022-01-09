import CreateRoutineInput from '@store/services/routines/dto/createRoutine.input';
import MediaInput from '@store/services/common/dto/media.input';
import { Routine } from '@store/services/routines';
import { MediaToRemove } from '@store/services/common/common.interface';
import MediaToRemoveInput from '@store/services/common/dto/media-to-remove.input';
import {
  MediaAndAttachmentsForm,
  OverviewForm,
  PublishForm,
} from '@components/RoutineBuilder/RoutineBuilder.types';

class UpdateRoutineInput extends CreateRoutineInput {
  id: number;

  cover?: MediaInput;

  promoVideo?: MediaInput;

  youtubeUrl?: string;

  isPrivate?: boolean;

  isFree?: boolean;

  isComplete?: boolean;

  isPublished?: boolean;

  price?: number;

  daysOrder?: number[];

  attachments: MediaInput[];

  supports: MediaInput[];

  mediaToRemove?: MediaToRemove[];

  constructor(
    routineData: Partial<OverviewForm> &
      Partial<MediaAndAttachmentsForm> &
      Partial<PublishForm> &
      Partial<Pick<Routine, 'isComplete' | 'isPublished'>> & {
        daysOrder?: number[];
      } & Pick<Routine, 'id'>
  ) {
    super(routineData);

    this.id = routineData.id;
    this.youtubeUrl = routineData.youtubeUrl;

    this.isFree = routineData.isFree;
    this.isPrivate = routineData.isPrivate;
    this.isComplete = routineData.isComplete;
    this.isPublished = routineData.isPublished;
    this.price = routineData.price?.value;

    this.daysOrder = routineData.daysOrder;

    this.cover = routineData.cover
      ? new MediaInput(routineData.cover)
      : undefined;

    this.promoVideo = routineData.promoVideo
      ? new MediaInput(routineData.promoVideo)
      : undefined;

    this.attachments =
      routineData.attachments?.map((media) => new MediaInput(media)) ?? [];

    this.supports =
      routineData.supports?.map((media) => new MediaInput(media)) ?? [];

    this.mediaToRemove =
      routineData.mediaToRemove?.map(
        (media) => new MediaToRemoveInput(media)
      ) ?? [];
  }
}

export default UpdateRoutineInput;
