import React, { memo, useCallback } from 'react';

import { DateTime } from 'luxon';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import Image from '@components/Image';
import {
  Notification,
  useMarkAsReadMutation,
} from '@store/services/notifications';
import Text, { TextLight } from '@components/Text';
import {
  NotificationCardContainer,
  NotificationCardBody,
} from '@components/Header/components/Notifications/components/NotificationCard/NotificationCard.styled';
import Touchable from '@components/Touchable';

interface NotificationCardProps {
  notification: Notification;
}

function NotificationCard({
  notification,
}: NotificationCardProps): JSX.Element {
  const [markAsRead] = useMarkAsReadMutation();

  const created = DateTime.fromISO(notification.createdAt).toRelative();

  const markNotificationAsRead = useCallback(
    () => markAsRead(Number(notification.id)),
    [markAsRead, notification.id]
  );

  return (
    <NotificationCardContainer>
      <div>
        <Image src="/logoR.svg" alt="logo" width={40} height={40} />
      </div>
      <NotificationCardBody>
        <Text size="bodyCaptionBold">{notification.title}</Text>
        <Text size="bodyCaption" as="p">
          {notification.message}
        </Text>
        <div>
          <TextLight size="bodyCaptionSmall">{created}</TextLight>
        </div>
      </NotificationCardBody>
      <div>
        <Touchable onClick={markNotificationAsRead}>
          <CloseRoundedIcon />
        </Touchable>
      </div>
    </NotificationCardContainer>
  );
}

export default memo(NotificationCard);
