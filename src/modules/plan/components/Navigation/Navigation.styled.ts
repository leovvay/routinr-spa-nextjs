import styled, { css } from 'styled-components';

export const NavigationContainer = styled.div`
  height: 60px;
  display: flex;
  padding: 0 68px;
  background-color: var(--white);
  border-bottom: 1px solid var(--grey);

  gap: 48px;

  @media screen and (max-width: 768px) {
    padding: 0;
    justify-content: space-evenly;
    overflow: scroll;
    gap: unset;

    background-color: unset;
    border-bottom: unset;
    height: unset;
    margin-top: 10px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const LinkContent = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  height: 100%;
  font-weight: 700;
  opacity: 0.6;

  @media screen and (max-width: 768px) {
    font-size: 15px;

    &:hover {
      border-bottom: 1px solid var(--text-primary-color);
    }

    ${({ isActive }) =>
      isActive &&
      css`
        border-bottom: 1px solid var(--text-primary-color);
      `}
  }

  &:hover {
    opacity: 1;
    border-bottom: 1px solid var(--black);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      border-bottom: 1px solid var(--black);
    `}
`;
