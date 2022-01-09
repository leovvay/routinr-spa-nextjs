import React, { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { ButtonProps } from './Button.types';

import {
  ButtonAlert,
  ButtonPrimary,
  ButtonSecondary,
  ButtonText,
} from './Button.styled';

function Button({
  children,
  fullWidth = false,
  onClick = () => {},
  size,
  type = 'button',
  variant = 'primary',
  shadow = false,
  className = '',
  startIcon,
  ...props
}: PropsWithChildren<ButtonProps>): JSX.Element {
  let ButtonComponent = ButtonPrimary;
  if (variant === 'outlined') ButtonComponent = ButtonSecondary;
  if (variant === 'alert') ButtonComponent = ButtonAlert;

  return (
    <ButtonComponent
      onClick={onClick}
      $fullWidth={fullWidth}
      size={size}
      type={type}
      shadow={shadow}
      className={className}
      {...props}
    >
      {startIcon}
      <ButtonText>{children}</ButtonText>
    </ButtonComponent>
  );
}

export default styled(Button)``;
