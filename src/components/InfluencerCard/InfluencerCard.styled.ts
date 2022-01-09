import styled from 'styled-components';

import Image from '@components/Image';
import Card from '@components/Card';
import Text from '@components/Text';
import LinkTo from '@components/LinkTo';

export const InfluencerCardContainer = styled(Card).attrs({
  noPadding: true,
})`
  display: flex;
  width: 100%;
  height: 75px;
  box-shadow: 0 3px 10px var(--main-card-shadow-color);

  background-color: var(--main-card-color);
  border-radius: 4px;
  overflow: hidden;
`;

export const InfluencerCardAvatarContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 105px;
  height: 100%;
`;

export const InfluencerCardAvatar = styled(Image)`
  border-radius: 4px;
`;

export const InfluencerCardContent = styled.div`
  padding: 5px 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfluencerCardDisplayName = styled(Text)`
  color: var(--text-primary-color);
  word-break: break-word;
`;

export const InfluencerCardFollowers = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  *:last-child {
    margin-left: 3px;
  }
`;

export const InfluencerCardLink = styled(LinkTo)`
  width: 100%;
  max-width: 300px;
`;

export const InfluencerCardWrapper = styled.div`
  width: 100%;
  max-width: 300px;
`;
