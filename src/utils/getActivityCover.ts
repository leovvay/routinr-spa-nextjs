import { Activity } from '@store/services/routines/activity.interface';
import { RoutineMedia } from '@store/services/routines';

/*
  This function is needed till all activities will have covers.
  To achieve it we should create a back-end migration to define cover for all which hasn't it.
 */
export default function getActivityCover(activity: Activity): RoutineMedia {
  const isDefaultCover = Number(activity.cover.id) === 0;

  if (isDefaultCover) {
    const someImageAttachment = activity.attachments.find(
      (attachment) => attachment.resource_type === 'image'
    );

    return someImageAttachment || activity.cover;
  }
  return activity.cover;
}
