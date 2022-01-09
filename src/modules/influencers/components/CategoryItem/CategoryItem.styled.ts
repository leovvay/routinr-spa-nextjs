import styled from 'styled-components';

import LinkTo from '@components/LinkTo';

export const CategoryItemContainer = styled(LinkTo)`
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`;

export const CategoryImageContainer = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    height: 250px;
  }
`;
