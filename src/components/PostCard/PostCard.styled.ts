import styled from 'styled-components';

import Text from '@components/Text';

export const PostCardContainer = styled.div`
  width: 100%;
`;

export const PostCardCover = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  margin-bottom: 10px;
`;

export const PostCardLocked = styled(PostCardCover)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PostCardLockedText = styled(Text)`
  color: var(--white);
  opacity: 0.7;
`;
