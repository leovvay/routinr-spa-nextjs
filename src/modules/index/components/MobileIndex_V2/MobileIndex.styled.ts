import styled, { css } from 'styled-components';

import Image from '@components/Image';

export const MobileIndexContainer = styled.main`
  padding: 1px;
`;

interface MobileIndexSectionProps {
  bgColor?: string;
  padding?: string;
  isSticky?: Boolean;
  height?: string;
}

export const MobileIndexSection = styled.section<MobileIndexSectionProps>`
  width: 100%;
  min-height: 812px;
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
  position: ${({ isSticky }) => (isSticky ? 'sticky; top: 0;' : 'relative')};
  ${({ bgColor }) =>
    bgColor &&
    css`
      background: ${bgColor};
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

interface MobileContentContainerProps {
  padding?: string;
  width?: string;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  bottom?: number;
  justifyContent?: string;
  position?: string;
  zIndex?: number;
  minHeight?: number;
  isFlexRow?: Boolean;
}

export const MobileContentContainer = styled.div<MobileContentContainerProps>`
  ${({ height }) =>
    height &&
    css`
      height: ${height}%;
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom}px;
    `}
  ${({ zIndex }) =>
    zIndex &&
    css`
      z-index: ${zIndex};
    `}
  ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft}%;
    `}
  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight}%;
    `}
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight}px;
    `}
  display: flex;
  flex-direction: ${({ isFlexRow }) => (isFlexRow ? 'row;' : 'column;')}
  gap: 24px;
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  align-items: flex-start;
`;

interface MobileImageContainerProps {
  position?: string;
  marginTop?: string;
  marginLeft?: number;
  marginRight?: number;
  top?: string;
  left?: string;
  height?: string;
  minHeight?: number;
  width?: string;
}

export const MobileImageContainer = styled.div<MobileImageContainerProps>`
  ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
  width: ${({ width }) => (width ? `${width}` : `100%`)};
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight}px;
    `}
  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft}px;
    `}
  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight}px;
    `}
  ${({ height }) => (height ? `height: ${height};` : `height: 100%;`)}
`;

interface CardViewProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export const CardView = styled.div<CardViewProps>`
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
  ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}
  position: absolute;
  width: 154px;
  height: 178px;
  border-radius: 12.6222px;
  display: flex;
  flex-direction: column;
`;

export const RoundImage = styled(Image)`
  border-radius: 12px 12px 0 0;
`;

interface CardRowProps {
  bgColor?: string;
  borderRadius?: Boolean;
  gap?: number;
  padding?: Boolean;
}

export const CardRow = styled.div<CardRowProps>`
  display: flex;
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: 10px 15px;
    `}
  justify-content: space-between;
  align-items: center;
  ${({ bgColor }) =>
    bgColor &&
    css`
      background: ${bgColor};
    `}
  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: 0 0 12px 12px;
    `}
`;

export const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: start;
`;

export const AbsoluteContainerMobile = styled.div`
  position: absolute;
  top: 0;
`;

interface StickyContainerProps {
  height: number;
}

export const StickyContainer = styled.div<StickyContainerProps>`
  position: sticky;
  top: 0;
  height: ${({ height }) => `${height}px`};
  display: flex;
  justify-content: center;
`;
