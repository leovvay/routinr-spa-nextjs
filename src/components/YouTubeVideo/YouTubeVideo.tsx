import React, { memo } from 'react';

import { youtubeValidator } from '@utils';

import { YoutubeVideo, YoutubeWrapper } from './YouTubeVideo.styled';

interface YouTubeVideoProps {
  url: string;
  className?: string;
}

function YouTubeVideo({ url, className }: YouTubeVideoProps): JSX.Element {
  const { isValid, embedUrl } = youtubeValidator(url);

  return (isValid && embedUrl && (
    <YoutubeWrapper className={className}>
      <YoutubeVideo
        src={embedUrl}
        title="YouTube"
        frameBorder="0"
        allowFullScreen
      />
    </YoutubeWrapper>
  )) as JSX.Element;
}

YouTubeVideo.defaultProps = {
  className: undefined,
};

export default memo(YouTubeVideo);
