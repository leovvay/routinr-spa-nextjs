import React, { useCallback } from 'react';

import Image from '@components/Image';
import {
  useGetMyNotificationQuery,
  useMarkAllAsReadMutation,
} from '@store/services/notifications';
import Popover from '@components/Popover';
import Text from '@components/Text';

import NotificationCard from './components/NotificationCard/NotificationCard';

import {
  MarkAllButton,
  MessagesList,
  MessagesListContainer,
  NoMessagesText,
  NotificationsContainer,
} from './Notifications.styled';

export default function Notifications(): JSX.Element {
  const { data: notifications } = useGetMyNotificationQuery();
  const [markAllAsRead] = useMarkAllAsReadMutation();

  const isAllRead = notifications?.length === 0;

  const id = 'notifications-popper';
  const anchorEl = useCallback(
    () => (
      <Image
        src={isAllRead ? '/notifications.svg' : '/notifications-unread.svg'}
        alt="notifications"
        width={27}
        height={27}
      />
    ),
    [isAllRead]
  );
  return (
    <NotificationsContainer>
      <Popover id={id} AnchorElement={anchorEl}>
        <MessagesListContainer>
          {Boolean(notifications?.length) && (
            <MarkAllButton onClick={markAllAsRead as () => void}>
              <Text size="bodySmallBold">Mark all as Read</Text>
            </MarkAllButton>
          )}

          {notifications?.length ? (
            <MessagesList>
              {notifications?.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </MessagesList>
          ) : (
            <NoMessagesText>No messages</NoMessagesText>
          )}
        </MessagesListContainer>
      </Popover>
    </NotificationsContainer>
  );
}
