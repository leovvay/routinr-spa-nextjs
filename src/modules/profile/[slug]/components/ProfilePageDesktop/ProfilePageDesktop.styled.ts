import styled from 'styled-components';
import Stack from '@mui/material/Stack';

import ButtonLoadMore from '@components/ButtonLoadMore';

// eslint-disable-next-line import/prefer-default-export
export const ProfilePageDesktopLoadMore = styled(ButtonLoadMore)`
  width: 275px;
  margin: 0 auto;
`;

export const ProfilePageDesktopEditInfo = styled(Stack)`
  position: absolute;
  right: 68px;
  top: 20px;
  z-index: 1;
`;
