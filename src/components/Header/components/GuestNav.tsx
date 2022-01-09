import React from 'react';
import { useRouter } from 'next/router';

import NavActiveLink from '@components/NavActiveLink';

export default function GuestNav(): JSX.Element {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  return (
    <>
      <NavActiveLink href="/influencers" disableHover={isIndexPage}>
        <span>Become an Influencer</span>
      </NavActiveLink>
      <NavActiveLink href="/" disableHover={isIndexPage}>
        <span>Discover</span>
      </NavActiveLink>
      <NavActiveLink href="/browse" disableHover={isIndexPage}>
        <span>Browse</span>
      </NavActiveLink>
      <NavActiveLink href="/login" disableHover={isIndexPage}>
        <span>Login</span>
      </NavActiveLink>
      <NavActiveLink href="/register" disableHover={isIndexPage}>
        <span>Register</span>
      </NavActiveLink>
    </>
  );
}
