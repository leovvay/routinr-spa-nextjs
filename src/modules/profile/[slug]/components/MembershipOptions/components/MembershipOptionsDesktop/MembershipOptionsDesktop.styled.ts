import styled from 'styled-components';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

export const MembershipOptionsDesktopTitle = styled(DialogTitle)`
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 400px;
`;

export const MembershipOptionsDesktopCloseButton = styled(IconButton)`
  position: absolute;
  right: 8px;
  top: 8px;
  color: var(--text-primary-color);
`;
