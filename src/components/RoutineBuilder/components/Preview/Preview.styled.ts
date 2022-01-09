import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';

import Button from '@components/Button';

export const PreviewDialog = styled(Dialog)`
  font-family: var(--font-primary);

  & .MuiDialog-paper {
    padding: 65px 68px 100px;
    background-color: var(--main-bg-color);

    @media screen and (max-width: 768px) {
      padding: 0 0 100px;
    }
  }
`;

export const PreviewExitButton = styled(Button)`
  width: 195px;
  position: fixed;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%, 0);
  z-index: 9;
`;
