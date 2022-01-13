// .root {
//  display: flex;
//  justify-content: space-between;
//  align-items: center;
//  width: 100%;
//
//  .menuButton {
//    display: grid;
//    grid-template-columns: 1fr max-content;
//    grid-gap: 15px;
//  }
// }
//
// .backButtonRoot {
//  display: grid;
//  grid-template-columns: max-content 1fr;
//  grid-gap: 15px;
// }
//
// .backButton {
//  transform: rotate(180deg);
// }
//
// .drawer {
//  display: flex;
//  flex-direction: column;
//  justify-content: space-between;
//  width: 70%;
//  font-size: 16px;
//
//  .logoutButton {
//    font-size: inherit;
//  }
//
//  .footer {
//    display: flex;
//    justify-content: space-evenly;
//    padding: 16px 0;
//  }
// }

import React from 'react';

import styled from 'styled-components';
import MuiDrawer from '@mui/material/Drawer';
import ListItem, { ListItemProps } from '@mui/material/ListItem';

import Image from '@components/Image';
import Touchable from '@components/Touchable';

export const MobileHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const MenuButton = styled(Touchable)`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 15px;
`;

export const BackButtonContainer = styled(ListItem)`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 15px;
` as React.ComponentType<ListItemProps>;

export const BackButtonIcon = styled(Image)`
  transform: rotate(180deg);
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 16px;
  gap: 16px;
`;

export const LogoutButton = styled(Touchable)`
  font-size: inherit;
`;

export const Drawer = styled(MuiDrawer)`
  & .MuiDrawer-paper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    font-size: 16px;
    max-width: 400px;
  }
`;
