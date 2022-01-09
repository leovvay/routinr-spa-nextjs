import styled from 'styled-components';
import MuiDialog from '@mui/material/Dialog';

export const MenuMobileContainer = styled.div`
  width: 100%;
`;

export const Dialog = styled(MuiDialog)`
  & .MuiDialog-paper {
    position: absolute;
    bottom: 0;

    width: calc(100% - 20px);
    margin: 10px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    padding: 24px;
  }
`;
