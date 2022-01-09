import styled from 'styled-components';

import Text from '@components/Text';
import Touchable from '@components/Touchable';

export const MembershipCardContainer = styled(Touchable)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const MembershipCardCover = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  margin-bottom: 10px;
`;

export const MembershipCardCreator = styled(Text)`
  display: block;
  color: var(--text-primary-color);
  margin-bottom: 10px;
`;
