import React, { useCallback } from 'react';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { DateTime } from 'luxon';
import { SwiperSlide } from 'swiper/react';

import Text from '@components/Text';
import Button from '@components/Button';
import { Activity } from '@store/services/routines/activity.interface';
import Image from '@components/Image';

import {
  ActivityCardContainer,
  ActivityCardImagesCarousel,
} from './ActivityCard.styled';

interface ActivityCardProps {
  activity: Activity;
  onEdit(activity: Activity): void;
  onDelete(activity: Activity): void;
}
function ActivityCard({
  activity,
  onEdit,
  onDelete,
}: ActivityCardProps): JSX.Element {
  const handleEdit = useCallback(() => {
    onEdit(activity);
  }, [activity, onEdit]);
  const handleDelete = useCallback(() => {
    onDelete(activity);
  }, [activity, onDelete]);

  const startTime = DateTime.fromFormat(activity.startTime, 'HH:mm', {
    zone: 'utc',
  })
    .setZone('local')
    .toFormat('HH:mma');
  const endTime = DateTime.fromFormat(activity.endTime, 'HH:mm', {
    zone: 'utc',
  })
    .setZone('local')
    .toFormat('HH:mma');

  return (
    <ActivityCardContainer>
      <ActivityCardImagesCarousel>
        {[activity.cover].concat(activity.attachments).map((attachment) => (
          <SwiperSlide key={attachment.id}>
            <Image
              src={attachment.previewUrl}
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </ActivityCardImagesCarousel>
      <CardContent>
        <Text as="h3" weight={800}>
          {activity.title}
        </Text>
        <Text weight={800}>
          {startTime} - {endTime}
        </Text>
        <Text size="footerCaption" as="p">
          {activity.description}
        </Text>
      </CardContent>
      <CardActions>
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={handleDelete} variant="alert">
          Delete
        </Button>
      </CardActions>
    </ActivityCardContainer>
  );
}

export default ActivityCard;
