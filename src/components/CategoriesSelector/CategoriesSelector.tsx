import React, { useMemo } from 'react';

import { useGetCategoriesQuery } from '@store/services/categories';
import Select, { SelectOption } from '@components/Select';
import { SelectProps } from '@components/Select/Select';

interface CategoriesSelectorProps extends SelectProps<true> {
  onChange(values: SelectOption | readonly SelectOption[] | null): void;
}

function CategoriesSelector({
  onChange,
  ...props
}: CategoriesSelectorProps): JSX.Element {
  const { data } = useGetCategoriesQuery();

  const options = useMemo(
    () =>
      data?.map((category) => ({
        value: Number(category.id),
        label: category.title,
      })) || [],
    [data]
  );

  return (
    <Select
      options={options}
      isMulti
      menuPlacement="top"
      onChange={onChange}
      {...props}
    />
  );
}

export default CategoriesSelector;
