import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';

import Image from '@components/Image';
import Text from '@components/Text';
import MembershipCard from '@components/MembershipCard';

import { MembershipOptionsProps } from '../../MembershipOptions.interfaces';

import {
  MembershipOptionsDesktopCloseButton,
  MembershipOptionsDesktopTitle,
} from './MembershipOptionsDesktop.styled';

type MembershipOptionsDesktopProps = Omit<
  MembershipOptionsProps,
  'open' | 'influencer'
>;

function MembershipOptionsDesktop({
  onClose,
  memberships,
  onBuy,
}: MembershipOptionsDesktopProps): JSX.Element {
  return (
    <>
      <MembershipOptionsDesktopTitle>
        <Image src="/membership-options.svg" width={40} height={31} />
        <Text size="h3" weight={700}>
          Membership options
        </Text>
        <MembershipOptionsDesktopCloseButton
          aria-label="close"
          onClick={onClose}
        >
          <CloseIcon />
        </MembershipOptionsDesktopCloseButton>
      </MembershipOptionsDesktopTitle>
      <DialogContent dividers>
        {memberships.map((membership) => (
          <MembershipCard
            key={membership.id}
            membership={membership}
            variant="horizontal"
            onBuy={() => onBuy(membership)}
          />
        ))}
      </DialogContent>
    </>
  );
}

export default MembershipOptionsDesktop;
