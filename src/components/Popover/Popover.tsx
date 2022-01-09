import React, { PropsWithChildren, useState } from 'react';

import { PopoverProps as MuiPopoverProps } from '@mui/material/Popover';

import Touchable from '@components/Touchable';

import { PopoverRoot, PopoverContainer } from './Popover.styled';

interface PopoverProps extends Partial<MuiPopoverProps> {
  AnchorElement: React.ComponentType;
  onOpen?(): void;
  onClose?(): void;
  id?: string;
  className?: string;
}

const popoverConfig = {
  anchorOrigin: {
    vertical: 'bottom' as const,
    horizontal: 'center' as const,
  },
  transformOrigin: {
    horizontal: 'center' as const,
    vertical: -5,
  },
};

export default function Popover({
  AnchorElement,
  id,
  children,
  onClose,
  onOpen,
  anchorOrigin,
  transformOrigin,
  className,
}: PropsWithChildren<PopoverProps>): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);

  const handleClick = (event: { currentTarget: Element }) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);

    if (onOpen) onOpen();
  };
  const handleClose = () => {
    setAnchorEl(null);

    if (onClose) onClose();
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? id : '';
  return (
    <PopoverContainer className={className}>
      <Touchable
        aria-describedby={popoverId}
        onClick={handleClick}
        component="div"
      >
        <AnchorElement />
      </Touchable>

      <PopoverRoot
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin || popoverConfig.anchorOrigin}
        transformOrigin={transformOrigin || popoverConfig.transformOrigin}
      >
        {children}
      </PopoverRoot>
    </PopoverContainer>
  );
}

Popover.defaultProps = {
  onOpen: () => {},
  onClose: () => {},
  id: '',
  className: undefined,
};
