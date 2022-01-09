import React from 'react';

import { User } from '@store/services/users';
import {
  InfluencerCardAvatar,
  InfluencerCardAvatarContainer,
  InfluencerCardContainer,
  InfluencerCardContent,
  InfluencerCardDisplayName,
  InfluencerCardFollowers,
  InfluencerCardLink,
  InfluencerCardWrapper,
} from '@components/InfluencerCard/InfluencerCard.styled';
import { TextLight } from '@components/Text';
import Image from '@components/Image';

type InfluencerCardProps = Pick<User, 'avatar' | 'handle' | 'slug'> & {
  followersCount: number;
  link?: boolean;
};

export default function InfluencerCard({
  avatar,
  handle,
  followersCount,
  slug,
  link,
}: InfluencerCardProps): JSX.Element {
  const Container = link ? InfluencerCardLink : InfluencerCardWrapper;
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Container href={`/profile/${slug}`}>
      <InfluencerCardContainer>
        <InfluencerCardAvatarContainer>
          <InfluencerCardAvatar
            src={avatar}
            alt="avatar"
            layout="fill"
            objectFit="cover"
          />
        </InfluencerCardAvatarContainer>

        <InfluencerCardContent>
          <InfluencerCardDisplayName size="bodyLead">
            @{handle}
          </InfluencerCardDisplayName>

          <InfluencerCardFollowers>
            <Image
              src="/followers.svg"
              alt="follower-count"
              width={17}
              height={17}
            />
            <TextLight size="bodyCaption">{followersCount}</TextLight>
          </InfluencerCardFollowers>
        </InfluencerCardContent>
      </InfluencerCardContainer>
    </Container>
  );
}

InfluencerCard.defaultProps = {
  link: true,
};
