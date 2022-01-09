import { RoutineMedia } from '@store/services/routines/routines.interface';
import {
  MediaUpload,
  UpdateEntityCover,
} from '@store/services/common/common.interface';

export interface Activity {
  id: number;
  description: string;
  endTime: string;
  startTime: string;
  title: string;
  youtubeUrl: string;
  routineId: number;

  cover: RoutineMedia;
  attachments: RoutineMedia[];
}

export interface CreateActivityInput
  extends Omit<Activity, 'id' | 'cover' | 'attachments'> {
  dayId: number;
  attachments: MediaUpload[];
}
export interface UpdateActivityInput extends CreateActivityInput {
  id: Activity['id'];
  mediaToRemove?: MediaUpload[];
}

export interface UpdateActivityCover extends UpdateEntityCover {
  activityId: number;
}

export interface CreateActivityResponse {
  createActivity: Pick<Activity, 'id'>;
}

export interface UpdateActivityResponse {
  updateActivity: Pick<Activity, 'id'>;
}

export interface DeleteActivityResponse {
  deleteActivity: Pick<Activity, 'id'>;
}

export interface UpdateActivityCoverResponse {
  changeActivityCover: Pick<Activity, 'id'>;
}
