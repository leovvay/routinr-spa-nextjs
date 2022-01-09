import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';

export const SearchLibraryDrawer = styled(Drawer)`
  z-index: 1300;
`;

export const SearchLibraryHeader = styled.div`
  padding: 20px;
`;

export const SearchLibraryTabs = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
  color: var(--black);

  .MuiTab-wrapper {
    font-family: Muli, sans-serif;
    font-weight: 700;
  }

  .MuiTabs-indicator {
    background-color: var(--primary-color);
  }

  .MuiTab-textColorInherit.Mui-selected {
    color: var(--primary-color);
  }
`;
