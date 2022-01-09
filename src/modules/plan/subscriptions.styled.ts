import styled from 'styled-components';

export const PlanSubscriptionsContainer = styled.div`
  padding: 68px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const PlanSubscriptions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 16px;
  margin-top: 15px;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;
