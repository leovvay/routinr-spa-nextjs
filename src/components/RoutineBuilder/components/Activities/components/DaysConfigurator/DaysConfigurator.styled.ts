import styled, { css } from 'styled-components';

import Button from '@components/Button';

export const DaysConfiguratorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 10px 20px;
  background-color: var(--text-routine-builder-color);
  color: var(--white);
`;

export const DaysConfiguratorFirstDayHint = styled.div`
  position: absolute;
  bottom: 55px;
  left: 45px;
`;

export const DaysConfiguratorRepeatDayHint = styled(
  DaysConfiguratorFirstDayHint
)`
  left: 170px;
`;

export const DaysConfiguratorDayButton = styled(Button)<{ $active: boolean }>`
  width: 40px;
  height: 40px;
  background-color: transparent;
  padding: 0;

  ${({ $active }) =>
    $active &&
    css`
      background-color: var(--black);
    `}

  label {
    flex-direction: column;
  }

  &:hover {
    background-color: var(--black);
  }
`;
