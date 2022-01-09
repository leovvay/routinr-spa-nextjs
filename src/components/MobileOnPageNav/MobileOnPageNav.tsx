import React from 'react';

import Stack from '@mui/material/Stack';

import Text from '@components/Text';
import LinkTo from '@components/LinkTo/LinkTo';
import { useUser } from '@hooks';

import { MobileOnPageNavLink } from './MobileOnPageNav.styled';

function MobileOnPageNav(): JSX.Element {
  const { currentUser } = useUser();

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
      <Stack direction="row" spacing={2}>
        <MobileOnPageNavLink href="/">
          <Text weight={700} color="inherit">
            Discover
          </Text>
        </MobileOnPageNavLink>
        <MobileOnPageNavLink href="/browse">
          <Text weight={700} color="inherit">
            Browse
          </Text>
        </MobileOnPageNavLink>
      </Stack>
      {!currentUser && (
        <LinkTo href="/login" blue>
          <Text weight={700}>Login</Text>
        </LinkTo>
      )}
    </Stack>
  );
}

export default MobileOnPageNav;
