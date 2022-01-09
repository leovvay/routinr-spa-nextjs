import styled from 'styled-components';

import CategoryCard from '@components/CategoryCard';

// eslint-disable-next-line import/prefer-default-export
export const BrowseContainer = styled.div`
  padding: 5vw 60px 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1vw;
  grid-row-gap: 60px;
  position: relative;

  @media screen and (max-width: 1360px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px 20px;
    //display: block;
    grid-template-columns: 1fr;

    ${CategoryCard} {
      height: 15vh;
    }
  }
`;

export const BrowseNavContainer = styled.div`
  padding: 20px 20px 0;
`;
