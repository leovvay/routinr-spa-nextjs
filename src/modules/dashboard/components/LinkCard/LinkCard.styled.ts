import styled from 'styled-components';

import Card from '@components/Card';
import Image from '@components/Image';
import LinkTo from '@components/LinkTo';

export const LinkCardContainer = styled(LinkTo)`
  width: 100%;
  margin-bottom: 10px;
`;
export const LinkCardCard = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 24px 40px;
`;

export const LinkCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  & > div {
    flex-shrink: 0;
  }
`;

export const Button = styled(Image)``;
