import React, { useState } from 'react';

import Button from '@components/Button';
import Text from '@components/Text';

import MenuLinks from '../MenuLinks';

import { MenuMobileContainer, Dialog } from './MenuMobile.styled';

function MenuMobile(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <MenuMobileContainer>
      <Button onClick={handleOpen} fullWidth>
        <Text size="body">Create</Text>
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={isOpen}
      >
        <MenuLinks />
      </Dialog>
    </MenuMobileContainer>
  );
}

export default MenuMobile;
