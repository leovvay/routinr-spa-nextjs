import React, { useMemo } from 'react';

import Select, { SelectOption } from '@components/Select';
import { SelectProps } from '@components/Select/Select';

import prices from './PriceSelector.prices';

interface CategoriesSelectorProps extends SelectProps<false> {
  onChange(values: SelectOption | readonly SelectOption[] | null): void;
  error?: boolean;
}

function PriceSelector({
  onChange,
  error,
  ...props
}: CategoriesSelectorProps): JSX.Element {
  const options = useMemo<SelectOption<number>[]>(
    () =>
      prices.map((price) => ({
        value: price,
        label: price,
      })) || [],
    []
  );

  return (
    <Select
      {...props}
      error={error}
      options={options}
      onChange={onChange}
      menuPlacement={props.menuPlacement || 'top'}
    />
  );
}

PriceSelector.defaultProps = {
  error: false,
};

export default PriceSelector;
