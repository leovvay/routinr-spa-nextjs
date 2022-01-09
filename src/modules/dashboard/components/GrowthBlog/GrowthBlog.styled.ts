import styled from 'styled-components';

import LinkTo from '@components/LinkTo';
import Card from '@components/Card';

export const GrowthBlogCard = styled(Card)`
  max-height: 600px;
`;

export const GrowthBlogSection = styled.section`
  position: relative;
  padding-bottom: 24px;
  margin-bottom: 24px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(112, 112, 112, 0.1);
  }
`;

export const GrowthBlogSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Link = styled(LinkTo)`
  font-weight: 700;
`;

export const PostLink = styled(LinkTo)`
  width: 100%;
  height: 130px;
  position: relative;

  border-radius: 8px;
  overflow: hidden;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
