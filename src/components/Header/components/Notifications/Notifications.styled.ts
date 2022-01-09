import styled from 'styled-components';

import Touchable from '@components/Touchable';
import { TextLight } from '@components/Text';

export const NotificationsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const MessagesListContainer = styled.div`
  padding: 16px;

  background-color: var(--grey);
`;

export const MessagesList = styled.div`
  display: grid;
  grid-gap: 10px;
`;

export const MarkAllButton = styled(Touchable)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  color: var(--text-primary-color);
`;

export const NoMessagesText = styled(TextLight)`
  background-color: white;
  border-radius: 5px;
  padding: 5px;
`;
