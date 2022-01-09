import React from 'react';

import Avatar from '@components/Avatar';
import { User } from '@store/services/users';

import {
  InfluencerCardMobileContainer,
  InfluencerCardMobileHandle,
  InfluencerCardMobileLink,
} from './InfluencerCardMobile.styled';

interface InfluencerCardMobileProps {
  influencer: Pick<User, 'id' | 'avatar' | 'slug' | 'handle'>;
}
function InfluencerCardMobile({
  influencer,
}: InfluencerCardMobileProps): JSX.Element {
  return (
    <InfluencerCardMobileLink href={`/profile/${influencer.slug}`} blue>
      <InfluencerCardMobileContainer>
        <Avatar src={influencer.avatar} width={65} height={65} />
        <InfluencerCardMobileHandle size="validationCaption" weight={600}>
          @{influencer.handle}
        </InfluencerCardMobileHandle>
      </InfluencerCardMobileContainer>
    </InfluencerCardMobileLink>
  );
}

export default InfluencerCardMobile;
