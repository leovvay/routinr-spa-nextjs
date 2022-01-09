import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export default styled(TextField)`
  & .MuiInputBase-root {
    background-color: var(--white);
  }

  & .MuiInputBase-root,
  .MuiFormHelperText-root {
    font-family: var(--font-primary);
  }

  & .MuiFormHelperText-root.Mui-error {
    color: var(--red);
  }
`;
