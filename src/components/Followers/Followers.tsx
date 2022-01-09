import React, { useMemo } from 'react';

import styled from 'styled-components';

import { Follower } from '@store/services/users';
import Text, { TextLight, TextProps } from '@components/Text';
import LinkTo from '@components/LinkTo';
import Avatar from '@components/Avatar';

import { FollowersList } from './Followers.styled';

interface FollowersProps {
  numberToShow: number;
  list: Follower[];
  className?: string;
  avatarSize?: number;
  titleSize?: TextProps['size'];
}

function Followers({
  numberToShow,
  list,
  className,
  avatarSize,
  titleSize,
}: FollowersProps): JSX.Element {
  const listToShow = useMemo(() => {
    if (list.length <= numberToShow) return list;
    return list.slice(0, numberToShow);
  }, [list, numberToShow]);

  const rest = list.length - listToShow.length;

  return (
    <div className={className}>
      <Text size={titleSize} weight={700} as="h6">
        {list.length} Followers
      </Text>
      <FollowersList>
        {listToShow.map((user) => (
          <LinkTo key={user.slug} href={`/profile/${user.slug}`}>
            <Avatar src={user.avatar} width={avatarSize} height={avatarSize} />
          </LinkTo>
        ))}
        {rest !== 0 && <TextLight>+{rest}</TextLight>}
      </FollowersList>
    </div>
  );
}

Followers.defaultProps = {
  className: undefined,
  avatarSize: undefined,
  titleSize: 'h6',
};

export default styled(Followers)``;
