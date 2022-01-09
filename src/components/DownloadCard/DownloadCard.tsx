import React from 'react';

import Stack from '@mui/material/Stack';

import { useIsMobileVersion } from '@hooks';
import Image from '@components/Image/Image';
import { TextLight } from '@components/Text';

import {
  DownloadsCardButton,
  DownloadsCardContainer,
  DownloadsCardFilename,
  DownloadsCardIconContainer,
} from './DownloadCard.styled';

interface DownloadCardProps {
  filename: string;
  onClick(): void;
  isLocked: boolean;
  className?: string;
}

function DownloadCard({
  filename,
  onClick,
  className,
  isLocked,
}: DownloadCardProps): JSX.Element {
  const isMobile = useIsMobileVersion();
  return (
    <DownloadsCardContainer className={className} $isLocked={isLocked}>
      <DownloadsCardButton onClick={onClick}>
        {isLocked ? (
          <Stack direction="column" justifyContent="center" flexGrow={1}>
            <Image src="/round-lock-opened.svg" width={16} height={23} />
            <TextLight>Unlock</TextLight>
          </Stack>
        ) : (
          <Stack
            direction={isMobile ? 'column' : 'row'}
            spacing={2}
            overflow="hidden"
          >
            <DownloadsCardIconContainer>
              <Image src="/fileIcon.svg" width={18} height={24} />
            </DownloadsCardIconContainer>
            <DownloadsCardFilename>{filename}</DownloadsCardFilename>
          </Stack>
        )}
      </DownloadsCardButton>
    </DownloadsCardContainer>
  );
}

DownloadCard.defaultProps = {
  className: undefined,
};

export default DownloadCard;
