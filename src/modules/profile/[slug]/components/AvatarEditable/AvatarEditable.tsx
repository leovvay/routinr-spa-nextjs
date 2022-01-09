import React, { useState } from 'react';

import { Influencer, useUpdateMeMutation } from '@store/services/users';
import MediaInput from '@store/services/common/dto/media.input';
import Touchable from '@components/Touchable';

import UploaderModal from '@modules/profile/[slug]/components/UploaderModal';
import { InfluencerPageAvatar } from '@modules/profile/[slug]/index.styled';

interface AvatarEditableProps {
  influencer: Influencer;
  editable: boolean;
}
function AvatarEditable({
  influencer,
  editable,
}: AvatarEditableProps): JSX.Element {
  const [updateMe, { isLoading }] = useUpdateMeMutation();

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  return editable ? (
    <>
      <Touchable onClick={() => setOpen(true)}>
        <InfluencerPageAvatar
          src={influencer.avatar}
          width={150}
          height={150}
        />
      </Touchable>
      <UploaderModal
        open={open}
        onClose={handleClose}
        onFile={async (file) => {
          if (file && !isLoading) {
            await updateMe({ avatar: new MediaInput(file) });
            handleClose();
          }
        }}
      />
    </>
  ) : (
    <InfluencerPageAvatar src={influencer.avatar} width={150} height={150} />
  );
}

export default AvatarEditable;
