import styled from 'styled-components';
import OutlinedInput from '@mui/material/OutlinedInput';

const SearchInput = styled(OutlinedInput)`
  font-family: Muli, sans-serif !important;
  font-weight: 600 !important;
  height: 40px;
  box-shadow: 0 1px 3.76px 0.24px rgb(0 0 0 / 29%);
  background-color: var(--main-card-color);
  transition: all 0.2s;
  border: none;

  &:hover {
    box-shadow: 0 1px 3.76px 0.24px rgb(0 0 0 / 49%);
  }

  fieldset {
    display: none;
  }
`;

export default SearchInput;
