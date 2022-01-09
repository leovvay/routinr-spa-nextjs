import styled from 'styled-components';

import Text from '@components/Text';
import Button from '@components/Button';

export const DescriptionSectionContainer = styled.section`
  position: relative;
`;

export const DescriptionSectionTitle = styled(Text)<{ $color: string }>`
  position: absolute;
  top: -28px;
  left: 20px;
  padding: 0 10px;
  background-color: ${({ $color }) => $color};
`;

export const DescriptionSectionButtonContainer = styled.div`
  position: absolute;
  top: 40px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DescriptionSectionButton = styled(Button)`
  padding: 6px 27px;
`;

export const DescriptionSectionGradient = styled.div<{ $color: string }>`
  content: '';
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) -100%,
    ${({ $color }) => $color}
  );
`;
