import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';

import Text from '@components/Text';

export const PurchaseModalDialog = styled(Dialog)`
  .MuiDialog-paper {
    padding: 20px;

    //@media screen and (min-width: 768px) {
    width: 100%;
    max-width: 480px;
    //}
  }
`;

export const PurchaseModalTitle = styled(Text)`
  display: block;
  margin-bottom: 20px;
`;
