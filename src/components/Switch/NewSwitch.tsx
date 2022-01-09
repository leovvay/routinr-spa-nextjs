import styled from 'styled-components';
import Switch, { SwitchProps } from '@mui/material/Switch';

export default styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))`
  width: 42px;
  height: 26px;
  padding: 0;
  & .MuiSwitch-switchBase {
    padding: 0;
    margin: 2px;
    transition-duration: 300ms;
    &.Mui-checked {
      transform: translateX(16px);
      color: #fff;

      & + .MuiSwitch-track {
        background-color: #65c466;
        opacity: 1;
        border: 0;
      }
      &.Mui-disabled + .MuiSwitch-track {
        opacity: 0.5;
      }
    }
    &.Mui-focusVisible .MuiSwitch-thumb {
      color: #33cf4d;
      border: 6px solid #fff;
    }
    &.Mui-disabled .MuiSwitch-thumb {
      color: var(--grey);
    }
    &.Mui-disabled + .MuiSwitch-track {
      opacity: 0.7;
    }
  }
  & .MuiSwitch-thumb {
    box-sizing: border-box;
    width: 22px;
    height: 22px;
  }
  & .MuiSwitch-track {
    border-radius: 13px;
    background-color: #e9e9ea;
    opacity: 1;
    transition: background-color 500ms;
  }
`;
