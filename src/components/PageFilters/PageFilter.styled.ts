import styled, { css } from 'styled-components';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import Touchable from '@components/Touchable';

export const PageFilterContainer = styled.div`
  padding: 10px 5%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  background-color: var(--white);
  border-bottom: 1px solid var(--main-border-color);
`;

export const PageFilterIconContainer = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid var(--main-border-color);
  border-radius: 50%;
`;

export const FilterPageButton = styled(Touchable)<{ $inverse?: boolean }>`
  border-radius: 4px;
  padding: 10px 15px;
  font-weight: 700;
  background-color: var(--primary-color);
  color: var(--white);
  border: 1px solid transparent;

  &:hover {
    background-color: var(--primary-color-dark);
  }

  ${({ $inverse }) =>
    $inverse &&
    css`
      background-color: var(--white);
      color: var(--primary-color);
      border: 1px solid var(--primary-color);

      &:hover {
        color: var(--white);
      }
    `}
`;

export const FilterPageMenu = styled(Menu)`
  & .MuiMenu-paper {
    min-width: 200px;
  }
`;

export const FilterPageCheckIcon = styled(CheckRoundedIcon)``;

export const FilterPageMenuItem = styled(MenuItem)<{ checked: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  color: var(--text-subtitle-color);
  font-family: var(--font-primary);

  ${({ checked }) => checked && `color: var(--text-primary-color);`}
`;
