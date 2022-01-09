import styled, { css } from 'styled-components';
import Paper from '@mui/material/Paper';

import Touchable from '@components/Touchable';
import Text from '@components/Text';

export const DownloadsCardContainer = styled(Paper).attrs({
  variant: 'outlined',
  elevation: 0,
})<{ $isLocked: boolean }>`
  position: relative;
  padding: 16px;
  flex-shrink: 0;

  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgb(0 31 80 / 17%);

  ${({ $isLocked }) =>
    $isLocked &&
    css`
      background-color: var(--primary-color);
    `}
`;

export const DownloadsCardIconContainer = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const DownloadsCardButton = styled(Touchable)`
  width: 100%;
  justify-content: flex-start;
`;

export const DownloadsCardFilename = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 768px) {
    word-break: break-word;
  }
`;

export const DownloadsCardUnlockButton = styled(DownloadsCardButton)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
