import styled from 'styled-components';

import Text from '@components/Text';
import Button from '@components/Button';

export const MediaContainer = styled.div`
  position: relative;
  max-width: 320px;
  min-height: 200px;
`;

export const MediaView = styled.img`
  width: 100%;
`;

export const MediaPhotoInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 15px;
`;
export const MediaPhotoByContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MediaPhotoByText = styled(Text)`
  color: var(--white);
  text-shadow: 0 0 3px var(--black);
`;

export const MediaPhotoUsedButton = styled(Button)`
  background-color: var(--green);

  &:hover {
    background-color: var(--green-dark);
  }
`;
