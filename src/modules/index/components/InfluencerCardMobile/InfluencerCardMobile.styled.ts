import styled from 'styled-components';

import Text from '@components/Text';
import LinkTo from '@components/LinkTo';

export const InfluencerCardMobileHandle = styled(Text)`
  width: 100%;
  color: var(--text-primary-color);
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const InfluencerCardMobileLink = styled(LinkTo)`
  flex-shrink: 0;
`;

export const InfluencerCardMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 65px;
`;
