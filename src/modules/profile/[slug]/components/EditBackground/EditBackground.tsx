import React, { useState } from 'react';

import Text from '@components/Text';
import Button from '@components/Button/Button';
import { useUpdateMeMutation } from '@store/services/users';
import MediaInput from '@store/services/common/dto/media.input';

import UploaderModal from '@modules/profile/[slug]/components/UploaderModal';

function EditBackground(): JSX.Element {
  const [updateMe, { isLoading }] = useUpdateMeMutation();

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  return (
    <>
      <Button variant="outlined" size="large" onClick={() => setOpen(true)}>
        <Text weight={700}>Edit background</Text>
      </Button>
      <UploaderModal
        open={open}
        onClose={handleClose}
        onFile={async (file) => {
          if (file && !isLoading) {
            await updateMe({ background: new MediaInput(file) });
            handleClose();
          }
        }}
      />
    </>
  );
}

export default EditBackground;
