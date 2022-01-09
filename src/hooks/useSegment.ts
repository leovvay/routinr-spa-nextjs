import { useEffect } from 'react';

const trackAttachmentsDownload = (routineName: string, userId: number) =>
  window.analytics.track('Routine attachment Downloaded', {
    routine_name: routineName,
    user: userId,
  });

const reportRoutine = (routineName: string, userId?: number) =>
  window.analytics.track("User clicks 'flag' Routine", {
    routine_name: routineName,
    user: userId,
  });

const reportPost = (postName: string, userId?: number) =>
  window.analytics.track("User clicks 'flag' Post", {
    post_name: postName,
    user: userId,
  });

const reportInfluencer = (influencerName: string, userId?: number) =>
  window.analytics.track("User clicks 'flag' Influencer", {
    influencer_name: influencerName,
    user: userId,
  });

const trackEmbedClick = () => window.analytics.track('Clicked Embed Button');

const trackShare = (
  type: 'user' | 'routine' | 'post',
  target: 'facebook' | 'twitter' | 'linkedIn',
  title: string
) => window.analytics.track('share', { type, target, title });

const trackUnlockPost = (postName: string) =>
  window.analytics.track('User clicked unlock post', { postName });

export default function useSegment() {
  return {
    trackAttachmentsDownload,
    reportRoutine,
    reportPost,
    trackEmbedClick,
    trackShare,
    trackUnlockPost,
    reportInfluencer,
  };
}

export const useSegmentPageEvent = (): void => {
  useEffect(() => {
    window.analytics.page();
  }, []);
};
