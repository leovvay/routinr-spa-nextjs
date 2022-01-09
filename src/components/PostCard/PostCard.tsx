import React from 'react';

import Image from '@components/Image';
import Text from '@components/Text';
import { Post } from '@store/services/posts';
import { useSegment } from '@hooks';

import {
  PostCardContainer,
  PostCardCover,
  PostCardLocked,
  PostCardLockedText,
} from './PostCard.styled';

interface PostCardProps {
  post: Pick<Post, 'cover' | 'title' | 'isLocked'>;
  onUnlockClick?(): void;
}

function PostCard({ post, onUnlockClick }: PostCardProps): JSX.Element {
  const { trackUnlockPost } = useSegment();

  const handleUnlockClick = () => {
    onUnlockClick?.();
    trackUnlockPost(post.title);
  };

  return (
    <PostCardContainer>
      <PostCardCover>
        {post.isLocked ? (
          <PostCardLocked onClick={handleUnlockClick}>
            <Image src="/round-lock-opened.svg" width={16} height={23} />
            <PostCardLockedText>Unlock</PostCardLockedText>
          </PostCardLocked>
        ) : (
          <Image src={post.cover.previewUrl} layout="fill" objectFit="cover" />
        )}
      </PostCardCover>
      <Text size="h6">{post.title}</Text>
    </PostCardContainer>
  );
}

PostCard.defaultProps = {
  onUnlockClick: undefined,
};

export default PostCard;
