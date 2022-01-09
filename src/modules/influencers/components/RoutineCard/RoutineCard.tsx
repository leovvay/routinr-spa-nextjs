import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

import Text from '@components/Text';
import Image from '@components/Image';
import LinkTo from '@components/LinkTo';
import { Routine } from '@store/services/routines';

interface RoutineCardProps {
  routine: Routine;
}

function RoutineCard({ routine }: RoutineCardProps): JSX.Element {
  const [raised, setRaised] = useState(false);

  return (
    <LinkTo href={`/routines/${routine.slug}`}>
      <Card
        raised={raised}
        onMouseOver={() => setRaised(true)}
        onMouseLeave={() => setRaised(false)}
        sx={{ width: '100%' }}
      >
        <CardMedia
          component="img"
          height="280"
          image={routine.cover.url}
          alt={routine.title}
        />
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Text size="h5">{routine.title}</Text>
            <Stack direction="row" spacing={2}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                justifyContent="center"
              >
                <Image src="/followers.svg" width={14} height={13} />
                <Text size="bodyCaption">{routine.usageCount}</Text>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                justifyContent="center"
              >
                <Image src="/calendar.svg" width={14} height={13} />
                <Text size="bodyCaption">{routine.daysCount}</Text>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </LinkTo>
  );
}

export default RoutineCard;
