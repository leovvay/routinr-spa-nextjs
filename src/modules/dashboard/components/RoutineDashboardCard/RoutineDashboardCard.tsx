import React from 'react';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { RoutineDashboard } from '@store/services/routines';
import Image from '@components/Image';
import Text from '@components/Text';
import { currencyFormat } from '@utils';

import {
  AnalyticCard,
  AnalyticCardContent,
  AnalyticCardStatistic,
  AnalyticCardCover,
} from '../AnalyticCard';
import RoutineMenu from './components/RoutineMenu';

interface RoutineDashboardCardProps {
  routine: RoutineDashboard;
  onDelete(): void;
  onClone(): void;
}

function RoutineDashboardCard({
  routine,
  onDelete,
  onClone,
}: RoutineDashboardCardProps): JSX.Element | null {
  const revenue = currencyFormat(routine.revenue);

  return (
    <AnalyticCard>
      <AnalyticCardCover>
        <Image src={routine.cover.previewUrl} layout="fill" objectFit="cover" />
        <RoutineMenu routine={routine} onDelete={onDelete} onClone={onClone} />
      </AnalyticCardCover>
      <AnalyticCardContent>
        <Text size="h6" weight={700}>
          {routine.title}
        </Text>
        <AnalyticCardStatistic>
          <Text size="bodySmallBold">{routine.buyers} buyers</Text>
          <Text size="bodySmallBold">{revenue} revenue</Text>
        </AnalyticCardStatistic>
        <Stack direction="row" spacing={1}>
          {routine.isPublished && <Chip label="Published" color="success" />}
          {!routine.isComplete && <Chip label="Draft" color="warning" />}
          {routine.isPrivate && <Chip label="Private" />}
        </Stack>
      </AnalyticCardContent>
    </AnalyticCard>
  );
}

export default RoutineDashboardCard;
