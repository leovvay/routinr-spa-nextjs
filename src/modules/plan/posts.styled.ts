import styled from 'styled-components';

export const PlanPostsContainer = styled.div`
  padding: 68px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const PlanPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
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
