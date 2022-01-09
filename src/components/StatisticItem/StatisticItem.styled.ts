import styled, { css } from 'styled-components';

const paddingStyles = css`
  padding-left: 30px;
  border-left: 1px solid var(--main-border-color);
`;

export const StatisticItemContainer = styled.div<{ $noPaddings?: boolean }>`
  display: flex;
  align-items: flex-start;
  padding: 0 30px;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
    align-items: center;
  }

  &:not(:first-child) {
    ${({ $noPaddings }) => !$noPaddings && paddingStyles}
  }

  ${({ $noPaddings }) =>
    $noPaddings &&
    css`
      padding: 0;
    `}
`;

export const StatisticItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  max-width: 105px;
`;
