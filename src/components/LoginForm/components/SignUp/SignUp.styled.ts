import styled from 'styled-components';

import Button from '@components/Button';
import LinkTo from '@components/LinkTo';

export const SignUpButton = styled(Button)`
  border-radius: 4px;
`;

export const SignUpFb = styled(SignUpButton)`
  background-color: #475993;

  &:hover {
    background-color: #3f4f85;
  }
`;

export const SignUpGoogle = styled(SignUpButton)`
  background-color: #dd4b39;

  &:hover {
    background-color: #ce4535;
  }
`;

export const SignUpLinks = styled(LinkTo)`
  color: var(--text-primary-color);
`;
