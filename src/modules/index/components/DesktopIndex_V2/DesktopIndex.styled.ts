import styled, { css } from 'styled-components';

export const DesktopIndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  posotion: relative;
  margin-top: -72px;
`;

interface SectionProps {
  bgColor?: string;
  background?: string;
}

export const Section = styled.section<SectionProps>`
  height: 900px;
  position: relative;
  display: flex;
  gap: 20px;
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
  width?: number;
  height?: number;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  right?: Boolean;
  relative?: Boolean;
  marginLeft?: number;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  ${({ width }) => (width ? `width: ${width}%;` : `width: 100%;`)}
  ${({ height }) =>
    height
      ? `height: ${height}%; top: ${(100 - height) / 2}%;`
      : `height: 100%;`}
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
  flex?: string;
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
  ${({ padding }) => (padding ? `padding: ${padding};` : `padding: 0;`)}
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
  ${({ gap }) => (gap ? `gap: ${gap}px;` : `gap: 24px;`)}
`;
