import React, { MouseEventHandler } from 'react';

export interface ButtonProps {
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
  variant?: 'primary' | 'outlined' | 'alert';
  disabled?: boolean;
  shadow?: boolean;
  className?: string;
  startIcon?: React.ReactNode;
}

export interface ButtonPrimaryProps {
  disabled?: ButtonProps['disabled'];
  shadow?: ButtonProps['shadow'];
  size?: ButtonProps['size'];
  $fullWidth?: ButtonProps['fullWidth'];
}
