import ListItem from '@mui/material/ListItem';
import styled, { css } from 'styled-components';
import ListItemButton from '@mui/material/ListItemButton';
import Dialog from '@mui/material/Dialog';

import LinkTo from '@components/LinkTo';
import Touchable from '@components/Touchable';

export const RoutinePopupControlDialog = styled(Dialog)`
  .MuiDialog-paper {
    max-width: 272px;
  }
`;

export const RoutinePopupControlListItem = styled(ListItem)`
  padding: 16px 26px;
`;

export const RoutinePopupControlListItemButton = styled(ListItemButton)`
  transition: all 0.3s ease;
  padding: 16px 26px;

  &:hover {
    padding-left: 36px;
  }
`;

export const RoutinePopupControlLink = styled(LinkTo)`
  width: 100%;
`;

const coverMobileStyles = css`
  width: 40px;
  height: 40px;
  left: 7px;
  bottom: 7px;
`;

export const PopupRoutineCover = styled(Touchable)<{
  $forceMobile?: boolean;
}>`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 24px;
  left: 24px;
  overflow: hidden;

  border-radius: 50%;
  border: 2px solid var(--white);
  background-color: var(--grey);

  @media screen and (max-width: 768px) {
    ${coverMobileStyles}
  }

  ${({ $forceMobile }) => $forceMobile && coverMobileStyles}
`;
