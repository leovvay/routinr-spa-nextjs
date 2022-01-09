import React from 'react';

import { useIsMobileVersion } from '@hooks';

import MenuDesktop from './components/MenuDesktop';
import MenuMobile from './components/MenuMobile/MenuMobile';

import { CreatorMenuContainer } from './CreatorMenu.styled';

export default function CreatorMenu(): JSX.Element {
  const isMobile = useIsMobileVersion();

  return (
    <CreatorMenuContainer fullwidth={isMobile}>
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
    </CreatorMenuContainer>
  );
}
