import styled from 'styled-components';

import Text from '@components/Text';
import Button from '@components/Button';
import LinkTo from '@components/LinkTo';

import {
  ContentInfoDialogContentSection,
  ContentInfoDrawerHeader,
} from '../ContentInfo.styled';

export const InfluencerDrawerHeader = styled(ContentInfoDrawerHeader)`
  background-color: var(--primary-color);
`;

export const InfluencerDrawerInfluencerInfo = styled.div`
  display: flex;
`;

export const InfluencerDrawerHandle = styled(Text)`
  color: var(--text-primary-color);
`;

export const InfluencerDrawerMoreButton = styled(LinkTo)`
  display: flex;
  justify-content: space-between;
`;

export const InfluencerDrawerSubscribeButton = styled(Button)`
  border-radius: 23px;
  padding: 10px 45px;

  label {
    display: flex;
    gap: 5px;
  }
`;

export const InfluencerDrawerSubscribeSection = styled(
  ContentInfoDialogContentSection
)`
  display: flex;
  justify-content: center;
`;
