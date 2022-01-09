import React, { useRef, useState } from 'react';

import { DateTime } from 'luxon';
import Tooltip from '@mui/material/Tooltip';

import { PostWithCreator } from '@store/services/posts';
import Text from '@components/Text';
import Image from '@components/Image';

import {
  PostCoverContainer,
  PostMainInfoButtonShare,
  PostMainInfoContainer,
  PostMainInfoCreatorLink,
  PostMainInfoPostTitle,
  PostMainInfoTitle,
} from './PostMainInfo.styled';

interface PostMainInfoProps {
  post: PostWithCreator;
}

function PostMainInfo({ post }: PostMainInfoProps): JSX.Element {
  const [showTooltip, setShowTooltip] = useState(false);

  const titleRef = useRef<HTMLSpanElement | null>();

  const created = DateTime.fromMillis(Number(post.createdAt)).toRelative();

  return (
    <PostMainInfoContainer>
      <PostMainInfoTitle>
        <Tooltip title={post.title} arrow disableHoverListener={!showTooltip}>
          <PostMainInfoPostTitle
            size="h0"
            ref={(title) => {
              if (title) {
                titleRef.current = title;
                setShowTooltip(title.offsetWidth < title.scrollWidth);
              }
            }}
          >
            {post.title}
          </PostMainInfoPostTitle>
        </Tooltip>
        <Text size="bodyLead" weight={500}>
          {`${created} • by `}
          <PostMainInfoCreatorLink href={`/profile/${post.creator.slug}`} blue>
            @{post.creator.handle}
          </PostMainInfoCreatorLink>
        </Text>
      </PostMainInfoTitle>
      <PostCoverContainer>
        <Image src={post.cover.url} layout="fill" objectFit="cover" />
        <PostMainInfoButtonShare
          title={post.title}
          slug={post.slug}
          type="post"
          variant="button"
        />
      </PostCoverContainer>
    </PostMainInfoContainer>
  );
}

export default PostMainInfo;
