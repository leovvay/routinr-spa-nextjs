import styled from 'styled-components';

import Touchable from '@components/Touchable';
import Text from '@components/Text';

export const ReportButtonContainer = styled(Touchable)`
  width: fit-content;
  display: inline-flex;
  justify-content: flex-start;
`;

export const ReportButtonText = styled(Text)`
  display: inline-flex;
  align-items: center;
  gap: 17px;
  color: var(--text-primary-color);
`;
