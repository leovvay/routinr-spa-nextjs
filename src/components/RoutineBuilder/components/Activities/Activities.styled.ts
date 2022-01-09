import styled from 'styled-components';

import Button from '@components/Button';

export const ActivitiesContainer = styled.div`
  padding-bottom: 120px;
`;

export const ActivitiesCirceButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 20px;

  background-color: var(--primary-color);
  border-radius: 50%;
  color: var(--white);
`;
