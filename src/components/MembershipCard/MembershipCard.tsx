import React from 'react';

import Stack from '@mui/material/Stack';

import { MembershipWithSubscribeInfo } from '@store/services/membership/membership.interface';
import { currencyFormat } from '@utils';
import MembershipCover from '@components/MembershipCover';

import {
  MembershipCardButton,
  MembershipCardCard,
  MembershipCardDescription,
  MembershipCardMainInfo,
  MembershipCardRecurrence,
  MembershipCardSubscribedButton,
  MembershipCardTitle,
} from './MembershipCard.styled';

interface MembershipCardProps {
  membership: MembershipWithSubscribeInfo;
  variant?: 'vertical' | 'horizontal';
  onBuy(): void;
}

function MembershipCard({
  membership,
  variant,
  onBuy,
}: MembershipCardProps): JSX.Element {
  const price = currencyFormat(membership.price);
  const isVertical = variant === 'vertical';

  const recurrenceText =
    membership.recurrence === 'month' ? 'per month' : 'one-off charge';

  return (
    <MembershipCardCard $variant={variant} noShadow={!isVertical}>
      <div>
        <MembershipCardMainInfo
          direction={isVertical ? 'column' : 'row'}
          alignItems="center"
          spacing={2}
        >
          <MembershipCover
            src={membership.cover.previewUrl}
            width={isVertical ? 98 : 50}
            height={isVertical ? 103 : 53}
            objectFit="cover"
          />
          <Stack
            direction="column"
            alignItems={isVertical ? 'center' : 'start'}
          >
            <MembershipCardTitle size="h6" weight={700}>
              {membership.title}
            </MembershipCardTitle>
            <MembershipCardRecurrence>{`${price} ${recurrenceText}`}</MembershipCardRecurrence>
          </Stack>
        </MembershipCardMainInfo>
        {isVertical && (
          <MembershipCardDescription size="validationCaption">
            {membership.description}
          </MembershipCardDescription>
        )}
      </div>
      <div>
        {membership.isSubscribed ? (
          <MembershipCardSubscribedButton size="small" disabled shadow>
            Subscribed
          </MembershipCardSubscribedButton>
        ) : (
          <MembershipCardButton
            onClick={onBuy}
            price={membership.price}
            isFree={false}
            shadow
          />
        )}
      </div>
    </MembershipCardCard>
  );
}

MembershipCard.defaultProps = {
  variant: 'vertical',
};

export default MembershipCard;
