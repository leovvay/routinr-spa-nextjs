import styled from 'styled-components';

import LinkTo from '@components/LinkTo';
import Text from '@components/Text';

export const PromoCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 45%;
  max-width: 500px;
  height: 620px;
  overflow: hidden;

  box-shadow: 0 10px 15px rgb(0 0 0 / 60%);
  background-color: var(--primary-color);
  color: var(--white);

  @media screen and (max-width: 1200px) {
    width: 50%;
  }
`;

export const PromoCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 50px 57px 35px;
  position: relative;
`;

export const PromoCardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
  background-color: var(--primary-color-dark);
`;

export const PromoCardShape = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const PromoCardLink = styled(LinkTo)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const PromoCardHelperText = styled(Text)`
  opacity: 0.7;
  margin-top: auto;
`;
