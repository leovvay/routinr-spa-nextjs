import styled, { css } from 'styled-components';
import ListItemButton, {
  ListItemButtonProps,
} from '@mui/material/ListItemButton';

import Popover from '@components/Popover';

export const FeedFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FeedFilterPopover = styled(Popover)`
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const FeedFilterIcon = styled.div``;

export const FeedFilterListItemButton = styled(ListItemButton)<
  ListItemButtonProps & { checked: boolean }
>`
  justify-content: space-between;

  ${({ checked }) =>
    checked &&
    css`
      color: var(--text-primary-color);
    `}

  ${({ checked }) =>
    !checked &&
    css`
      ${FeedFilterIcon} {
        opacity: 0;
      }
    `}
`;
