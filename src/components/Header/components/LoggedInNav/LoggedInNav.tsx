import React from 'react';
import { useLocalStorage } from 'react-use';

import { useUser } from '@hooks';
import { User } from '@store/services/users';
import NavActiveLink from '@components/NavActiveLink';
import Text from '@components/Text';

import CreatorMenu from '../CreatorMenu';
import SwitchCreative from '../SwitchCreative';
import Notifications from '../Notifications';
import CurrentUserMenu from '../CurrentUserMenu';

import {
  AdminLink,
  AdminPanelLabel,
  CurrentUserContainer,
} from './LoggedInNav.styled';

export default function LoggedInNav(): JSX.Element {
  const { currentUser, logout } = useUser();

  const [isCreator, setIsCreator] = useLocalStorage<boolean>(
    'isCreator',
    false
  );

  const handleCreativeChange = () => setIsCreator(!isCreator);

  return (
    <>
      {isCreator ? (
        <>
          <NavActiveLink href="/dashboard">
            <Text size="bodySmallBold">Dashboard</Text>
          </NavActiveLink>
          <NavActiveLink href="/account">
            <Text size="bodySmallBold">Account settings</Text>
          </NavActiveLink>
          <NavActiveLink href={`/profile/${currentUser?.slug}`}>
            <Text size="bodySmallBold">My profile</Text>
          </NavActiveLink>
          <CreatorMenu />
        </>
      ) : (
        <>
          <NavActiveLink href="/plan/my-feed">
            <Text size="bodySmallBold">My Feed</Text>
          </NavActiveLink>
          <NavActiveLink href="/">
            <Text size="bodySmallBold">Discover</Text>
          </NavActiveLink>
          <NavActiveLink href="/plan/routines">
            <Text size="bodySmallBold">My Plans</Text>
          </NavActiveLink>
          <NavActiveLink href="/plan">
            <Text size="bodySmallBold">Calendar</Text>
          </NavActiveLink>
        </>
      )}
      <SwitchCreative
        isCreator={Boolean(isCreator)}
        handleChange={handleCreativeChange}
      />
      {currentUser?.admin && (
        <AdminLink
          href={`${process.env.NEXT_PUBLIC_API_HOST}/admin`}
          target="_blank"
        >
          <AdminPanelLabel size="bodySmallBold">Admin panel</AdminPanelLabel>
        </AdminLink>
      )}
      <Notifications />

      <CurrentUserContainer>
        <CurrentUserMenu
          isCreator={Boolean(isCreator)}
          currentUser={currentUser as User}
          logout={logout}
        />
      </CurrentUserContainer>
    </>
  );
}
