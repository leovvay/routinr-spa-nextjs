import React from 'react';

import PostCard from '@components/PostCard/PostCard';
import { Post } from '@store/services/posts';

import PostMenu from './components/PostMenu';

import { PostDashboardCardContainer } from './PostDashboardCard.styled';

interface PostDashboardCardProps {
  post: Post;
  onDelete(): void;
  onUpdate(): void;
}

function PostDashboardCard({
  post,
  onUpdate,
  onDelete,
}: PostDashboardCardProps): JSX.Element {
  return (
    <PostDashboardCardContainer>
      <PostCard post={post} />
      <PostMenu post={post} onDelete={onDelete} onUpdate={onUpdate} />
    </PostDashboardCardContainer>
  );
}

export default PostDashboardCard;
