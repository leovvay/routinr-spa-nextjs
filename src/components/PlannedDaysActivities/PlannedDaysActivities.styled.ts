import styled, { css } from 'styled-components';

import Text from '@components/Text';

const mobileContainerStyles = css`
  position: relative;
  margin-top: 0;
  padding: 0 20px;

  &:before {
    content: '';
    border-right: 1px dashed var(--text-subtitle-color);
    position: absolute;
    height: calc(100% - 30px);
    left: 30px;
  }
`;

export const PlannedDaysActivitiesContainer = styled.section<{
  $forceMobile: boolean;
}>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
  margin-top: 60px;

  @media screen and (max-width: 768px) {
    ${mobileContainerStyles}
  }

  ${({ $forceMobile }) => $forceMobile && mobileContainerStyles}
`;

export const PlannedDaysActivitiesNoActivities = styled(Text)`
  text-align: center;
`;
