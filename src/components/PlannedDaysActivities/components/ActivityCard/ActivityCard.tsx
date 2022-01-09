import React, { useCallback, useState } from 'react';

import { DateTime } from 'luxon';

import { getPlannedActivityTime } from '@utils';
import { useIsMobileVersion, useUser } from '@hooks';
import { PlannedActivity } from '@store/services/plan/planned-activity.interface';
import { useGetRoutineByIdQuery } from '@store/services/routines';
import Image from '@components/Image';
import Text, { TextLight } from '@components/Text';
import { useUpdatePlannedActivityTimeMutation } from '@store/services/plan/plan';
import RoutinePopupControl, {
  PopupRoutineCover,
} from '@components/RoutinePopupControl';

import TimePicker from '../TimePicker';

import {
  ActivityCardContainer,
  ActivityCardCover,
  ActivityCardCoverButton,
  ActivityCardInfo,
  ActivityCardLine,
  ActivityCardTime,
  ActivityCardTitle,
} from './ActivityCard.styled';

interface Props {
  plannedActivity: PlannedActivity;
  onClick?(): void;
  disableInteractions?: boolean;
  forceMobile?: boolean;
}

type ActivityCardProps = Props & typeof defaultProps;
const defaultProps = {
  disableInteractions: false,
  forceMobile: false,
  onClick: () => {},
};

function ActivityCard({
  plannedActivity,
  disableInteractions,
  onClick,
  forceMobile,
}: ActivityCardProps): JSX.Element {
  const [showWidget, setShowWidget] = useState(false);

  const { currentUser } = useUser();
  const isMobile = useIsMobileVersion();
  const [updatePlannedActivity] = useUpdatePlannedActivityTimeMutation();

  const { activity } = plannedActivity;
  const { data: routine } = useGetRoutineByIdQuery({
    id: Number(activity.routineId),
    userId: Number(currentUser?.id),
  });

  const { startTime, endTime } = getPlannedActivityTime(plannedActivity);

  const timeSize = isMobile ? 'bodySmallMedium' : 'bodyLead';
  const titleSize = isMobile ? 'bodySmallExtraBold' : 'h6';

  const handleUpdateTime = useCallback(
    (time: DateTime) => {
      const diff = endTime.diff(startTime, ['hour']);

      updatePlannedActivity({
        id: Number(plannedActivity.id),
        startTime: time.toUTC().toFormat('HH:mm'),
        endTime: time.plus({ hours: diff.hours }).toUTC().toFormat('HH:mm'),
      });
    },
    [endTime, plannedActivity.id, startTime, updatePlannedActivity]
  );

  return (
    <ActivityCardContainer $forceMobile={forceMobile}>
      <ActivityCardInfo>
        <ActivityCardTitle onClick={onClick}>
          <Text size={titleSize}>{activity.title}</Text>
        </ActivityCardTitle>
        <ActivityCardTime>
          {disableInteractions ? (
            <TextLight size={timeSize} weight={600}>
              {startTime.toLocaleString(DateTime.TIME_SIMPLE)}
            </TextLight>
          ) : (
            <TimePicker
              value={startTime}
              onChange={handleUpdateTime}
              AnchorElement={() => (
                <TextLight size={timeSize} weight={600}>
                  {startTime.toLocaleString(DateTime.TIME_SIMPLE)}
                </TextLight>
              )}
            />
          )}

          <ActivityCardLine />
          <TextLight size={timeSize} weight={600}>
            {endTime.toLocaleString(DateTime.TIME_SIMPLE)}
          </TextLight>
        </ActivityCardTime>
      </ActivityCardInfo>
      <ActivityCardCover>
        <ActivityCardCoverButton onClick={onClick}>
          <Image
            src={activity.cover.previewUrl}
            layout="fill"
            objectFit="cover"
          />
        </ActivityCardCoverButton>
        {routine && (
          <>
            <PopupRoutineCover
              onClick={() => {
                if (!disableInteractions) setShowWidget(true);
              }}
              $forceMobile={forceMobile}
            >
              <Image
                src={routine.cover.previewUrl}
                layout="fill"
                objectFit="cover"
              />
            </PopupRoutineCover>
            <RoutinePopupControl
              isOpen={showWidget}
              onClose={() => setShowWidget(false)}
              routine={routine}
            />
          </>
        )}
      </ActivityCardCover>
    </ActivityCardContainer>
  );
}

ActivityCard.defaultProps = defaultProps;

export default ActivityCard;
