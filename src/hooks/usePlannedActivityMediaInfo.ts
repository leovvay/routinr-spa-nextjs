import { useMemo } from 'react';

import { getVideoThumbnail } from '@utils';
import { PlannedActivity } from '@store/services/plan/planned-activity.interface';

const playableTypes = ['video', 'audio'];

interface SingleVideo {
  type: 'youtube' | 'video';
  url: string;
}

export interface Attachment {
  url: string;
  previewUrl: string;
  type: 'video' | 'image' | 'youtube';
}

interface PlannedActivityCoverInfo {
  isVideoCover: boolean;
  hasVideo: boolean;
  isSingleVideo: boolean;
  singleVideo: SingleVideo | undefined;
  attachments: Attachment[];
}

export default function usePlannedActivityMediaInfo(
  plannedActivity?: PlannedActivity
): PlannedActivityCoverInfo {
  const isVideoCover =
    plannedActivity?.activity.cover.resource_type === 'video';

  const hasYoutube = Boolean(plannedActivity?.activity.youtubeUrl);
  const singleVideoAttachment =
    plannedActivity?.activity.attachments.length === 1 &&
    plannedActivity?.activity.attachments[0].resource_type === 'video';

  const hasVideo = useMemo(() => {
    if (plannedActivity) {
      return (
        hasYoutube ||
        isVideoCover ||
        plannedActivity.activity.attachments.some((attachment) =>
          playableTypes.includes(attachment.resource_type)
        )
      );
    }
    return false;
  }, [hasYoutube, isVideoCover, plannedActivity]);

  const isSingleVideo = useMemo(() => {
    const onlyVideoCover =
      isVideoCover && !hasYoutube && !singleVideoAttachment;
    const onlyYoutube = !isVideoCover && hasYoutube && !singleVideoAttachment;
    const onlyVideoAttachment =
      !isVideoCover && !hasYoutube && singleVideoAttachment;

    return hasVideo && (onlyVideoCover || onlyYoutube || onlyVideoAttachment);
  }, [hasVideo, hasYoutube, isVideoCover, singleVideoAttachment]);

  const singleVideo = useMemo<SingleVideo | undefined>(() => {
    if (isSingleVideo) {
      if (hasYoutube)
        return {
          type: 'youtube',
          url: plannedActivity?.activity.youtubeUrl as string,
        };
      if (singleVideoAttachment)
        return {
          type: 'video',
          url: plannedActivity?.activity.attachments[0].url as string,
        };
      return {
        type: 'video',
        url: plannedActivity?.activity.cover.url as string,
      };
    }

    return undefined;
  }, [hasYoutube, isSingleVideo, plannedActivity, singleVideoAttachment]);

  const attachments = useMemo(() => {
    const additional: Attachment[] = [];
    if (isVideoCover && plannedActivity)
      additional.push({
        url: plannedActivity.activity.cover.url,
        previewUrl: plannedActivity.activity.cover.previewUrl,
        type: 'video',
      });

    if (hasYoutube && plannedActivity)
      additional.push({
        url: plannedActivity.activity.youtubeUrl,
        previewUrl: getVideoThumbnail(plannedActivity.activity.youtubeUrl),
        type: 'youtube',
      });

    return (
      plannedActivity?.activity.attachments
        .map<Attachment>(
          ({ url, previewUrl, resource_type }) =>
            ({
              url,
              previewUrl,
              type: resource_type,
            } as Attachment)
        )
        .concat(additional) ?? []
    );
  }, [hasYoutube, isVideoCover, plannedActivity]);

  return {
    hasVideo,
    isVideoCover,
    isSingleVideo,
    singleVideo,
    attachments,
  };
}
