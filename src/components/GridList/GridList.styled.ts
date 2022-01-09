import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  padding: 20px 0;

  @media screen and (max-width: 1060px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
