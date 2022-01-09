import styled from 'styled-components';

import Text from '@components/Text';
import LinkTo from '@components/LinkTo';
import Button from '@components/Button';

export const ProfilePageMobileContainer = styled.div`
  padding: 0 20px;
`;

export const ProfilePageMobileSection = styled.section`
  padding: 20px 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--main-border-color);
  }
`;

export const ProfilePageMobileInfluencer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfilePageMobileHandle = styled(Text)`
  color: var(--text-primary-color);
`;

export const ProfilePageMobileList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
  margin: 15px 0;
`;

export const ProfilePageMobileListItem = styled.div`
  width: 70vw;
  flex-shrink: 0;
`;

export const ProfilePageMobileLoaderRef = styled.div`
  width: 1px;
`;

export const ProfilePageMobileLink = styled(LinkTo)`
  width: 100%;
`;

export const ProfilePageMobileViewMemberships = styled(Button)`
  position: sticky;
  margin: 20px auto;
  bottom: 30px;
  z-index: 5;
  background-color: var(--white);
  color: var(--text-primary-color);
`;
