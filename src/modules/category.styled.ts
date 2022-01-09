import styled from 'styled-components';

import Text from '@components/Text';
import Button from '@components/Button';

export const CategoryPageBody = styled.section`
  padding: 63px 68px 45px;

  @media screen and (max-width: 600px) {
    padding: 20px 10px 45px;
  }
`;

export const CategoryPageCaption = styled(Text)`
  color: var(--text-primary-color);
`;

export const CategoryPageViewMoreButton = styled(Button).attrs({
  variant: 'outlined',
  shadow: true,
})`
  padding: 10px 100px;
  margin: 0 auto;
`;
