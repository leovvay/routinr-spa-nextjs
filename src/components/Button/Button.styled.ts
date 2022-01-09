import styled, { css } from 'styled-components';

import { ButtonPrimaryProps } from './Button.types';

const paddingBySize = {
  small: '4px 16px',
  medium: '8px 16px',
  large: '10px 40px',
};

export const ButtonPrimary = styled.button.attrs<ButtonPrimaryProps>(
  ({ disabled }) => ({ disabled })
)<ButtonPrimaryProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 25px;
  border-color: transparent;
  padding: ${({ size = 'medium' }) => paddingBySize[size]};
  cursor: pointer;
  font: 600 14px Muli;
  line-height: inherit;

  background-color: var(--primary-color);
  color: var(--white);

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0 10px 15px rgb(0 31 80 / 17%);
    `}

  &:hover {
    background-color: var(--primary-color-dark);
  }

  &:disabled {
    background-color: var(--grey);
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  border: 2px solid var(--primary-color);
  background-color: var(--white);
  color: var(--text-primary-color);

  ${({ shadow }) =>
    shadow &&
    css`
      border-color: transparent;
    `}

  &:hover {
    background-color: var(--primary-color-light);
    color: var(--white);
  }

  &:disabled {
    background-color: var(--grey);
    color: var(--white);
    border-color: var(--main-border-color);
  }
`;

export const ButtonAlert = styled(ButtonPrimary)`
  && {
    background-color: var(--red);
    color: var(--white);

    &:hover {
      background-color: var(--red-dark);
    }
  }
`;

export const ButtonText = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
`;
