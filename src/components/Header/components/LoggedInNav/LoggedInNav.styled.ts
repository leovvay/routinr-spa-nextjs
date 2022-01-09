import styled from 'styled-components';

import LinkTo from '@components/LinkTo';
import Text from '@components/Text';

export const AdminLink = styled(LinkTo)`
  display: flex;
  align-items: center;
`;

export const AdminPanelLabel = styled(Text)`
  border-left: 2px solid var(--grey);
  padding-left: 30px;
`;

export const CurrentUserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
