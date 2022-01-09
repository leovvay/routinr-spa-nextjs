import styled from 'styled-components';

import GridList from '@components/GridList';

// eslint-disable-next-line import/prefer-default-export
export const InfluencersListContent = styled(GridList)`
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
