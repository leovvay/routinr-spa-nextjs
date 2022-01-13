import styled, { css } from 'styled-components';

export const DesktopIndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: -72px;
`;

interface SectionProps {
  bgColor?: string;
  background?: string;
  isFullHeight?: Boolean;
  isSticky?: Boolean;
  minHeight?: number;
  noGap?: Boolean;
}

export const Section = styled.section<SectionProps>`
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: 890px;
    `}
  height: ${({ isFullHeight }) => (isFullHeight ? '100vh' : '900px')};
  ${({ isSticky }) =>
    isSticky ? 'position: sticky; top: 0;' : 'position: relative;'}
  display: flex;
  gap: ${({ noGap }) => (noGap ? '0px' : '20px')};
  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
`;

interface ImageContainerProps {
  width?: string;
  height?: number;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  right?: Boolean;
  relative?: Boolean;
  marginLeft?: number;
  paddingTop?: string;
  isFlex?: Boolean;
  top?: number;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  ${({ isFlex }) =>
    isFlex &&
    css`
      display: flex;
      justify-content: center;
    `}
  width: ${({ width }) => (width ? `${width}` : `100%`)};
  height: ${({ height }) => (height ? `${height}%` : `100%`)};
  ${({ top }) =>
    top &&
    css`
      top: ${top}%;
    `}
  position: ${({ relative }) => (relative ? 'relative;' : 'absolute;')}
  
  ${({ right }) =>
    right &&
    css`
      right: 0;
    `}
  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft}%;
    `}
  ${({ paddingTop }) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop};
    `}
`;

export const ImageContainer4 = styled.div`
  right: 0;
  position: absolute;
  width: 50%;
  height: 100%;
`;

interface ContentContainerProps {
  marginLeft?: string;
  marginTop?: number;
  marginRight?: string;
  width?: number;
  height?: number;
  position?: string;
  right?: string;
  gap?: number;
  padding?: string;
}

export const ContentContainer = styled.div<ContentContainerProps>`
  ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}
  display: flex;
  height: ${({ height }) => (height ? `${height}px;` : `100%;`)}
  ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
  flex-direction: column;
  justify-content: center;
  color: var(--text-landing-white);
  align-items: flex-start;
  padding: ${({ padding }) => (padding ? `${padding}` : `padding: 0`)};
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
  gap: ${({ gap }) => (gap ? `${gap}px` : `24px`)};
`;

export const Container = styled.div`
  position: relative;
`;

interface AbsoluteContainerProps {
  isGap?: Boolean;
}
export const AbsoluteContainer = styled.div<AbsoluteContainerProps>`
  position: absolute;
  display: flex;
  align-items: center;
  ${({ isGap }) =>
    isGap &&
    css`
      gap: 20px;
    `};
`;
