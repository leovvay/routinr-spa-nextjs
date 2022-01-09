import React from 'react';

import LinkTo from '@components/LinkTo';

import NavListItem from '../NavListItem';

export default function GuestNavList(): JSX.Element {
  return (
    <>
      <NavListItem>
        <LinkTo href="/influencers">
          <span>Become an Influencer</span>
        </LinkTo>
      </NavListItem>
      <NavListItem>
        <LinkTo href="/">
          <span>Discover</span>
        </LinkTo>
      </NavListItem>
      <NavListItem>
        <LinkTo href="/login">
          <span>Login</span>
        </LinkTo>
      </NavListItem>
      <NavListItem>
        <LinkTo href="/register">
          <span>Register</span>
        </LinkTo>
      </NavListItem>
    </>
  );
}
