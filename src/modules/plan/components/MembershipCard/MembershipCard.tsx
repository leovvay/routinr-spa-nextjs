import React from 'react';

import { currencyFormat } from '@utils';
import Image from '@components/Image';
import { MembershipAsSubscription } from '@store/services/membership/membership.interface';
import Text, { TextLight } from '@components/Text';

import {
  MembershipCardContainer,
  MembershipCardCover,
  MembershipCardCreator,
} from './MembershipCard.styled';

interface MembershipCardProps {
  membership: MembershipAsSubscription;
  onClick(): void;
}

function MembershipCard({
  membership,
  onClick,
}: MembershipCardProps): JSX.Element {
  const price = currencyFormat(membership.price);

  const recurrenceText =
    membership.recurrence === 'month' ? 'per month' : 'one-off charge';

  return (
    <MembershipCardContainer onClick={onClick}>
      <MembershipCardCover>
        <Image
          src={membership.cover.previewUrl}
          layout="fill"
          objectFit="cover"
        />
      </MembershipCardCover>
      <Text size="h6" weight={700}>
        {membership.title}
      </Text>
      <MembershipCardCreator size="h6" weight={700}>
        @{membership.creator.handle}
      </MembershipCardCreator>
      <TextLight size="h6" weight={600}>
        {`${price} ${recurrenceText}`}
      </TextLight>
    </MembershipCardContainer>
  );
}

export default MembershipCard;
