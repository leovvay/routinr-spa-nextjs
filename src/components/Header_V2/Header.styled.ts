import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header<{
  isMobile: boolean;
}>`
  display: flex;
  flex-direction: column;
  position: ${({ isMobile }) => (isMobile ? 'fixed;' : 'sticky;')}
  ${({ isMobile }) =>
    !isMobile &&
    css`
      top: 0;
    `}
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(13px);
  min-height: ${({ isMobile }) => (isMobile ? 60 : 72)}px;
  padding: ${({ isMobile }) => (isMobile ? '0 24px;' : '0 112px;')}
  z-index: 2;
  color: white;

  ${({ isMobile }) =>
    isMobile &&
    css`
      justify-content: center;
      bottom: 0;
      left: 0;
      right: 0;
    `}

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWithSearch = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  margin-right: 20px;

  & > * {
    &:not(:last-child) {
      margin-right: 18px;
      flex-shrink: 0;
    }
  }

  & > div {
    flex-grow: 1;
    max-width: 350px;
  }
`;

export const HeaderNav = styled.nav<{ $fullHeight: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  ${({ $fullHeight }) =>
    $fullHeight &&
    css`
      height: 100%;
    `}
`;

export const LogoText = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.02em;
`;
