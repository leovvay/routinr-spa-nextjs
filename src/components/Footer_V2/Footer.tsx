import React from 'react';

import { TextLight } from '@components/Text';
import LinkTo from '@components/LinkTo';
import { useIsTabletVersion } from '@hooks';

import {
  FooterContainer,
  MenuContainer,
  MenuItem,
  MenuList,
} from './Footer.styled';

function Footer(): JSX.Element {
  const showTabletVersion = useIsTabletVersion();

  return (
    <FooterContainer>
      <MenuContainer>
        <MenuList>
          <MenuItem>
            <LinkTo href="/influencers">
              <TextLight
                size="bodySmallBold"
                fontSize={showTabletVersion ? 18 : 24}
                weight={600}
                lineHeight={showTabletVersion ? 24 : 30}
                letterSpacing="-0.02em"
                color="#FAFAFF"
              >
                Influencers
              </TextLight>
            </LinkTo>
          </MenuItem>

          <MenuItem>
            <LinkTo href="https://blog.routinr.org" target="_blank">
              <TextLight
                size="bodySmallBold"
                fontSize={showTabletVersion ? 18 : 24}
                weight={600}
                lineHeight={showTabletVersion ? 24 : 30}
                letterSpacing="-0.02em"
                color="#FAFAFF"
              >
                Blog
              </TextLight>
            </LinkTo>
          </MenuItem>
        </MenuList>
        <MenuList>
          <MenuItem>
            <LinkTo href="https://routinr.zendesk.com" target="_blank">
              <TextLight
                size="bodySmallBold"
                fontSize={showTabletVersion ? 18 : 24}
                weight={600}
                lineHeight={30}
                letterSpacing="-0.02em"
                color="#FAFAFF"
              >
                Support
              </TextLight>
            </LinkTo>
          </MenuItem>
          <MenuItem>
            <LinkTo href="/legal-text/terms">
              <TextLight
                size="bodySmallBold"
                fontSize={showTabletVersion ? 18 : 24}
                weight={600}
                lineHeight={showTabletVersion ? 24 : 30}
                letterSpacing="-0.02em"
                color="#FAFAFF"
              >
                Terms
              </TextLight>
            </LinkTo>
          </MenuItem>
          <MenuItem>
            <LinkTo href="/legal-text">
              <TextLight
                size="bodySmallBold"
                fontSize={showTabletVersion ? 18 : 24}
                weight={600}
                lineHeight={30}
                letterSpacing="-0.02em"
                color="#FAFAFF"
              >
                Privacy
              </TextLight>
            </LinkTo>
          </MenuItem>
        </MenuList>
        <MenuList>
          <MenuItem>
            <LinkTo href="https://www.facebook.com/routinr" target="_blank">
              <TextLight
                size="bodySmallBold"
                fontSize={showTabletVersion ? 18 : 24}
                weight={600}
                lineHeight={showTabletVersion ? 24 : 30}
                letterSpacing="-0.02em"
                color="#FAFAFF"
              >
                Facebook
              </TextLight>
            </LinkTo>
          </MenuItem>
          <MenuItem>
            <LinkTo href="https://www.instagram.com/routinr/" target="_blank">
              <TextLight
                size="bodySmallBold"
                fontSize={showTabletVersion ? 18 : 24}
                weight={600}
                lineHeight={showTabletVersion ? 24 : 30}
                letterSpacing="-0.02em"
                color="#FAFAFF"
              >
                Instagram
              </TextLight>
            </LinkTo>
          </MenuItem>
          <MenuItem>
            <LinkTo href="https://twitter.com/Routinr" target="_blank">
              <TextLight
                size="bodySmallBold"
                fontSize={showTabletVersion ? 18 : 24}
                weight={600}
                lineHeight={showTabletVersion ? 24 : 30}
                letterSpacing="-0.02em"
                color="#FAFAFF"
              >
                Twitter
              </TextLight>
            </LinkTo>
          </MenuItem>
        </MenuList>
      </MenuContainer>
    </FooterContainer>
  );
}

export default Footer;
