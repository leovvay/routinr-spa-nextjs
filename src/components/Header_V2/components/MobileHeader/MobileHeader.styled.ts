import styled from 'styled-components';
import MuiDrawer from '@mui/material/Drawer';

import Touchable from '@components/Touchable';
import { LinkToLegacyApp } from '@components/LinkTo';

export const MobileHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const MenuButton = styled(Touchable)`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 12px;
`;

export const LogoutButton = styled(Touchable)`
  font-size: inherit;
`;

export const Drawer = styled(MuiDrawer)`
  & .MuiDrawer-paper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(16px);
  }
`;

export const LogoLink = styled(LinkToLegacyApp)`
  display: flex;
`;

export const MenuFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18.5px 0 18.5px 24px;
`;

export const DrawerCloseButton = styled(Touchable)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 9px 24px;
`;
