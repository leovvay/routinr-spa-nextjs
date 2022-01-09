import React from 'react';
import ReactSelect, { Props } from 'react-select';

import colourStyles from './Select.styled';

export interface SelectOption<T = string | number> {
  value: T;
  label: string | number;
}

export interface SelectProps<IsMultiType extends boolean>
  extends Props<SelectOption, IsMultiType> {
  error?: boolean;
}

function Select<IsMultiType extends boolean>({
  onChange,
  options,
  menuPlacement,
  isMulti,
  isClearable,
  error,
  ...props
}: SelectProps<IsMultiType>): JSX.Element {
  return (
    <ReactSelect
      {...props}
      error={error}
      options={options}
      isMulti={isMulti}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      styles={colourStyles}
      menuPlacement={menuPlacement}
      onChange={onChange}
      isClearable={isClearable}
    />
  );
}

Select.defaultProps = {
  menuPlacement: 'auto',
  isClearable: false,
  isMulti: false,
  error: false,
};

export default Select;
