import React, { useState } from 'react';

import Text from '@components/Text';
import { useURLSearchParams } from '@hooks';

import { contentTypeHash } from '../../constants';

import {
  FilterPageButton,
  FilterPageCheckIcon,
  FilterPageMenu,
  FilterPageMenuItem,
} from '../../PageFilter.styled';

const anchorOrigin = {
  vertical: 'bottom' as const,
  horizontal: 'center' as const,
};

const transformOrigin = {
  vertical: 'top' as const,
  horizontal: 'center' as const,
};

interface MenuListItem {
  value: string;
  label: string;
}

const menuList = Object.entries(contentTypeHash).map<MenuListItem>(
  ([value, label]) => ({
    value,
    label,
  })
);

function FilterPageContent(): JSX.Element {
  const { value, handleChange } = useURLSearchParams('contentType');
  const contentType = value || 'all';

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleOpen = (event: { currentTarget: Element }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (item: MenuListItem) => {
    handleChange(item.value);
    handleClose();
  };

  return (
    <div>
      <FilterPageButton
        aria-controls="filter-page-content"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        {contentTypeHash[contentType]}
      </FilterPageButton>
      <FilterPageMenu
        id="filter-page-content"
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuList.map((listItem) => {
          const checked = contentType === listItem.value;

          return (
            <FilterPageMenuItem
              key={listItem.value}
              checked={checked}
              onClick={() => handleClick(listItem)}
            >
              <Text>{listItem.label}</Text>
              {checked && <FilterPageCheckIcon />}
            </FilterPageMenuItem>
          );
        })}
      </FilterPageMenu>
    </div>
  );
}

export default FilterPageContent;
