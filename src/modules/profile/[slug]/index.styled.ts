import styled, { css } from 'styled-components';

import Avatar from '@components/Avatar';
import Text from '@components/Text';
import Button from '@components/Button/Button';

export const InfluencerPageBanner = styled.section<{ src: string }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 50px;
  position: relative;

  ${({ src }) => css`
    background: url(${src}) no-repeat 50% 50% / cover;
  `}
`;

export const InfluencerPageStatisticSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: var(--white);
`;

export const InfluencerPageStatistic = styled.div`
  display: flex;
`;

export const InfluencerPageMainContainer = styled.div`
  padding: 68px;
`;

export const InfluencerPageMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color: var(--white);
`;

export const InfluencerPageAvatar = styled(Avatar)`
  border: 3px solid var(--white) !important;
`;

export const InfluencerPageNames = styled(Text)`
  color: var(--white);
`;

export const InfluencerPageSectionTitle = styled(Text).attrs({
  size: 'h3',
  weight: 700,
})`
  display: block;
`;

export const InfluencerPageHandle = styled(InfluencerPageSectionTitle)`
  color: var(--text-primary-color);
  display: inline;
`;

export const InfluencerPageAboutTitle = styled(InfluencerPageSectionTitle)`
  margin-bottom: 25px;
`;

export const InfluencerPageSection = styled.section`
  margin-bottom: 50px;
`;

export const InfluencerPageSubscribeButton = styled(Button)`
  width: 196px;
  position: fixed;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);

  > label:first-child {
    gap: 10px;
  }
`;
