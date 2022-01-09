import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import TuneIcon from '@mui/icons-material/Tune';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import DialogActions from '@mui/material/DialogActions';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import CategoriesSelector from '@components/CategoriesSelector';
import Button from '@components/Button/Button';
import { contentTypeHash, sortHash } from '@components/PageFilters/constants';
import { SelectOption } from '@components/Select';
import { useGetCategoriesQuery } from '@store/services/categories';

import {
  FiltersMobileButton,
  FiltersMobileDialog,
  FiltersMobileIcon,
  FiltersMobileOption,
  FiltersMobileOptionText,
  FiltersMobileSection,
  FiltersMobileText,
  FiltersMobileTitle,
  FiltersMobileTitleSection,
} from './FiltersMobile.styled';

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

function FiltersMobile(): JSX.Element {
  const router = useRouter();
  const { data: categories } = useGetCategoriesQuery();

  const [openFilter, setOpenFilter] = useState(false);

  const query = useMemo(
    () => new URLSearchParams(router.query as Record<string, string>),
    [router.query]
  );

  const [contentType, setContentType] = useState('all');
  const [contentSort, setContentSort] = useState('recent');

  const searchingCategories = useMemo(() => {
    const querystring = query.get('categories') || '';
    const queryArray = querystring.split(',').filter(Boolean);

    return queryArray.map((categoryTitle) => {
      const categoryEntity = categories?.find(
        (category) => category.title === categoryTitle
      );
      return {
        value: Number(categoryEntity?.id) ?? categoryTitle,
        label: categoryTitle,
      };
    });
  }, [categories, query]);

  const handleClose = () => setOpenFilter(false);
  const handleApply = () => {
    router.push(`${router.pathname}?${query.toString()}`, undefined, {
      scroll: false,
    });
    handleClose();
  };

  useEffect(() => {
    const queryContentType = query.get('contentType');
    const queryContentSort = query.get('sort');

    if (queryContentType) setContentType(queryContentType);
    if (queryContentSort) setContentSort(queryContentSort);
  }, [query]);

  return (
    <>
      <FiltersMobileButton
        onClick={() => setOpenFilter(true)}
        variant="contained"
        disableFocusRipple
      >
        <TuneIcon />
      </FiltersMobileButton>
      <FiltersMobileDialog
        fullScreen
        open={openFilter}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <FiltersMobileTitleSection>
          <FiltersMobileTitle size="h1" weight={700}>
            Filters
          </FiltersMobileTitle>
          <FiltersMobileIcon>
            <TuneIcon fontSize="large" />
          </FiltersMobileIcon>
        </FiltersMobileTitleSection>
        <FiltersMobileSection>
          <FiltersMobileText>Category</FiltersMobileText>
          <CategoriesSelector
            isClearable
            defaultValue={searchingCategories}
            menuPlacement="bottom"
            onChange={(selectedCategories: SelectOption[]) => {
              if (selectedCategories) {
                const categoryTitles = selectedCategories.map(
                  ({ label }) => label
                );
                query.set('categories', categoryTitles.toString());
              }
            }}
          />
        </FiltersMobileSection>
        <FiltersMobileSection>
          <FiltersMobileText>Content type</FiltersMobileText>
          {Object.entries(contentTypeHash).map(([value, label]) => (
            <FiltersMobileOption
              onClick={() => {
                setContentType(value);
                query.set('contentType', value);
              }}
              key={value}
            >
              <FiltersMobileOptionText>
                {label}
                {value === contentType && <CheckRoundedIcon />}
              </FiltersMobileOptionText>
            </FiltersMobileOption>
          ))}
        </FiltersMobileSection>
        <FiltersMobileSection>
          <FiltersMobileText>Sort by</FiltersMobileText>
          {Object.entries(sortHash).map(([value, label]) => (
            <FiltersMobileOption
              onClick={() => {
                setContentSort(value);
                query.set('sort', value);
              }}
              key={value}
            >
              <FiltersMobileOptionText>
                {label}
                {value === contentSort && <CheckRoundedIcon />}
              </FiltersMobileOptionText>
            </FiltersMobileOption>
          ))}
        </FiltersMobileSection>

        <DialogActions>
          <Button shadow onClick={handleApply}>
            <CheckRoundedIcon />
            Apply
          </Button>
          <Button variant="outlined" onClick={handleClose} shadow>
            Close
          </Button>
        </DialogActions>
      </FiltersMobileDialog>
    </>
  );
}

export default FiltersMobile;
