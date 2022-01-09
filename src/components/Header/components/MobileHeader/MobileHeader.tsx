import React, { useCallback, useState } from 'react';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import Image from '@components/Image';
import LinkTo from '@components/LinkTo';
import Avatar from '@components/Avatar';
import Touchable from '@components/Touchable';
import Search from '@components/Header/components/Search';
import { useUser } from '@hooks';

import LoggedInNavList from './components/LoggedInNavList';
import GuestNavList from './components/GuestNavList';

import { LogoWithSearch } from '../../Header.styled';
import {
  BackButtonContainer,
  BackButtonIcon,
  Footer,
  MenuButton,
  MobileHeaderContainer,
  Drawer,
} from './MobileHeader.styled';

export default function MobileHeader(): JSX.Element {
  const { currentUser } = useUser();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const onMenuClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <MobileHeaderContainer>
      <LogoWithSearch>
        <LinkTo href="/">
          <Image src="/logoR.svg" alt="logo" width={32} height={35} />
        </LinkTo>
        <Search />
      </LogoWithSearch>
      <MenuButton onClick={toggleMenu}>
        {currentUser && <Avatar src={currentUser.avatar} />}
        <Image src="/hamburger.svg" alt="menu" width={18} height={12} />
      </MenuButton>
      <Drawer anchor="right" open={isOpen} onClose={onMenuClose}>
        <List component="nav">
          <BackButtonContainer>
            <Touchable onClick={toggleMenu}>
              <BackButtonIcon
                src="/grey-back-btn.svg"
                alt="logo"
                width={10}
                height={18}
              />
            </Touchable>
            <LinkTo href="/">
              <Image src="/routinr.svg" alt="logo" width={100} height={23} />
            </LinkTo>
          </BackButtonContainer>
          {currentUser ? <LoggedInNavList /> : <GuestNavList />}
        </List>
        <div>
          <Divider />
          <Footer>
            <LinkTo href="/influencers">Influencers</LinkTo>
            <LinkTo href="https://blog.routinr.org" target="_blank">
              Blog
            </LinkTo>
            <LinkTo href="/legal-text/terms">Terms</LinkTo>
            <LinkTo href="/legal-text">Privacy</LinkTo>
            <LinkTo href="https://routinr.zendesk.com" target="_blank">
              Support
            </LinkTo>
            <LinkTo href="https://twitter.com/Routinr" target="_blank">
              <Image
                src="/twitter-icon.svg"
                alt="twitter"
                width={19}
                height={16}
              />
            </LinkTo>
            <LinkTo href="https://www.facebook.com/routinr" target="_blank">
              <Image src="/fb-icon.svg" alt="twitter" width={9} height={16} />
            </LinkTo>
          </Footer>
        </div>
      </Drawer>
    </MobileHeaderContainer>
  );
}
