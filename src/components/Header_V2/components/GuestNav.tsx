import React from 'react';
import { useRouter } from 'next/router';

import { Box } from '@mui/material';

import Image from '@components/Image';
import Text from '@components/Text';
import NavActiveLink from '@components/NavActiveLink';
import RoundButton from '@components/RoundButton';

export default function GuestNav(): JSX.Element {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  return (
    <>
      <NavActiveLink href="/login" disableHover={isIndexPage}>
        <span>Login</span>
      </NavActiveLink>
      <Box sx={{ ml: 5 }} />
      <NavActiveLink href="/register" disableHover={isIndexPage}>
        <span>Sign up</span>
      </NavActiveLink>
      <Box sx={{ ml: 4 }} />
      <RoundButton
        onClick={(e) => {
          e.preventDefault();
          window.open(
            'https://play.google.com/store/apps/details?id=org.routinr.newapp',
            '_blank'
          );
        }}
      >
        <Text
          fontFamily="var(--font-secondary)"
          fontSize={16}
          lineHeight={22}
          letterSpacing="0.01em"
          color="var(--text-landing-white)"
        >
          Google Play
        </Text>
        <Image src="/ic_googlestore.svg" width={24} height={24} />
      </RoundButton>
      <RoundButton
        onClick={(e) => {
          e.preventDefault();
          window.open(
            'https://apps.apple.com/au/app/routinr/id1459345510',
            '_blank'
          );
        }}
      >
        <Text
          fontFamily="var(--font-secondary)"
          fontSize={16}
          lineHeight={22}
          letterSpacing="0.01em"
          color="var(--text-landing-white)"
        >
          App Store
        </Text>
        <Image src="/ic_appstore.svg" width={24} height={24} />
      </RoundButton>
    </>
  );
}
