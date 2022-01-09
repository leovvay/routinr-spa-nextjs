import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';

// eslint-disable-next-line import/prefer-default-export
export const MembershipOptionsDialog = styled(Dialog)`
  & .MuiBackdrop-root {
    background-color: var(--modal-backdrop-color);
    opacity: 0.8 !important;
  }

  @media screen and (max-width: 768px) {
    & .MuiPaper-root {
      background-color: var(--main-bg-color);
    }
  }
`;
