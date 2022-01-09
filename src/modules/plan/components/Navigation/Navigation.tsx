import React from 'react';

import ActiveLinkTo from '@components/ActiveLinkTo';

import { LinkContent, NavigationContainer } from './Navigation.styled';

const NAV = [
  {
    label: 'My Feed',
    link: '/plan/my-feed',
  },
  {
    label: 'Calendar',
    link: '/plan',
  },
  {
    label: 'Routines',
    link: '/plan/routines',
  },
  {
    label: 'Posts',
    link: '/plan/posts',
  },
  {
    label: 'Subscriptions',
    link: '/plan/subscriptions',
  },
];
function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      {NAV.map((navItem) => (
        <ActiveLinkTo key={navItem.label} href={navItem.link}>
          <LinkContent>{navItem.label}</LinkContent>
        </ActiveLinkTo>
      ))}
    </NavigationContainer>
  );
}

export default Navigation;
