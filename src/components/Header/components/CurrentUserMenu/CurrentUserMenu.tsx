import React, { useCallback } from 'react';

import Avatar from '@components/Avatar';
import Popover from '@components/Popover';
import { User } from '@store/services/users';
import Touchable from '@components/Touchable';

import {
  CurrentUserMenuCard,
  CurrentUserMenuContainer,
  CurrentUserMenuItem,
  MenuLink,
} from './CurrentUserMenu.styled';

interface CurrentUserMenuProps {
  isCreator: boolean;
  currentUser: User;
  logout(): void;
}

export default function CurrentUserMenu({
  isCreator,
  currentUser,
  logout,
}: CurrentUserMenuProps): JSX.Element {
  const id = 'creator-popper';
  const anchorEl = useCallback(
    () => <Avatar src={currentUser.avatar} />,
    [currentUser.avatar]
  );

  return (
    <CurrentUserMenuContainer>
      <Popover id={id} AnchorElement={anchorEl}>
        <CurrentUserMenuCard>
          {isCreator ? (
            <CurrentUserMenuItem>
              <MenuLink href="/">
                <span>Discover</span>
              </MenuLink>
            </CurrentUserMenuItem>
          ) : (
            <>
              <CurrentUserMenuItem>
                <MenuLink href={`/profile/${currentUser?.slug}`}>
                  <span>My profile</span>
                </MenuLink>
              </CurrentUserMenuItem>
              <CurrentUserMenuItem>
                <MenuLink href="/account">
                  <span>Account settings</span>
                </MenuLink>
              </CurrentUserMenuItem>
            </>
          )}

          <CurrentUserMenuItem>
            <MenuLink
              href="https://routinr.zendesk.com/hc/en-us"
              target="__blank"
            >
              <span>FAQ</span>
            </MenuLink>
          </CurrentUserMenuItem>
          <CurrentUserMenuItem>
            <Touchable onClick={logout}>
              <MenuLink href="#">
                <span>Logout</span>
              </MenuLink>
            </Touchable>
          </CurrentUserMenuItem>
        </CurrentUserMenuCard>
      </Popover>
    </CurrentUserMenuContainer>
  );
}
