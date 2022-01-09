import styled, { css } from 'styled-components';

import Touchable from '@components/Touchable';
import Text from '@components/Text';

export const PlannedDaysCalendarWeekDay = styled(Text)`
  color: var(--grey);
`;

export const PlannedDaysCalendarMonthDay = styled(Text)<{ $active: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-subtitle-color);

  ${({ $active }) =>
    $active &&
    css`
      color: var(--white);
      background-color: var(--text-primary-color);

      @media screen and (max-width: 768px) {
        color: var(--text-primary-color);
        background-color: inherit;
      }
    `}
`;

export const PlannedDaysCalendarDayItem = styled(Touchable)<{
  $hasActivity: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:after {
    content: '●';
    opacity: 0;
    color: var(--text-subtitle-color);
    position: relative;
    top: -10px;

    ${({ $hasActivity }) =>
      $hasActivity &&
      css`
        opacity: 1;
      `}
  }
`;

const mobileContainerStyles = css`
  width: 100vw;
  padding: 0;

  background-color: var(--white);

  .next,
  .prev,
  .prev-mobile,
  .next-mobile {
    display: none;
  }

  .swiper-wrapper {
    align-items: center;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  ${PlannedDaysCalendarDayItem} {
    margin-top: 10px;
    gap: 0;
  }
`;

export const PlannedDaysCalendarContainer = styled.section<{
  $forceMobile: boolean;
}>`
  position: relative;
  padding: 0 40px;

  @media screen and (max-width: 768px) {
    ${mobileContainerStyles}
  }

  ${({ $forceMobile }) => $forceMobile && mobileContainerStyles}
  ${({ $forceMobile }) =>
    $forceMobile &&
    css`
      width: unset;
    `}
`;

export const PlannedDaysCalendarPrevMonth = styled(Touchable)``;
export const PlannedDaysCalendarNextMonth = styled(
  PlannedDaysCalendarPrevMonth
)`
  transform: rotate(180deg);
`;
