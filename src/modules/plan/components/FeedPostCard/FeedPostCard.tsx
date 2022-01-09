import React, { useState } from 'react';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DateTime } from 'luxon';

import { FeedPost } from '@store/services/posts';
import { TextLight } from '@components/Text';
import Image from '@components/Image';

import {
  FeedPostCardContainer,
  FeedPostCardCover,
  FeedPostCardExpandMore,
} from '@modules/plan/components/FeedPostCard/FeedPostCard.styled';

const LINE_HEIGHT = 18;

interface FeedPostCardProps {
  post: FeedPost;
}

function FeedPostCard({ post }: FeedPostCardProps): JSX.Element {
  const [needExpansion, setNeedExpansion] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return (
    <FeedPostCardContainer>
      <CardHeader
        avatar={<Avatar src={post.creator.avatar} />}
        title={post.title}
        subheader={DateTime.fromMillis(Number(post.createdAt)).toRelative()}
      />
      <FeedPostCardCover>
        <Image src={post.cover.url} layout="fill" objectFit="cover" />
      </FeedPostCardCover>

      <Collapse in={expanded} collapsedSize={50} timeout="auto">
        <CardContent>
          <TextLight
            size="bodySmallMedium"
            as="pre"
            ref={(pre: HTMLSpanElement | null) => {
              setNeedExpansion(
                pre ? pre.clientHeight > LINE_HEIGHT * 2 : false
              );
            }}
          >
            {post.description}
          </TextLight>
        </CardContent>
      </Collapse>
      {needExpansion && (
        <CardActions disableSpacing>
          <FeedPostCardExpandMore
            expand={expanded}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setExpanded((prev) => !prev);
            }}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </FeedPostCardExpandMore>
        </CardActions>
      )}
    </FeedPostCardContainer>
  );
}

export default FeedPostCard;
