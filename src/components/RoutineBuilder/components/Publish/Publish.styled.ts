import styled from 'styled-components';

import LinkTo from '@components/LinkTo';
import Text from '@components/Text';
import Button from '@components/Button';

export const PublishLink = styled(LinkTo)``;

export const PublishSprucing = styled(Text)`
  color: var(--red);
`;

export const PublishSection = styled.div`
  margin-bottom: 10px;
`;

export const PublishButton = styled(Button)`
  margin-top: 30px;
`;
