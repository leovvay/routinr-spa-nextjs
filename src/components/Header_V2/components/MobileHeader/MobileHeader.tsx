import React, { useCallback, useState } from 'react';

import List from '@mui/material/List';

import Image from '@components/Image';
import LinkTo from '@components/LinkTo';
import Text from '@components/Text';

import GuestNavList from './components/GuestNavList';

import { LogoWithSearch } from '../../Header.styled';
import {
  MenuButton,
  MobileHeaderContainer,
  Drawer,
  MenuFooter,
  DrawerCloseButton,
} from './MobileHeader.styled';

export default function MobileHeader(): JSX.Element {
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
          <Text
            fontSize={24}
            lineHeight={34}
            weight={600}
            letterSpacing="-0.02em"
            fontFamily="var(--font-secondary)"
            color="var(--text-landing-white)"
          >
            routinr
          </Text>
        </LinkTo>
      </LogoWithSearch>
      <MenuButton onClick={toggleMenu}>
        <Text
          fontSize={16}
          lineHeight={22}
          letterSpacing="0.01em"
          fontFamily="var(--font-secondary)"
          color="var(--text-landing-white)"
          weight={600}
        >
          menu
        </Text>
        <Image src="/mobile_hamburger.svg" alt="menu" width={18} height={12} />
      </MenuButton>
      <Drawer anchor="bottom" open={isOpen} onClose={onMenuClose}>
        <List component="nav">
          <GuestNavList />
        </List>
        <MenuFooter>
          <LinkTo href="/">
            <Text
              fontFamily="var(--font-secondary)"
              fontSize={24}
              lineHeight={34}
              letterSpacing="-0.02em"
              color="var(--text-landing-white)"
            >
              routinr
            </Text>
          </LinkTo>
          <DrawerCloseButton onClick={onMenuClose}>
            <Text
              fontFamily="var(--font-secondary)"
              fontSize={16}
              lineHeight={22}
              letterSpacing="0.01em"
              color="var(--text-landing-white)"
            >
              close
            </Text>
            <Image
              src="/close-white.svg"
              width={15.5}
              height={15.5}
              objectFit="contain"
            />
          </DrawerCloseButton>
        </MenuFooter>
      </Drawer>
    </MobileHeaderContainer>
  );
}
