import React from 'react';
import { useRouter } from 'next/router';

import { PlannedActivity } from '@store/services/plan/planned-activity.interface';

import ActivityCard from './components/ActivityCard';

import {
  PlannedDaysActivitiesContainer,
  PlannedDaysActivitiesNoActivities,
} from './PlannedDaysActivities.styled';

interface Props {
  plannedActivities: PlannedActivity[];
  disableInteractions?: boolean;
  forceMobile?: boolean;
  className?: string;
}

const defaultProps = {
  disableInteractions: false,
  forceMobile: false,
  className: undefined,
};

type PlannedDaysActivitiesProps = Props & typeof defaultProps;

function PlannedDaysActivities({
  plannedActivities,
  disableInteractions,
  forceMobile,
  className,
}: PlannedDaysActivitiesProps): JSX.Element {
  const router = useRouter();

  return (
    <PlannedDaysActivitiesContainer
      $forceMobile={forceMobile}
      className={className}
    >
      {plannedActivities.length ? (
        plannedActivities.map((plannedActivity) => (
          <ActivityCard
            key={plannedActivity.id}
            plannedActivity={plannedActivity}
            disableInteractions={disableInteractions}
            forceMobile={forceMobile}
            onClick={() => {
              if (!disableInteractions)
                router.push(`/planned-activity/${plannedActivity.id}`);
            }}
          />
        ))
      ) : (
        <PlannedDaysActivitiesNoActivities size="bodyLead" weight={600}>
          There is no activities for the day
        </PlannedDaysActivitiesNoActivities>
      )}
    </PlannedDaysActivitiesContainer>
  );
}

PlannedDaysActivities.defaultProps = defaultProps;

export default PlannedDaysActivities;
