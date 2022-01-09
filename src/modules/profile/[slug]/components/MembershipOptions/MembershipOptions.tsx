import React from 'react';

import { useIsMobileVersion } from '@hooks';

import MembershipOptionsDesktop from './components/MembershipOptionsDesktop';
import MembershipOptionsMobile from './components/MembershipOptionsMobile';
import { MembershipOptionsProps } from './MembershipOptions.interfaces';

import { MembershipOptionsDialog } from './MembershipOptions.styled';

function MembershipOptions({
  open,
  onClose,
  influencer,
  memberships,
  onBuy,
}: MembershipOptionsProps): JSX.Element {
  const isMobile = useIsMobileVersion();

  return (
    <MembershipOptionsDialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
    >
      {isMobile ? (
        <MembershipOptionsMobile
          influencer={influencer}
          memberships={memberships}
          onBuy={onBuy}
          onClose={onClose}
        />
      ) : (
        <MembershipOptionsDesktop
          onClose={onClose}
          onBuy={onBuy}
          memberships={memberships}
        />
      )}
    </MembershipOptionsDialog>
  );
}

export default MembershipOptions;
