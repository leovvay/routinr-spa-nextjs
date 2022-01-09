import React, { PropsWithChildren } from 'react';

import ActiveLinkTo from '@components/ActiveLinkTo';

import {
  SideNavContainer,
  SideNavContentContainer,
  SideNavItemText,
  SideNavNavContainer,
} from './SideNav.styled';

interface LinkOption {
  path: string;
  label: string;
}

interface SideNavProps {
  links: LinkOption[];
}

function SideNav({
  links,
  children,
}: PropsWithChildren<SideNavProps>): JSX.Element {
  return (
    <SideNavContainer>
      <SideNavNavContainer>
        {links.map((linkOption) => (
          <ActiveLinkTo href={linkOption.path}>
            <SideNavItemText>{linkOption.label}</SideNavItemText>
          </ActiveLinkTo>
        ))}
      </SideNavNavContainer>
      <SideNavContentContainer>{children}</SideNavContentContainer>
    </SideNavContainer>
  );
}

export default SideNav;
