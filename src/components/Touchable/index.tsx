import React, { PropsWithChildren } from 'react';

import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';

export interface TouchableProps extends ButtonBaseProps {
  className?: string;
  component?: React.ElementType;
  onClick(...args: any[]): any;
}

export default function Touchable({
  children,
  onClick,
  className = '',
  component = 'button',
  ...props
}: PropsWithChildren<TouchableProps>): JSX.Element {
  return (
    <ButtonBase
      {...props}
      onClick={onClick}
      className={className}
      disableRipple
      component={component}
    >
      {children}
    </ButtonBase>
  );
}
