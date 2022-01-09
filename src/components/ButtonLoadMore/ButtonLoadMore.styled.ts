import styled from 'styled-components';

import Button from '@components/Button';

// eslint-disable-next-line import/prefer-default-export
export const ButtonLoadMoreStyled = styled(Button)`
  background-color: var(--white);
  color: var(--text-primary-color);

  &:hover {
    color: var(--white);
  }

  &:disabled {
    background-color: var(--white);
    color: var(--grey);
  }
`;
