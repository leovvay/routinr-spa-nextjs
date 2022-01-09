import React, { PropsWithChildren, ReactNode, useState } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import MuiMenu from '@mui/material/Menu';

import { MenuButton } from './Menu.styled';

function Menu({
  children,
}: PropsWithChildren<Record<string, ReactNode[]>>): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuButton onClick={handleClick}>
        <MoreVertIcon />
      </MenuButton>
      <MuiMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {children}
      </MuiMenu>
    </div>
  );
}

export default Menu;
