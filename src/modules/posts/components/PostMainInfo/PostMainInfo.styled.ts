import styled from 'styled-components';

import LinkTo from '@components/LinkTo';
import Text from '@components/Text';
import ButtonShare from '@components/ButtonShare';

export const PostMainInfoContainer = styled.div`
  height: 598px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

export const PostMainInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  padding: 20px 20px 20px 60px;
  background-color: var(--white);
  overflow: hidden;
`;

export const PostCoverContainer = styled.div`
  position: relative;
`;

export const PostMainInfoCreatorLink = styled(LinkTo)``;

export const PostMainInfoPostTitle = styled(Text)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const PostMainInfoButtonShare = styled(ButtonShare)`
  position: absolute;
  top: 39px;
  right: 30px;
`;
