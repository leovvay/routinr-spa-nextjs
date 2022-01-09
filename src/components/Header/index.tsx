import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import NoSsr from '@mui/material/NoSsr';

import LinkTo from '@components/LinkTo';
import { useIsMobileVersion, useUser } from '@hooks';
import PromoCard from '@components/Header/components/PromoCard';

import logo from '@public/logoR.svg';

import LoggedInNav from './components/LoggedInNav/LoggedInNav';
import GuestNav from './components/GuestNav';
import Search from './components/Search';
import MobileHeader from './components/MobileHeader';

import {
  HeaderNav,
  HeaderContainer,
  LogoWithSearch,
  HeaderGradient,
  Logo,
  HeaderContent,
  HeaderPromoContainer,
} from './Header.styled';

interface HeaderProps {
  background?: string;
}

export default function Header({ background }: HeaderProps): JSX.Element {
  const { currentUser } = useUser();
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  const [isSticky, setIsSticky] = useState(false);

  const showMobileVersion = useIsMobileVersion();

  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window;

      setIsSticky(scrollY >= 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <HeaderContainer
      isSticky={isSticky}
      isMobile={showMobileVersion}
      isIndexPage={isIndexPage}
      background={background}
    >
      {background && !showMobileVersion && <HeaderGradient />}
      <NoSsr>
        {showMobileVersion ? (
          <MobileHeader />
        ) : (
          <HeaderContent>
            <LogoWithSearch>
              <LinkTo href="/">
                <Logo
                  src={logo}
                  alt="logo"
                  width={32}
                  height={35}
                  $isWhite={Boolean(background)}
                />
              </LinkTo>
              <Search />
            </LogoWithSearch>

            <HeaderNav $fullHeight={!background}>
              {currentUser ? <LoggedInNav /> : <GuestNav />}
            </HeaderNav>
          </HeaderContent>
        )}
      </NoSsr>
      {!currentUser && !showMobileVersion && isIndexPage && (
        <HeaderPromoContainer>
          <PromoCard />
        </HeaderPromoContainer>
      )}
    </HeaderContainer>
  );
}

Header.defaultProps = {
  background: undefined,
};
