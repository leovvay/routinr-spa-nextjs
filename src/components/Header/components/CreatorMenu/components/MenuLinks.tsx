import React, { useCallback, useState } from 'react';

import { useDashboardInfoQuery } from '@store/services/users';
import Image from '@components/Image';
import Text from '@components/Text';
import PostCreatorModal from '@components/CreatorModals/PostCreatorModal';
import MembershipCreatorModal from '@components/CreatorModals/MembershipCreatorModal';

import { CreatorMenuItem, CreatorMenuItemLink } from '../CreatorMenu.styled';

function MenuLinks(): JSX.Element {
  const { data: dashboardInfo } = useDashboardInfoQuery();

  const [isMembershipCreateOpen, setIsMembershipCreateOpen] = useState(false);
  const [isPostCreateOpen, setIsPostCreateOpen] = useState(false);

  const openCreateMembershipModal = useCallback(() => {
    setIsMembershipCreateOpen(true);
  }, []);

  const closeCreateMembershipModal = useCallback(() => {
    setIsMembershipCreateOpen(false);
  }, []);

  const openCreatePostModal = useCallback(() => {
    setIsPostCreateOpen(true);
  }, []);

  const closeCreatePostModal = useCallback(() => {
    setIsPostCreateOpen(false);
  }, []);

  const isStripeVerified =
    dashboardInfo?.stripeAccountStatus === 'verified' &&
    dashboardInfo.stripeAccount?.accountType === 'express';

  return (
    <>
      <CreatorMenuItemLink href="/routine-builder">
        <Image src="/routine.svg" width={40} height={40} alt="routine" />
        <Text size="bodySmall">Routine</Text>
      </CreatorMenuItemLink>

      <CreatorMenuItem onClick={openCreatePostModal}>
        <Image src="/post.svg" width={40} height={40} alt="post" />
        <Text size="bodySmall">Post</Text>
      </CreatorMenuItem>
      {isStripeVerified && (
        <CreatorMenuItem onClick={openCreateMembershipModal}>
          <Image
            src="/membership.svg"
            width={40}
            height={40}
            alt="membership"
          />
          <Text size="bodySmall">Membership</Text>
        </CreatorMenuItem>
      )}
      <PostCreatorModal
        open={isPostCreateOpen}
        onClose={closeCreatePostModal}
      />
      <MembershipCreatorModal
        open={isMembershipCreateOpen}
        onClose={closeCreateMembershipModal}
      />
    </>
  );
}

export default MenuLinks;
