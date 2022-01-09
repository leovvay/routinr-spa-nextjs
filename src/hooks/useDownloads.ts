import { useCallback, useMemo } from 'react';

import { useSnackbar } from 'notistack';

import { RoutineInCalendarInfo } from '@store/services/routines';

interface FileWithName {
  name: string;
  url: string;
}

interface UseDownloadsResult {
  downloadItem(file: FileWithName): void;
  downloadAll(): void;
  filesWithNames: FileWithName[];
}

export default function useDownloads(
  files: RoutineInCalendarInfo['attachments'],
  onDownload?: () => void
): UseDownloadsResult {
  const { enqueueSnackbar } = useSnackbar();

  const filesWithNames = useMemo(
    () =>
      files.map<FileWithName>((file) => ({
        name: file.filename || (file.url.split('/').pop() as string),
        url: file.url,
      })),
    [files]
  );

  const downloadItem = useCallback(
    ({ name, url }: FileWithName) => {
      if (url) {
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute('href', url);
        downloadAnchor.setAttribute('download', name);
        downloadAnchor.setAttribute('target', '_blank');
        downloadAnchor.click();
        downloadAnchor.remove();
        onDownload?.();
      } else {
        enqueueSnackbar('Purchase this routine to download this file', {
          variant: 'info',
        });
      }
    },
    [enqueueSnackbar, onDownload]
  );

  const downloadAll = useCallback(() => {
    filesWithNames.forEach(async (file) => {
      if (file.url) {
        const response = await fetch(file.url);

        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');

          a.style.display = 'none';
          a.href = url;
          a.download = file.name;
          document.body.appendChild(a);

          a.click();
          URL.revokeObjectURL(url);
          a.remove();
        }
      }
    });
    onDownload?.();
  }, [filesWithNames, onDownload]);

  return {
    filesWithNames,
    downloadAll,
    downloadItem,
  };
}
