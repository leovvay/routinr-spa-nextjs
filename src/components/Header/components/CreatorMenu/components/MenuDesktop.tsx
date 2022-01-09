import React, { useCallback } from 'react';

import Popover from '@components/Popover';
import Button from '@components/Button';

import MenuLinks from './MenuLinks';

import { CreatorMenuCard } from '../CreatorMenu.styled';

const id = 'creator-popper';

function MenuDesktop(): JSX.Element {
  const anchorEl = useCallback(
    () => (
      <Button fullWidth={false} onClick={() => {}} size="small">
        Create
      </Button>
    ),
    []
  );

  return (
    <Popover id={id} AnchorElement={anchorEl}>
      <CreatorMenuCard>
        <MenuLinks />
      </CreatorMenuCard>
    </Popover>
  );
}

export default MenuDesktop;
