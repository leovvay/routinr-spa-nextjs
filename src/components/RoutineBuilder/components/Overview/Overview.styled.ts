import styled, { css } from 'styled-components';

import CategoriesSelector from '@components/CategoriesSelector';
import Text from '@components/Text';

export const CategoriesSelectorStyled = styled(CategoriesSelector).attrs({
  classNamePrefix: 'overview',
})<{ hasError: boolean }>`
  & .overview__control {
    ${({ hasError }) =>
      hasError &&
      css`
        border-color: var(--red);
      `}
  }

  & .overview__value-container {
    padding: 14px;
  }
`;

export const ValidationError = styled(Text)`
  margin: 3px 14px 0;
  color: var(--red);
`;
