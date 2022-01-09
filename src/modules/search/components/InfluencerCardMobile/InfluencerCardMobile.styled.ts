import styled from 'styled-components';

import Image from '@components/Image';
import Text from '@components/Text';

export const InfluencerCardMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfluencerCardMobileAvatarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 85px;
`;

export const InfluencerCardMobileAvatar = styled(Image)`
  border-radius: 10px;
`;

export const InfluencerCardMobileHandle = styled(Text)`
  color: var(--text-primary-color);
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfluencerCardMobileFollowersInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
