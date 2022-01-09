import React from 'react';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';

import LoginForm from '@components/LoginForm';
import { LoginModalDialog } from '@components/LoginModal/LoginModal.styled';
import { useIsMobileVersion } from '@hooks';

interface LoginModalProps {
  open: boolean;
  onClose(): void;
}

function LoginModal({ open, onClose }: LoginModalProps): JSX.Element {
  const isMobile = useIsMobileVersion();

  return (
    <LoginModalDialog open={open} onClose={onClose} fullScreen={isMobile}>
      {isMobile && (
        <Stack direction="row-reverse">
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      )}
      <LoginForm />
    </LoginModalDialog>
  );
}

export default LoginModal;
