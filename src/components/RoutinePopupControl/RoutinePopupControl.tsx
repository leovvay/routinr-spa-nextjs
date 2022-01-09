import React, { useState } from 'react';

import List from '@mui/material/List';

import { RoutineInCalendarInfo } from '@store/services/routines';
import Image from '@components/Image';
import Text from '@components/Text';
import { useSegment, useUser } from '@hooks';
import {
  useAddRoutineToPlanMutation,
  useRemoveRoutineFromPlanMutation,
} from '@store/services/plan/plan';

import Downloads from './components/Downloads';
import StartDayModal from './components/StartDayModal';

import {
  RoutinePopupControlDialog,
  RoutinePopupControlLink,
  RoutinePopupControlListItem,
  RoutinePopupControlListItemButton,
} from './RoutinePopupControl.styled';

interface Props {
  isOpen: boolean;
  onClose(): void;
  routine: RoutineInCalendarInfo;
  onUsingChange?(): void;
}

const defaultProps = {
  onUsingChange: () => {},
  forceMobile: false,
};

type RoutinePopupControlProps = Props & typeof defaultProps;

function RoutinePopupControl({
  isOpen,
  onClose,
  routine,
  onUsingChange,
}: RoutinePopupControlProps): JSX.Element {
  const { currentUser } = useUser();
  const { trackAttachmentsDownload } = useSegment();

  const [showDownloads, setShowDownloads] = useState(false);
  const [showStartDayModal, setShowStartDayModal] = useState(false);

  const [addRoutine] = useAddRoutineToPlanMutation();
  const [removeRoutine] = useRemoveRoutineFromPlanMutation();

  const { isUsed } = routine.routineUserInfo;

  const handleUsing = async () => {
    if (isUsed) await removeRoutine(Number(routine.id));
    else await addRoutine(Number(routine.id));

    onUsingChange();
  };

  return (
    <RoutinePopupControlDialog open={isOpen} onClose={onClose}>
      <Image
        src={routine.cover.previewUrl}
        width={270}
        height={150}
        objectFit="cover"
      />
      <List>
        <RoutinePopupControlListItem divider>
          <Text size="h6">{routine.title}</Text>
        </RoutinePopupControlListItem>
        <RoutinePopupControlLink href={`/routines/${routine.slug}`}>
          <RoutinePopupControlListItemButton divider>
            <Text size="bodyBold">Routine details</Text>
          </RoutinePopupControlListItemButton>
        </RoutinePopupControlLink>
        <RoutinePopupControlListItemButton
          divider
          onClick={() => setShowDownloads(true)}
          disabled={!routine.attachments.length}
        >
          <Text size="bodyBold">Downloads ({routine.attachments.length})</Text>
        </RoutinePopupControlListItemButton>
        <RoutinePopupControlListItemButton
          divider
          onClick={() => setShowStartDayModal(true)}
          disabled={!isUsed}
        >
          <Text size="bodyBold">Set start date</Text>
        </RoutinePopupControlListItemButton>
        <RoutinePopupControlLink href={`/profile/${routine.creator.slug}`}>
          <RoutinePopupControlListItemButton divider>
            <Text size="bodyBold">View creator</Text>
          </RoutinePopupControlListItemButton>
        </RoutinePopupControlLink>
        <RoutinePopupControlListItemButton onClick={handleUsing}>
          <Text size="bodyBold">{isUsed ? 'Stop' : 'Start'} using</Text>
        </RoutinePopupControlListItemButton>
      </List>
      <Downloads
        isOpen={showDownloads}
        onClose={() => setShowDownloads(false)}
        files={routine.attachments}
        onDownload={() =>
          trackAttachmentsDownload(routine.title, currentUser?.id as number)
        }
      />
      <StartDayModal
        isOpen={showStartDayModal}
        onClose={() => setShowStartDayModal(false)}
        routine={routine}
      />
    </RoutinePopupControlDialog>
  );
}

RoutinePopupControl.defaultProps = defaultProps;

export default RoutinePopupControl;
