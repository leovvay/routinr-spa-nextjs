import styled from 'styled-components';

import PlannedDaysActivities from '@components/PlannedDaysActivities';

export const MyFeedContainer = styled.div`
  max-width: 440px;
  margin: 0 auto;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const MyFeedPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 15px;
`;

export const MyFeedPlannedDaysActivities = styled(PlannedDaysActivities)`
  padding: 0;

  &::before {
    left: 10px;
  }
`;
