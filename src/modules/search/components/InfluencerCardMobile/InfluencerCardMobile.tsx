import React from 'react';

import Image from '@components/Image';
import { User } from '@store/services/users';
import { TextLight } from '@components/Text';

import {
  InfluencerCardMobileAvatar,
  InfluencerCardMobileAvatarContainer,
  InfluencerCardMobileContainer,
  InfluencerCardMobileFollowersInfo,
  InfluencerCardMobileHandle,
} from './InfluencerCardMobile.styled';

type InfluencerCardMobileProps = Pick<User, 'avatar' | 'handle'> & {
  followersCount: number;
};

function InfluencerCardMobile({
  avatar,
  handle,
  followersCount,
}: InfluencerCardMobileProps): JSX.Element {
  return (
    <InfluencerCardMobileContainer>
      <InfluencerCardMobileAvatarContainer>
        <InfluencerCardMobileAvatar
          src={avatar}
          layout="fill"
          objectFit="cover"
        />
      </InfluencerCardMobileAvatarContainer>
      <InfluencerCardMobileHandle size="bodySmallBold">
        @{handle}
      </InfluencerCardMobileHandle>
      <InfluencerCardMobileFollowersInfo>
        <Image
          src="/followers.svg"
          alt="follower-count"
          width={17}
          height={17}
        />
        <TextLight size="bodyCaption">{followersCount}</TextLight>
      </InfluencerCardMobileFollowersInfo>
    </InfluencerCardMobileContainer>
  );
}

export default InfluencerCardMobile;
