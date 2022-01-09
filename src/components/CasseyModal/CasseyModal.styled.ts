import { Swiper } from 'swiper/react';
import { Button, Stack, DialogContent } from '@mui/material';
import styled, { css } from 'styled-components';

interface ContentContainerProps {
  marginLeft?: string;
  marginTop?: number;
  marginRight?: string;
  width?: number;
  height?: number;
  position?: string;
  flex?: string;
  right?: string;
  gap?: number;
  padding?: string;
  isMobile?: boolean;
}

export const ContentContainer = styled.div<ContentContainerProps>`
  ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}
  display: flex;
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : `height: 100%;`}
  ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
  flex-direction: column;
  justify-content: center;
  color: var(--text-landing-white);
  align-items: flex-start;
  padding: ${({ isMobile }) => (isMobile ? '48px 24px;' : '48px;')}
    ${({ width }) =>
      width &&
      css`
        width: ${width}%;
      `}
    ${({ marginLeft }) =>
      marginLeft &&
      css`
        margin-left: ${marginLeft};
      `}
    ${({ marginTop }) =>
      marginTop &&
      css`
        margin-top: ${marginTop}px;
      `}
    ${({ marginRight }) =>
      marginRight &&
      css`
        margin-right: ${marginRight};
      `}
    ${({ gap }) => (gap ? `gap: ${gap}px;` : `gap: 24px;`)};
`;

export const ModalCloseButton = styled(Button)`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 48px !important;
  height: 48px;
  border-radius: 64px;
`;

interface ModalHeaderProps {
  background?: string;
  isMobile?: boolean;
}

export const ModalHeader = styled.div<ModalHeaderProps>`
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
  height: ${({ isMobile }) => (isMobile ? '272px;' : '400px;')};
  position: relative;
`;

export const ModalContent = styled(DialogContent)`
  padding: 0;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const DialogStack = styled(Stack)`
  position: relative;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MobileIndexCategorySwiper = styled(Swiper)`
  width: 100%;
  padding: 0 24px 20px 24px;
  .swiper-slide {
    width: 216px;
  }
`;

export const MobileModalCloseButton = styled(Button)`
  width: 100%;
  padding: 20px;
  position: sticky;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(24px);
  z-index: 1;
`;

export const MobileCloseIconContainer = styled.div`
  height: 20px;
`;
