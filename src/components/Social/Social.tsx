import React from 'react';

import { useIsMobileVersion } from '@hooks';
import { Socials } from '@store/services/users';
import Image from '@components/Image';

const socialHash = {
  instagram: '/social_instagram.svg',
  facebook: '/social_facebook.svg',
  youtube: '/social_youtube.svg',
  twitter: '/social_twitter.svg',
};

interface SocialProps {
  social: Socials;
  width?: number;
  height?: number;
}

function Social({ social, width, height }: SocialProps): JSX.Element {
  const isMobile = useIsMobileVersion();
  const size = isMobile ? 40 : 48;

  return (
    <Image
      src={socialHash[social]}
      width={width || size}
      height={height || size}
    />
  );
}

Social.defaultProps = {
  width: 0,
  height: 0,
};

export default Social;
