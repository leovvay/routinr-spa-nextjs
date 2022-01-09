import React, { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';

import Text from '@components/Text';
import LinkTo from '@components/LinkTo';
import {
  RoutineDashboard,
  useCloneRoutineMutation,
  useDeleteRoutineMutation,
  useUpdateRoutineMutation,
} from '@store/services/routines';
import Button from '@components/Button/Button';

import { Menu, MenuItem } from '@modules/dashboard/components/Menu';

interface RoutineMenuProps {
  routine: RoutineDashboard;
  onDelete(): void;
  onClone(): void;
}

function RoutineMenu({
  routine,
  onDelete,
  onClone,
}: RoutineMenuProps): JSX.Element {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const [updateRoutine] = useUpdateRoutineMutation();
  const [deleteRoutine] = useDeleteRoutineMutation();
  const [cloneRoutine] = useCloneRoutineMutation();

  const handleCloseConfirm = () => {
    setIsConfirmOpen(false);
  };

  const handleOpenConfirm = () => {
    setIsConfirmOpen(true);
  };

  const handleUnPublish = async () => {
    await updateRoutine({
      id: Number(routine.id),
      isPublished: !routine.isPublished,
    });
  };

  const handlePrivate = async () => {
    await updateRoutine({
      id: Number(routine.id),
      isPrivate: !routine.isPrivate,
    });
  };

  const handleDelete = async () => {
    await deleteRoutine(Number(routine.id));
    onDelete();
    handleCloseConfirm();
  };

  const handleClone = async () => {
    await cloneRoutine(Number(routine.id));
    onClone();
  };

  return (
    <Menu>
      <MenuItem onClick={() => {}}>
        <LinkTo href={`/routines/${routine.slug}/edit`}>
          <Text size="bodySmallBold">Edit</Text>
        </LinkTo>
      </MenuItem>
      <MenuItem onClick={handleClone}>
        <Text size="bodySmallBold">Clone</Text>
      </MenuItem>
      {routine.isComplete && (
        <MenuItem onClick={handleUnPublish}>
          <Text size="bodySmallBold">
            {routine.isPublished ? 'Unpublish' : 'Publish'}
          </Text>
        </MenuItem>
      )}
      <MenuItem onClick={handlePrivate}>
        <Text size="bodySmallBold">
          {routine.isPrivate ? 'Make public' : 'Make private'}
        </Text>
      </MenuItem>
      <MenuItem onClick={handleOpenConfirm}>
        <Text size="bodySmallBold">Delete</Text>
      </MenuItem>
      <Dialog
        open={isConfirmOpen}
        onClose={handleCloseConfirm}
        aria-labelledby="confirm-title"
        aria-describedby="confirm-description"
      >
        <DialogTitle id="confirm-title">Delete confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-description">
            Are you sure you want to delete the routine?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} variant="alert">
            Yes
          </Button>
          <Button onClick={handleCloseConfirm} variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Menu>
  );
}

export default RoutineMenu;
