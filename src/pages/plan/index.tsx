import React, { useState } from 'react';
import Head from 'next/head';

import { DateTime } from 'luxon';

import PlannedDays from '@components/PlannedDays';
import { useGetPlannedDaysQuery } from '@store/services/plan/plan';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { PageContent, PageWrapper } from '@components/PageWrapper';
import { useSegmentPageEvent, useUser } from '@hooks';

import { PlanContainer } from '@modules/plan/index.styled';
import Navigation from '@modules/plan/components/Navigation';

function Index(): JSX.Element {
  useUser({
    redirectTo: process.env.NEXT_PUBLIC_HOST,
  });

  const [currentDay, setCurrentDay] = useState(DateTime.now().startOf('day'));
  const [findOptions, setFindOptions] = useState({
    from: DateTime.now().startOf('month').toISO({ includeOffset: false }),
    to: DateTime.now().endOf('month').toISO({ includeOffset: false }),
  });

  const handlePrevMonth = () => {
    setFindOptions((prev) => ({
      from: DateTime.fromISO(prev.from)
        .minus({ month: 1 })
        .toISO({ includeOffset: false }),
      to: DateTime.fromISO(prev.to)
        .minus({ month: 1 })
        .toISO({ includeOffset: false }),
    }));
  };
  const handleNextMonth = () => {
    setFindOptions((prev) => ({
      from: DateTime.fromISO(prev.from)
        .plus({ month: 1 })
        .toISO({ includeOffset: false }),
      to: DateTime.fromISO(prev.to)
        .plus({ month: 1 })
        .toISO({ includeOffset: false }),
    }));
  };

  const { data = [] } = useGetPlannedDaysQuery(findOptions);

  useSegmentPageEvent();

  return (
    <PageWrapper>
      <Head>
        <title>Calendar | Routinr</title>
        <meta property="og:title" content="Calendar | Routinr" key="title" />
      </Head>
      <Header />
      <PageContent>
        <Navigation />
        <PlanContainer>
          <PlannedDays
            currentDay={currentDay}
            days={data}
            onCurrentDayChange={setCurrentDay}
            onNextMonth={handleNextMonth}
            onPrevMonth={handlePrevMonth}
            showCurrentDate
          />
        </PlanContainer>
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}

export default Index;
