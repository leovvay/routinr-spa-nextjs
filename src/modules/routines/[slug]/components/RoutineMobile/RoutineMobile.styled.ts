import styled from 'styled-components';

import ButtonBackMobile from '@components/ButtonBackMobile';
import DownloadCard from '@components/DownloadCard';
import Touchable from '@components/Touchable';

import { SectionTitle } from '@modules/routines/[slug]/index.styled';

export const RoutineMobileContainer = styled.div`
  position: relative;
`;

export const RoutineMobileContent = styled.div`
  padding: 20px;
`;

export const RoutineMobileSection = styled.section`
  margin-bottom: 40px;
`;

export const RoutineMobilePreviewTitle = styled(SectionTitle)`
  padding-left: 20px;
`;

export const RoutineMobileCover = styled.div`
  width: 100%;
  height: 230px;

  position: relative;
`;

export const RoutineMobileSupport = styled(Touchable)`
  width: 106px;
  height: 106px;
  border-radius: 8px;
  overflow: hidden;

  flex-shrink: 0;
  position: relative;
`;

export const RoutineMobileSupports = styled(RoutineMobileSection)`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  padding-bottom: 20px;
`;

export const RoutineMobileBackButton = styled(ButtonBackMobile)`
  position: absolute;
  top: 20px;
  z-index: 5;
  width: 50px;
  height: 50px;
`;

export const RoutineMobileStatistics = styled(RoutineMobileSection)`
  display: flex;
  justify-content: center;
`;

export const RoutineMobileDownloadCard = styled(DownloadCard)`
  width: 140px;
  height: 150px;
`;

export const RoutineMobileTags = styled(RoutineMobileSection)`
  padding: 25px 0;
  border-top: 1px solid var(--main-border-color);
`;

export const RoutineMobileButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  box-shadow: 0 -5px 8px 0.2px rgb(0 0 0 / 10%);
  position: sticky;
  bottom: 0;
  background-color: var(--white);
  z-index: 2;
`;
