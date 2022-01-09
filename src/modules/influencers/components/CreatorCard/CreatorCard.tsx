import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

import { User } from '@store/services/users';
import Text from '@components/Text';
import Image from '@components/Image';
import LinkTo from '@components/LinkTo';

interface CreatorCardProps {
  influencer: User;
}

function CreatorCard({ influencer }: CreatorCardProps): JSX.Element {
  const [raised, setRaised] = useState(false);

  return (
    <LinkTo href={`/profile/${influencer.slug}`}>
      <Card
        raised={raised}
        onMouseOver={() => setRaised(true)}
        onMouseLeave={() => setRaised(false)}
        sx={{ width: '100%' }}
      >
        <CardMedia
          component="img"
          height="280"
          image={influencer.avatar}
          alt={influencer.displayName}
        />
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Text size="h5">{influencer.displayName}</Text>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              justifyContent="center"
            >
              <Image src="/followers.svg" width={14} height={13} />
              <Text size="bodyCaption">{influencer.followers.length}</Text>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </LinkTo>
  );
}

export default CreatorCard;
