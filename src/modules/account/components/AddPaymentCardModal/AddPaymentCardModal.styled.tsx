import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';

// eslint-disable-next-line import/prefer-default-export
export const AddPaymentCardModalDialog = styled(Dialog)`
  & .MuiDialog-paper {
    width: 100%;
  }

  .StripeElement {
    padding: 16px;
    border: 1px solid var(--main-border-color);
    border-radius: 4px;
  }
`;
