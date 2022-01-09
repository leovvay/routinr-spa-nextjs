import styled, { css } from 'styled-components';

import Image from '@components/Image';

export const HeaderContainer = styled.header<{
  isSticky: boolean;
  isMobile: boolean;
  isIndexPage: boolean;
  background?: string;
}>`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: ${({ isMobile }) =>
    isMobile ? 'var(--white)' : 'var(--main-bg-color)'};
  min-height: ${({ isMobile }) => (isMobile ? 60 : 80)}px;
  padding: 0 18px;
  border-bottom: 1px solid var(--main-border-color);
  transition: box-shadow 0.2s linear;
  z-index: 2;

  ${({ isSticky }) =>
    isSticky &&
    css`
      box-shadow: 0 1px 9.4px 0.6px rgb(0 0 0 / 19%);
    `}

  ${({ isMobile }) =>
    isMobile &&
    css`
      justify-content: center;
    `}

  ${({ background, isMobile, isIndexPage }) =>
    !isMobile &&
    background &&
    css`
      position: relative;
      background: url(${background}) no-repeat center/cover,
        url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiICBpZD0ic25hcHNob3QtNTQ3NjUiIHdpZHRoPSIxODAiIGhlaWdodD0iMjg3IiB2aWV3Qm94PSIwIDAgMTgwIDI4NyI+PGRlc2M+VGhpcyBpbWFnZSB3YXMgbWFkZSBvbiBQYXR0ZXJuaW5qYS5jb208L2Rlc2M+PGRlZnM+CjwhLS0gaW1hZ2UgMjAyMjUgLS0+CjxnIGlkPSJ0cmFuc2Zvcm1lZC0yMDIyNSIgZGF0YS1pbWFnZT0iMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNDA5OTk5OTk5OTk5OTk3LCAxNTAuOTgpIHJvdGF0ZSgwLCA1Ny41LCA1MikiPjxnPjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTE1cHgiIGhlaWdodD0iMTA0cHgiIHZpZXdCb3g9IjAgMCAxMTUgMTA0Ij48ZyBpZD0ib3JpZ2luYWwtMjAyMjUiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjcgMjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgogIDxwYXRoIGQ9Ik03LjY0NiAyLjM2TDYuNzUuODFDLjc3MSA0LjI2LTEuMjU0IDExLjk0NiAyLjIyNyAxNy45NzRjMy40OCA2LjAyOCAxMS4xNDggOC4xMTcgMTcuMTI3IDQuNjY1bC44OTYgMS41NTJjNS45NzktMy40NTEgOC4wMDQtMTEuMTM3IDQuNTIzLTE3LjE2NUMyMS4yOTMuOTk4IDEzLjYyNS0xLjA5IDcuNjQ2IDIuMzYxem04LjMzNCA0LjEzNWMtLjE3NS4wNzUtLjM3Ni4xNy0uNTg2LjI5My0xLjIwNS42OTUtMS45NTggMS43NzEtMi4xNzkgMy4xMTItLjI1MiAxLjA1Ni4wNyAyLjI1MyAxLjA3NyAzLjk5NmwyLjg3OSA0Ljk4NC0zLjI4IDEuODk0LTcuMzk2LTEyLjgxIDMuMjgtMS44OTMuNzk4IDEuMzgycy41MjgtMi4xNDMgMy4yMS0zLjY5MWE0LjUxIDQuNTEgMCAwIDEgLjQ4LS4yNDJsMS43MTcgMi45NzV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InJnYmEoMTI1LCAxMzcsIDE1MiwgMC40KSIgc3Ryb2tlPSJub25lIi8+Cjwvc3ZnPgo8L2c+PC9zdmc+PC9nPjwvZz4KPCEtLSAvaW1hZ2UgMjAyMjUgLS0+Cgo8IS0tIGltYWdlIDU3MTE5IC0tPgo8ZyBpZD0idHJhbnNmb3JtZWQtNTcxMTkiIGRhdGEtaW1hZ2U9IjU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MS40MDAwMDAwMDAwMDAwMDYsIDEyLjQwOTk5OTk5OTk5OTk5Nykgcm90YXRlKDM1NywgNTcuNSwgNTMuNSkiPjxnPjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTE1cHgiIGhlaWdodD0iMTA3cHgiIHZpZXdCb3g9IjAgMCAxMTUgMTA3Ij48ZyBpZD0ib3JpZ2luYWwtNTcxMTkiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjcgMjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgogIDxwYXRoIGQ9Ik03LjY0NiAyLjM2TDYuNzUuODFDLjc3MSA0LjI2LTEuMjU0IDExLjk0NiAyLjIyNyAxNy45NzRjMy40OCA2LjAyOCAxMS4xNDggOC4xMTcgMTcuMTI3IDQuNjY1bC44OTYgMS41NTJjNS45NzktMy40NTEgOC4wMDQtMTEuMTM3IDQuNTIzLTE3LjE2NUMyMS4yOTMuOTk4IDEzLjYyNS0xLjA5IDcuNjQ2IDIuMzYxem04LjMzNCA0LjEzNWMtLjE3NS4wNzUtLjM3Ni4xNy0uNTg2LjI5My0xLjIwNS42OTUtMS45NTggMS43NzEtMi4xNzkgMy4xMTItLjI1MiAxLjA1Ni4wNyAyLjI1MyAxLjA3NyAzLjk5NmwyLjg3OSA0Ljk4NC0zLjI4IDEuODk0LTcuMzk2LTEyLjgxIDMuMjgtMS44OTMuNzk4IDEuMzgycy41MjgtMi4xNDMgMy4yMS0zLjY5MWE0LjUxIDQuNTEgMCAwIDEgLjQ4LS4yNDJsMS43MTcgMi45NzV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InJnYmEoMTI1LCAxMzcsIDE1MiwgMC40KSIgc3Ryb2tlPSJub25lIi8+Cjwvc3ZnPgo8L2c+PC9zdmc+PC9nPjwvZz4KPCEtLSAvaW1hZ2UgNTcxMTkgLS0+CjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjI4NyIgZmlsbD0icmdiYSgyMDEsIDIwNywgMjE5LCAwKSI+PC9yZWN0Pjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIC0yODcpIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0yMDIyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4MCwgMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMjAyMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTIwMjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIC0yODcpIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLCAtMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC01NzExOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4MCwgMjg3KSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtNTcxMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDI4NykiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTU3MTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDI4NykiPjwvdXNlPjwvc3ZnPg==)
          center/13%,
        #c9cfdb;
      min-height: ${isIndexPage ? 845 : 335}px;

      color: var(--white);
    `}
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
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

export const Logo = styled(Image)<{ $isWhite?: boolean }>`
  ${({ $isWhite = false }) =>
    $isWhite &&
    css`
      filter: grayscale(100%) brightness(3);
    `}
`;

export const HeaderNav = styled.nav<{ $fullHeight: boolean }>`
  display: flex;
  justify-content: center;
  ${({ $fullHeight }) =>
    $fullHeight &&
    css`
      height: 100%;
    `}

  & > * {
    &:not(:last-child) {
      margin-right: 33px;
    }

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export const HeaderGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), transparent);
  z-index: -1;
`;

export const HeaderPromoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding-left: 5vw;
`;
