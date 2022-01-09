import React, { useEffect, useMemo, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation } from 'swiper';
import { DateTime } from 'luxon';

import { NextButton, PrevButton } from '@components/Swiper';
import Image from '@components/Image/Image';
import { useIsMobileVersion } from '@hooks';
import { PlannedDay } from '@store/services/plan/planned-day.interface';

import {
  PlannedDaysCalendarContainer,
  PlannedDaysCalendarDayItem,
  PlannedDaysCalendarMonthDay,
  PlannedDaysCalendarNextMonth,
  PlannedDaysCalendarPrevMonth,
  PlannedDaysCalendarWeekDay,
} from './PlannedDaysCalendar.styled';

import 'swiper/css';

const swiperSettings = {
  freeMode: {
    enabled: true,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  modules: [FreeMode, Navigation],
  slidesPerView: 20,
  breakpoints: {
    0: {
      slidesPerView: 6,
    },
    990: {
      slidesPerView: 10,
    },
    1220: {
      slidesPerView: 14,
    },
    1550: {
      slidesPerView: 20,
    },
  },
};

interface ComputedPlannedDay {
  fullDate: DateTime;
  weekday: string;
  monthday: string;
  hasActivity: boolean;
}

interface PlannedDaysCalendarProps {
  currentDay: DateTime;
  days: Omit<PlannedDay, 'id'>[];
  onPrevMonthClick(): void;
  onNextMonthClick(): void;
  onCurrentDayChange(date: DateTime): void;
  forceMobile?: boolean;
}

function PlannedDaysCalendar({
  currentDay,
  days,
  onCurrentDayChange,
  onPrevMonthClick,
  onNextMonthClick,
  forceMobile = false,
}: PlannedDaysCalendarProps): JSX.Element {
  const isMobile = useIsMobileVersion(forceMobile);

  const [swiper, setSwiper] = useState<SwiperCore>();
  const [discardScroll, setDiscardScroll] = useState(false);

  const swiperSettingsComputed = useMemo(() => {
    const breakpoints = forceMobile ? {} : swiperSettings.breakpoints;
    const slidesPerView = forceMobile ? 6 : swiperSettings.slidesPerView;

    return {
      ...swiperSettings,
      breakpoints,
      slidesPerView,
    };
  }, [forceMobile]);

  const computedDays = useMemo<ComputedPlannedDay[]>(() => {
    let start = currentDay.startOf('month');
    const { daysInMonth } = currentDay;

    return Array.from(new Array(daysInMonth), (item, index) => {
      let currentDate = start.plus({ days: 1 });

      if (index === 0) currentDate = start;

      start = currentDate;

      return {
        fullDate: currentDate,
        weekday: currentDate.toFormat('ccc'),
        monthday: currentDate.toFormat('d'),
        hasActivity: days.some(
          (day) =>
            DateTime.fromISO(day.date).hasSame(currentDate, 'day') &&
            day.plannedActivities.length
        ),
      };
    });
  }, [currentDay, days]);

  useEffect(() => {
    if (swiper && currentDay && !discardScroll) {
      const currentDayIndex = computedDays.findIndex((day) =>
        day.fullDate.hasSame(currentDay, 'day')
      );
      swiper?.slideTo(currentDayIndex);
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [currentDay, computedDays, swiper]);

  useEffect(() => {
    if (discardScroll) {
      setDiscardScroll(false);
    }
  }, [discardScroll, currentDay]);

  return (
    <PlannedDaysCalendarContainer $forceMobile={forceMobile}>
      <PrevButton className="prev" />
      <NextButton className="next" />
      <Swiper {...swiperSettingsComputed} onSwiper={setSwiper}>
        {isMobile && (
          <SwiperSlide>
            <PlannedDaysCalendarPrevMonth onClick={onPrevMonthClick}>
              <Image src="/grey-back-arrow.svg" width={10} height={18} />
            </PlannedDaysCalendarPrevMonth>
          </SwiperSlide>
        )}
        {computedDays.map((day) => {
          const isActive = day.fullDate.hasSame(currentDay, 'day');

          return (
            <SwiperSlide key={day.fullDate.toISO()}>
              <PlannedDaysCalendarDayItem
                onClick={() => {
                  onCurrentDayChange(day.fullDate);
                  setDiscardScroll(true);
                }}
                $hasActivity={day.hasActivity}
              >
                <PlannedDaysCalendarWeekDay size="bodyCaptionBold">
                  {day.weekday.toUpperCase()}
                </PlannedDaysCalendarWeekDay>
                <PlannedDaysCalendarMonthDay weight={800} $active={isActive}>
                  {day.monthday}
                </PlannedDaysCalendarMonthDay>
              </PlannedDaysCalendarDayItem>
            </SwiperSlide>
          );
        })}
        {isMobile && (
          <SwiperSlide>
            <PlannedDaysCalendarNextMonth onClick={onNextMonthClick}>
              <Image src="/grey-back-arrow.svg" width={10} height={18} />
            </PlannedDaysCalendarNextMonth>
          </SwiperSlide>
        )}
      </Swiper>
    </PlannedDaysCalendarContainer>
  );
}

PlannedDaysCalendar.defaultProps = {
  forceMobile: false,
};

export default PlannedDaysCalendar;
