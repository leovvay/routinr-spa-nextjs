import React, { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';

import Text from '@components/Text';
import Button from '@components/Button/Button';
import { Post, useDeletePostMutation } from '@store/services/posts';
import PostCreatorModal from '@components/CreatorModals/PostCreatorModal';

import { Menu, MenuItem } from '@modules/dashboard/components/Menu';

interface PostMenuProps {
  post: Post;
  onDelete(): void;
  onUpdate(): void;
}

function PostMenu({ post, onDelete, onUpdate }: PostMenuProps): JSX.Element {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const [deletePost] = useDeletePostMutation();

  const handleCloseEdit = () => {
    setIsEditOpen(false);
    onUpdate();
  };

  const handleOpenEdit = () => {
    setIsEditOpen(true);
  };

  const handleCloseConfirm = () => {
    setIsConfirmOpen(false);
  };

  const handleOpenConfirm = () => {
    setIsConfirmOpen(true);
  };

  const handleDelete = async () => {
    await deletePost(Number(post.id));
    onDelete();
    handleCloseConfirm();
  };

  return (
    <Menu>
      <MenuItem onClick={handleOpenEdit}>
        <Text size="bodySmallBold">Edit</Text>
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
            Are you sure you want to delete the post?
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
      <PostCreatorModal
        open={isEditOpen}
        onClose={handleCloseEdit}
        post={post}
      />
    </Menu>
  );
}

export default PostMenu;
