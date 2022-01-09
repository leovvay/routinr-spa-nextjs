import styled from 'styled-components';

import Touchable from '@components/Touchable';

// eslint-disable-next-line import/prefer-default-export
export const ButtonAddActivityContainer = styled(Touchable)`
  width: 100%;
  gap: 15px;
  padding: 20px;
  border: 1px dashed var(--main-border-color);
  text-align: center;
  background-color: var(--white);
  color: var(--text-primary-color);
`;
