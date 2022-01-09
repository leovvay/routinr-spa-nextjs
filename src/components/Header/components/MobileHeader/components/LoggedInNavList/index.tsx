import React, { useState } from 'react';

import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';

import LinkTo, { LinkToLegacyApp } from '@components/LinkTo';
import Text from '@components/Text';
import { useUser } from '@hooks';

import CreatorMenu from '../../../CreatorMenu';
import SwitchCreative from '../../../SwitchCreative';
import NavListItem from '../NavListItem';

import { LogoutButton } from '../../MobileHeader.styled';

export default function LoggedInNavList(): JSX.Element {
  const { currentUser, logout } = useUser();

  const [isCreator, setIsCreator] = useState(false);

  const notificationsCount = currentUser?.unreadNotificationsCount;

  const handleCreativeChange = () => setIsCreator((prev) => !prev);

  return (
    <>
      <NavListItem>
        <SwitchCreative
          isCreator={isCreator}
          handleChange={handleCreativeChange}
          fullWidth
        />
      </NavListItem>
      <Divider />
      {isCreator ? (
        <>
          <NavListItem>
            <CreatorMenu />
          </NavListItem>
          <NavListItem>
            <LinkTo href="/dashboard">
              <Text size="body">Dashboard</Text>
            </LinkTo>
          </NavListItem>
          <NavListItem>
            <LinkTo href="/account">
              <Text size="body">Account settings</Text>
            </LinkTo>
          </NavListItem>
          <NavListItem>
            <LinkTo href={`/profile/${currentUser?.slug}`}>
              <Text size="body">My profile</Text>
            </LinkTo>
          </NavListItem>
        </>
      ) : (
        <>
          <NavListItem>
            <LinkTo href="/plan/my-feed">
              <Text size="body">My Feed</Text>
            </LinkTo>
          </NavListItem>
          <NavListItem>
            <LinkTo href="/">
              <Text size="body">Discover</Text>
            </LinkTo>
          </NavListItem>
          <NavListItem>
            <LinkTo href="/plan/routines">
              <Text size="body">My plans</Text>
            </LinkTo>
          </NavListItem>
          <NavListItem>
            <LinkTo href="/plan">
              <Text size="body">Calendar</Text>
            </LinkTo>
          </NavListItem>
        </>
      )}
      <NavListItem>
        <LinkToLegacyApp href="/notifications">
          <Badge color="secondary" badgeContent={notificationsCount}>
            <Text size="body">Notifications</Text>
          </Badge>
        </LinkToLegacyApp>
      </NavListItem>
      <Divider />
      {isCreator ? (
        <NavListItem>
          <LinkTo href="/">
            <Text size="body">Discover</Text>
          </LinkTo>
        </NavListItem>
      ) : (
        <>
          <NavListItem>
            <LinkTo href={`/profile/${currentUser?.slug}`}>
              <Text size="body">My profile</Text>
            </LinkTo>
          </NavListItem>
          <NavListItem>
            <LinkTo href="/account">
              <Text size="body">Account settings</Text>
            </LinkTo>
          </NavListItem>
        </>
      )}
      <NavListItem>
        <LinkTo href="https://routinr.zendesk.com/hc/en-us" target="__blank">
          <Text size="body">FAQ</Text>
        </LinkTo>
      </NavListItem>
      <NavListItem>
        <LogoutButton onClick={logout}>
          <Text size="body">Logout</Text>
        </LogoutButton>
      </NavListItem>
      {currentUser?.admin && (
        <>
          <Divider />
          <NavListItem>
            <LinkToLegacyApp
              href={`${process.env.API_HOST}/admin`}
              target="_blank"
            >
              <Text size="body">Admin panel</Text>
            </LinkToLegacyApp>
          </NavListItem>
        </>
      )}
    </>
  );
}
