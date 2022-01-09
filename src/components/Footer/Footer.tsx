import React from 'react';

import Image from '@components/Image';
import { TextLight } from '@components/Text';
import LinkTo from '@components/LinkTo';
import { useUser } from '@hooks';

import {
  FooterContainer,
  LogoContainer,
  MenuContainer,
  MenuItem,
  MenuList,
  StoresContainer,
} from './Footer.styled';

function Footer(): JSX.Element {
  const { currentUser } = useUser();

  return (
    <FooterContainer>
      <LogoContainer>
        <Image src="/logo-footer.svg" width={120} height={36} alt="logo" />
        <TextLight size="footerCaption">All rights reserved.</TextLight>
      </LogoContainer>
      <MenuContainer>
        <MenuList>
          {!currentUser && (
            <MenuItem>
              <LinkTo href="/influencers">
                <TextLight size="bodySmallBold">Influencers</TextLight>
              </LinkTo>
            </MenuItem>
          )}
          <MenuItem>
            <LinkTo href="https://blog.routinr.org" target="_blank">
              <TextLight size="bodySmallBold">Blog</TextLight>
            </LinkTo>
          </MenuItem>
          <MenuItem>
            <LinkTo href="/legal-text/terms">
              <TextLight size="bodySmallBold">Terms</TextLight>
            </LinkTo>
          </MenuItem>
          <MenuItem>
            <LinkTo href="/legal-text">
              <TextLight size="bodySmallBold">Privacy</TextLight>
            </LinkTo>
          </MenuItem>
          <MenuItem>
            <LinkTo href="https://routinr.zendesk.com" target="_blank">
              <TextLight size="bodySmallBold">Support</TextLight>
            </LinkTo>
          </MenuItem>
        </MenuList>
      </MenuContainer>
      <StoresContainer>
        <LinkTo
          href="https://apps.apple.com/au/app/routinr/id1459345510"
          target="_blank"
        >
          <Image
            src="/app-store-badge.svg"
            width={100}
            height={34}
            alt="apple"
            unoptimized
          />
        </LinkTo>
        <LinkTo
          href="https://play.google.com/store/apps/details?id=org.routinr.newapp"
          target="_blank"
        >
          <Image
            src="/google-play-badge.svg"
            width={105}
            height={34}
            alt="google"
            unoptimized
          />
        </LinkTo>
      </StoresContainer>
    </FooterContainer>
  );
}

export default Footer;
