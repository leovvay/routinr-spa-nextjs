import React, { useState } from 'react';

import { useGetCategoriesQuery } from '@store/services/categories';
import {
  FilterPageButton,
  FilterPageCheckIcon,
  FilterPageMenu,
  FilterPageMenuItem,
} from '@components/PageFilters/PageFilter.styled';
import Text from '@components/Text';
import { useURLSearchParams } from '@hooks';

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

function FilterPageCategory(): JSX.Element {
  const { data: categories } = useGetCategoriesQuery();
  const { value, handleChange } = useURLSearchParams('categories');
  const searchingCategories = value || '';

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const menuList =
    categories?.map<MenuListItem>((category) => ({
      value: category.title,
      label: category.title,
    })) ?? [];

  const handleOpen = (event: { currentTarget: Element }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (item: MenuListItem) => {
    const categoriesList = new Set(
      searchingCategories && searchingCategories.split(',')
    );

    if (categoriesList.has(item.value)) {
      categoriesList.delete(item.value);
    } else {
      categoriesList.add(item.value);
    }

    handleChange(Array.from(categoriesList).toString());

    handleClose();
  };

  return (
    <div>
      <FilterPageButton
        aria-controls="filter-page-category"
        aria-haspopup="true"
        onClick={handleOpen}
        $inverse
      >
        Category
      </FilterPageButton>
      <FilterPageMenu
        id="filter-page-category"
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuList.map((listItem) => {
          const checked = searchingCategories.includes(listItem.value);
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

export default FilterPageCategory;
