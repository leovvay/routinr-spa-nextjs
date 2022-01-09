import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import Image from '@components/Image';
import LinkTo from '@components/LinkTo';
import YouTubeVideo from '@components/YouTubeVideo';

import {
  RoutinePageButton,
  SectionTitle,
} from '@modules/routines/[slug]/index.styled';

export const RoutineDesktopMainContainer = styled.div`
  padding: 60px;
`;

export const RoutineDesktopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RoutineDesktopLeft = styled.div`
  width: 57%;
`;

export const RoutineDesktopRight = styled.div`
  width: 40%;
`;

export const RoutineDesktopMedias = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 20vw;
  gap: 10px;
  margin-top: 10px;
`;

export const RoutineDesktopCover = styled.div`
  position: relative;
  width: 100%;
  max-height: 80vh;
  overflow: hidden;

  > span {
    position: unset !important;
  }

  img {
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export const RoutineDesktopSupportItem = styled.div`
  position: relative;
`;

export const RoutineDesktopMedia = styled(Image)`
  border-radius: 8px;
`;

export const RoutineDesktopSection = styled.section`
  margin-bottom: 50px;
`;

export const RoutineDesktopDownloadSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RoutineDesktopTagsSection = styled(RoutineDesktopSection)`
  padding-top: 50px;
  border-top: 1px solid var(--main-border-color);
`;

export const RoutineDesktopInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  padding: 6%;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--grey);

  position: sticky;
  top: 100px;
`;

export const RoutineDesktopStatistic = styled.div`
  display: flex;
  padding: 30px 0;
  align-items: center;
  justify-content: space-evenly;
`;

export const RoutineDesktopButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const RoutineDesktopActionButton = styled(RoutinePageButton)`
  width: 47%;
`;

export const RoutineDesktopShareButton = styled(RoutinePageButton)`
  flex-grow: 1;
`;

export const RoutineDesktopTitle = styled(SectionTitle)`
  margin-top: 10px;
`;

export const RoutineDesktopRoutineLink = styled(LinkTo)`
  display: flex;
  flex-shrink: 0;
`;

export const RoutineDesktopSwiper = styled(Swiper)`
  margin-top: 16px;

  .swiper-slide {
    width: 30%;
  }
`;

export const RoutineDesktopYoutube = styled(YouTubeVideo)`
  border-radius: 8px;
  overflow: hidden;
`;

export const RoutineDesktopVideo = styled.video`
  width: 100% !important;
  height: auto !important;
`;
