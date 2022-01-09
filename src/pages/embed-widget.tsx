import React, { useState } from 'react';
import { GetServerSideProps } from 'next';

import { DateTime } from 'luxon';

import PlannedDays from '@components/PlannedDays';
import { useFakeDays } from '@hooks';
import { store } from '@store/index';
import { Routine, routinesApi } from '@store/services/routines';
import { PageWrapper, PageContent } from '@components/PageWrapper';
import LinkTo from '@components/LinkTo';
import Text from '@components/Text';

import { EmbedWidgetFooter } from '@modules/embed-widget.styled';

interface EmbedWidgetProps {
  routine: Routine;
}

function EmbedWidget({ routine }: EmbedWidgetProps) {
  const [currentDay, setCurrentDay] = useState(DateTime.now().startOf('day'));

  const fakeDays = useFakeDays(routine);

  return (
    <PageWrapper>
      <PageContent>
        <PlannedDays
          currentDay={currentDay}
          days={fakeDays}
          onCurrentDayChange={setCurrentDay}
          showCurrentDate={false}
          disableInteractions
        />
      </PageContent>
      <EmbedWidgetFooter>
        <LinkTo href={`/routines/${routine.slug}`} target="_blank" blue>
          View in routinr
        </LinkTo>
        <LinkTo href="/" target="_blank" blue>
          <Text size="h6">routinr</Text>
        </LinkTo>
      </EmbedWidgetFooter>
    </PageWrapper>
  );
}

export default EmbedWidget;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug as string;

  const { data } = await store.dispatch(
    routinesApi.endpoints.getRoutineBySlug.initiate(slug)
  );

  return {
    props: { routine: data },
  };
};
