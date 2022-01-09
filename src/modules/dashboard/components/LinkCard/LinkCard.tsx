import React from 'react';

import Text from '@components/Text';

import {
  Button,
  LinkCardCard,
  LinkCardContainer,
  LinkCardContent,
} from './LinkCard.styled';

interface LinkCardProps {
  title: string;
  href: string;
  description: string;
}

function LinkCard({ title, description, href }: LinkCardProps): JSX.Element {
  return (
    <LinkCardContainer href={href}>
      <LinkCardCard>
        <Text size="h5" as="h5">
          {title}
        </Text>
        <LinkCardContent>
          <Text size="bodySmall">{description}</Text>
          <Button src="/next-btn.svg" width={32} height={32} />
        </LinkCardContent>
      </LinkCardCard>
    </LinkCardContainer>
  );
}

export default LinkCard;
