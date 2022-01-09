import { CreateRoutineData, Routine } from '@store/services/routines';
import { SelectOption } from '@components/Select';
import { UploadImage } from '@components/Uploader';

export interface OverviewForm extends Omit<CreateRoutineData, 'categories'> {
  categories: SelectOption<number>[];
}

export interface MediaAndAttachmentsForm {
  cover: UploadImage;
  promoVideo: UploadImage;
  youtubeUrl: string;
  supports: UploadImage[];
  attachments: UploadImage[];

  mediaToRemove?: UploadImage[];
}

export interface PublishForm extends Pick<Routine, 'isFree' | 'isPrivate'> {
  price: SelectOption<number>;
}
