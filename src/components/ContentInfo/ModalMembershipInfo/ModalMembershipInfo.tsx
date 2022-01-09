import React, { memo, useMemo } from 'react';

import {
  useGetSubscriptionByMembershipQuery,
  useUpdateSubscriptionStatusMutation,
} from '@store/services/purchases';
import { MembershipAsSubscription } from '@store/services/membership/membership.interface';
import Image from '@components/Image';
import Text from '@components/Text';
import Touchable from '@components/Touchable';
import Button from '@components/Button';
import Loader from '@components/Loader';

import {
  ContentInfoDialogHeaderActions,
  ContentInfoDialogTitle,
  ContentInfoDialogAvatar,
  ContentInfoDialogHeaderInfoContainer,
  ContentInfoDialogHeaderContentInfo,
  ContentInfoDialogContentSection,
  ContentInfoCoverGradient,
  ContentInfoCoverContainer,
} from '../ContentInfo.styled';
import {
  ModalMembershipInfoActions,
  ModalMembershipInfoContent,
  ModalMembershipInfoContentContainer,
  ModalMembershipInfoContentTypeContainer,
  ModalMembershipInfoDescription,
  ModalMembershipInfoDialog,
} from './ModalMembershipInfo.styled';

interface ModalMembershipInfoProps {
  membership: MembershipAsSubscription;
  onClose(): void;
  onUpdate(): void;
}

function ModalMembershipInfo({
  membership,
  onClose,
  onUpdate,
}: ModalMembershipInfoProps): JSX.Element {
  const { data: subscription, refetch } = useGetSubscriptionByMembershipQuery(
    Number(membership.id)
  );

  const [updateStatus] = useUpdateSubscriptionStatusMutation();

  const buttonText = useMemo(() => {
    if (subscription) {
      if (membership.recurrence === 'month') return 'Stop using';
      if (subscription.status === 'succeeded') return 'Hide subscription';
      return 'Show subscription';
    }
    return '';
  }, [membership.recurrence, subscription]);

  const handleCancel = async () => {
    if (subscription) {
      await updateStatus({
        subscriptionId: Number(subscription.id),
        status: 'inactive',
      });
      refetch();
      onUpdate();
    }
  };
  const handleToggle = async () => {
    if (subscription) {
      const status =
        subscription.status === 'succeeded' ? 'inactive' : 'succeeded';

      await updateStatus({
        subscriptionId: Number(subscription.id),
        status,
      });
      refetch();
      onUpdate();
    }
  };

  return (
    <ModalMembershipInfoDialog open onClose={onClose} scroll="body">
      <ContentInfoDialogTitle>
        <ContentInfoDialogHeaderInfoContainer>
          <ContentInfoDialogAvatar
            src={membership.creator.avatar}
            width={70}
            height={70}
          />
          <ContentInfoDialogHeaderContentInfo>
            <Text size="h3" as="p" weight={600}>
              {membership.title}
            </Text>
          </ContentInfoDialogHeaderContentInfo>
        </ContentInfoDialogHeaderInfoContainer>
        <ContentInfoDialogHeaderActions>
          <Touchable onClick={onClose}>
            <Image src="/close-white.svg" width={25} height={25} />
          </Touchable>
        </ContentInfoDialogHeaderActions>
      </ContentInfoDialogTitle>
      <ContentInfoCoverContainer>
        <Image src={membership.cover.url} layout="fill" objectFit="cover" />
        <ContentInfoCoverGradient />
      </ContentInfoCoverContainer>
      <ModalMembershipInfoContentContainer>
        <ContentInfoDialogContentSection>
          <ModalMembershipInfoContentTypeContainer>
            {membership.content === 'Selected posts' ? (
              <ModalMembershipInfoContent>
                <Image src="/completeIcon.svg" width={25} height={25} />
                <Text size="bodySmall">Selected posts</Text>
              </ModalMembershipInfoContent>
            ) : (
              <>
                <ModalMembershipInfoContent>
                  <Image src="/completeIcon.svg" width={25} height={25} />
                  <Text size="bodySmall">All routines</Text>
                </ModalMembershipInfoContent>
                <ModalMembershipInfoContent>
                  <Image src="/completeIcon.svg" width={25} height={25} />
                  <Text size="bodySmall">All premium posts</Text>
                </ModalMembershipInfoContent>
              </>
            )}
          </ModalMembershipInfoContentTypeContainer>
        </ContentInfoDialogContentSection>
        <ContentInfoDialogContentSection>
          <Text size="h6" weight={700} as="h6">
            {membership.title}
          </Text>
          <ModalMembershipInfoDescription size="bodySmall" as="pre">
            {membership.description}
          </ModalMembershipInfoDescription>
        </ContentInfoDialogContentSection>
      </ModalMembershipInfoContentContainer>
      <ModalMembershipInfoActions>
        <Button
          shadow
          onClick={
            membership.recurrence === 'month' ? handleCancel : handleToggle
          }
          disabled={!subscription}
        >
          {subscription ? <Text>{buttonText}</Text> : <Loader />}
        </Button>
      </ModalMembershipInfoActions>
    </ModalMembershipInfoDialog>
  );
}

export default memo(ModalMembershipInfo);
