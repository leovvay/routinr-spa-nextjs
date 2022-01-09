import styled from 'styled-components';

import LinkTo from '@components/LinkTo';
import Text from '@components/Text';

export const RoutineCreatorLinkLink = styled(LinkTo)`
  display: inline-flex;
  gap: 17px;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;

export const RoutineCreatorHandle = styled(Text)`
  color: var(--text-primary-color);
`;
