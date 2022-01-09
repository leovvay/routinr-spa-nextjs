import React from 'react';
import { useRouter } from 'next/router';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DialogActions } from '@mui/material';
import { useSnackbar } from 'notistack';

import { useUser } from '@hooks';
import { getLegacyAuthHeaders } from '@utils';
import Button from '@components/Button';
import Text from '@components/Text';

interface RemoveAccountModalProps {
  open: boolean;
  onClose(): void;
}

function RemoveAccountModal({
  open,
  onClose,
}: RemoveAccountModalProps): JSX.Element {
  const { currentUser, logout } = useUser();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const handleRemove = async () => {
    if (currentUser) {
      const headers = {
        'content-type': 'application/json',
        accept: 'application/json',
        ...getLegacyAuthHeaders(),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LEGACY_API_HOST}/api/v1/users/${currentUser.id}`,
        {
          method: 'DELETE',
          headers,
        }
      );

      if (!response.ok) {
        const text = await response.json();
        enqueueSnackbar(text.errors[0].detail, {
          variant: 'error',
        });
      } else {
        enqueueSnackbar('Your account was removed!', {
          variant: 'success',
        });
        logout();
        router.push('/');
      }
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Text size="h6">Remove account</Text>
      </DialogTitle>
      <DialogContent>
        Are you sure you want to remove your account?
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="alert" onClick={handleRemove}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RemoveAccountModal;
