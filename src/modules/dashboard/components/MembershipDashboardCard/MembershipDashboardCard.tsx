import React from 'react';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { MembershipInfo } from '@store/services/membership/membership.interface';
import Image from '@components/Image';
import Text from '@components/Text';
import { currencyFormat } from '@utils';

import AnalyticCardSkeleton from '../AnalyticCardSkeleton';
import {
  AnalyticCard,
  AnalyticCardContent,
  AnalyticCardStatistic,
  AnalyticCardCover,
} from '../AnalyticCard';
import MembershipMenu from './components/MembershipMenu';

interface MembershipDashboardCardProps {
  membership: MembershipInfo;
  onDelete(): void;
  onUpdate(): void;
}

function MembershipDashboardCard({
  membership,
  onDelete,
  onUpdate,
}: MembershipDashboardCardProps): JSX.Element | null {
  if (!membership) return <AnalyticCardSkeleton />;

  const revenue = currencyFormat(membership.revenue);

  return (
    <AnalyticCard>
      <AnalyticCardCover>
        <Image
          src={membership.cover.previewUrl}
          layout="fill"
          objectFit="cover"
        />
        <MembershipMenu
          membership={membership}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      </AnalyticCardCover>
      <AnalyticCardContent>
        <Text size="h6" weight={700}>
          {membership.title}
        </Text>
        <AnalyticCardStatistic>
          <Text size="bodySmallBold">{membership.buyers} buyers</Text>
          <Text size="bodySmallBold">{revenue} revenue</Text>
        </AnalyticCardStatistic>
        <Stack direction="row" spacing={1}>
          {membership.isPublic ? (
            <Chip label="Published" color="success" />
          ) : (
            <Chip label="Draft" color="warning" />
          )}
        </Stack>
      </AnalyticCardContent>
    </AnalyticCard>
  );
}

export default MembershipDashboardCard;
