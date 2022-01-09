import styled, { css } from 'styled-components';

const LinkContent = styled.div<{ isActive?: boolean; disableHover: boolean }>`
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  height: 100%;

  ${({ disableHover, isActive }) =>
    !disableHover &&
    css`
      &:hover {
        border-bottom: 1px solid var(--primary-color);
      }

      ${isActive &&
      css`
        border-bottom: 1px solid var(--primary-color);
      `}
    `}
`;

export default LinkContent;
