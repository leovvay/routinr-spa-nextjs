import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { DateTime } from 'luxon';
import { skipToken } from '@reduxjs/toolkit/query/react';

import { getActivityCover, getPlannedActivityTime } from '@utils';
import {
  useIsMobileVersion,
  usePlannedActivityMediaInfo,
  useSegmentPageEvent,
  useUser,
} from '@hooks';
import { useGetRoutineByIdQuery } from '@store/services/routines';
import { useGetPlannedActivityQuery } from '@store/services/plan/plan';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import Text, { TextLight } from '@components/Text';
import Image from '@components/Image/Image';
import RoutinePopupControl from '@components/RoutinePopupControl';

import {
  PlannedActivityBackButton,
  PlannedActivityContainer,
  PlannedActivityDate,
  PlannedActivityDay,
  PlannedActivityDescription,
  PlannedActivityInfo,
  PlannedActivityLine,
  PlannedActivityMainInfo,
  PlannedActivityMainInfoContainer,
  PlannedActivityMobileCover,
  PlannedActivityRoutine,
  PlannedActivityTime,
  PlannedActivityWeekday,
} from '@modules/planned-activity/planned-activity.styled';
import Attachments from '@modules/planned-activity/components/Attachments/Attachments';

function PlannedActivity(): JSX.Element {
  const [showWidget, setShowWidget] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const isMobile = useIsMobileVersion();
  const { currentUser } = useUser();

  const { data: plannedActivity } = useGetPlannedActivityQuery(Number(id), {
    skip: !id,
  });
  const { data: routine } = useGetRoutineByIdQuery(
    plannedActivity
      ? {
          id: Number(plannedActivity.activity.routineId),
          userId: Number(currentUser?.id),
        }
      : skipToken
  );

  const cover = plannedActivity && getActivityCover(plannedActivity?.activity);
  const { startTime, endTime } = plannedActivity
    ? getPlannedActivityTime(plannedActivity)
    : { startTime: DateTime.now(), endTime: DateTime.now() };

  const { weekdayShort, day } = plannedActivity
    ? DateTime.fromISO(plannedActivity?.plannedDay.date)
    : DateTime.now();

  const { isVideoCover, hasVideo, attachments } =
    usePlannedActivityMediaInfo(plannedActivity);

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>Planned activity | Routinr</title>
        <meta
          property="og:title"
          content="Planned activity | Routinr"
          key="title"
        />
      </Head>
      {isMobile && cover && (
        <PlannedActivityMobileCover>
          <Image
            src={isVideoCover ? cover.previewUrl : cover.url}
            layout="fill"
            objectFit="cover"
          />
          <PlannedActivityBackButton onClick={router.back} />
        </PlannedActivityMobileCover>
      )}
      {!isMobile && (
        <Header background={isVideoCover ? cover?.previewUrl : cover?.url} />
      )}
      <PageContent>
        <PlannedActivityContainer>
          <PlannedActivityMainInfoContainer>
            <PlannedActivityMainInfo>
              <PlannedActivityInfo>
                <Text size="h3">{plannedActivity?.activity.title}</Text>
                <PlannedActivityTime>
                  <TextLight size="bodyLead" weight={600}>
                    {startTime.toLocaleString(DateTime.TIME_SIMPLE)}
                  </TextLight>

                  <PlannedActivityLine />
                  <TextLight size="bodyLead" weight={600}>
                    {endTime.toLocaleString(DateTime.TIME_SIMPLE)}
                  </TextLight>
                </PlannedActivityTime>
              </PlannedActivityInfo>
              <PlannedActivityDate>
                <PlannedActivityWeekday size="h3">
                  {weekdayShort.toUpperCase()}
                </PlannedActivityWeekday>
                <PlannedActivityDay fontSize={32} weight={600}>
                  {day}
                </PlannedActivityDay>
              </PlannedActivityDate>
              {routine && (
                <>
                  <PlannedActivityRoutine onClick={() => setShowWidget(true)}>
                    <Image
                      src={routine.cover.previewUrl}
                      layout="fill"
                      objectFit="cover"
                    />
                  </PlannedActivityRoutine>
                  <RoutinePopupControl
                    isOpen={showWidget}
                    onClose={() => setShowWidget(false)}
                    routine={routine}
                  />
                </>
              )}
            </PlannedActivityMainInfo>
            {!hasVideo && (
              <PlannedActivityDescription as="pre">
                {plannedActivity?.activity.description}
              </PlannedActivityDescription>
            )}
          </PlannedActivityMainInfoContainer>
          {hasVideo && <Attachments attachments={attachments} />}
          {hasVideo && (
            <PlannedActivityMainInfoContainer>
              <PlannedActivityDescription as="pre">
                {plannedActivity?.activity.description}
              </PlannedActivityDescription>
            </PlannedActivityMainInfoContainer>
          )}
        </PlannedActivityContainer>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default PlannedActivity;
