import React from 'react';

import NoSsr from '@mui/material/NoSsr';

import LinkTo from '@components/LinkTo';
import { useIsMobileVersion } from '@hooks';

import GuestNav from './components/GuestNav';
import MobileHeader from './components/MobileHeader';

import {
  HeaderNav,
  HeaderContainer,
  HeaderContent,
  LogoText,
} from './Header.styled';

export default function Header(): JSX.Element {
  const showMobileVersion = useIsMobileVersion();

  return (
    <HeaderContainer isMobile={showMobileVersion}>
      <NoSsr>
        {showMobileVersion ? (
          <MobileHeader />
        ) : (
          <HeaderContent>
            <LinkTo href="/">
              <LogoText>routinr</LogoText>
            </LinkTo>

            <HeaderNav $fullHeight={false}>
              <GuestNav />
            </HeaderNav>
          </HeaderContent>
        )}
      </NoSsr>
    </HeaderContainer>
  );
}
