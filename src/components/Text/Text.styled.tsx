import styled, { css } from 'styled-components';

import typography from '@theme/typography';

export interface TextProps {
  size?: keyof typeof typography;
  weight?: number;
  as?: string;
  fontSize?: number;
  color?: string;
  lineHeight?: number;
  letterSpacing?: string;
  fontFamily?: string;
  padding?: string;
}

const Text = styled.span<TextProps>`
  ${({ theme, size = 'bodyBold' }) => size && theme.typography[size]}
  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `}
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}
  ${({ as }) =>
    as &&
    as === 'pre' &&
    css`
      white-space: pre-wrap;
    `}
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize}px;
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight}px;
    `}
  ${({ letterSpacing }) =>
    letterSpacing &&
    css`
      letter-spacing: ${letterSpacing};
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

export const TextLight = styled(Text)<TextProps>`
  color: ${({ color }) => color || 'var(--text-subtitle-color)'};
`;

export default Text;
