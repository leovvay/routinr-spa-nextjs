import React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';

import Text from '@components/Text';
import Button from '@components/Button/Button';
import { RoutineInCalendarInfo } from '@store/services/routines';
import DownloadCard from '@components/DownloadCard';
import { useDownloads } from '@hooks';

interface DownloadsProps {
  isOpen: boolean;
  onClose(): void;
  files: RoutineInCalendarInfo['attachments'];
  onDownload(): void;
}

function Downloads({
  files,
  isOpen,
  onClose,
  onDownload,
}: DownloadsProps): JSX.Element {
  const { filesWithNames, downloadItem, downloadAll } = useDownloads(
    files,
    onDownload
  );

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <Text size="h6">Available downloads</Text>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          {filesWithNames.map((fileWithName) => (
            <DownloadCard
              key={fileWithName.url}
              isLocked={!fileWithName.url}
              filename={fileWithName.name}
              onClick={() => downloadItem(fileWithName)}
            />
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button fullWidth onClick={downloadAll}>
          Download all
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Downloads;
