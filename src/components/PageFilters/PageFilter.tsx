import React from 'react';

import Image from '@components/Image';

import FilterPageCategory from './components/FilterPageCategory';
import FilterPageSort from './components/FilterPageSort';
import FilterPageContent from './components/FilterPageContent';

import {
  PageFilterContainer,
  PageFilterIconContainer,
} from './PageFilter.styled';

interface PageFilterProps {
  categoryFilter?: boolean;
}

function PageFilter({ categoryFilter }: PageFilterProps): JSX.Element {
  return (
    <PageFilterContainer>
      <PageFilterIconContainer>
        <Image src="/filter-settings.svg" width={15} height={15} alt="filter" />
      </PageFilterIconContainer>
      <FilterPageContent />
      {categoryFilter && <FilterPageCategory />}
      <FilterPageSort />
    </PageFilterContainer>
  );
}

PageFilter.defaultProps = {
  categoryFilter: false,
};

export default PageFilter;
