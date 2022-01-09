import styled from 'styled-components';
import MuiSwitch from '@mui/material/Switch';

const Switch = styled(MuiSwitch)`
  & .Mui-checked {
    color: var(--primary-color);
  }

  & .Mui-checked + .MuiSwitch-track {
    background-color: var(--primary-color);
  }
`;

export default Switch;
