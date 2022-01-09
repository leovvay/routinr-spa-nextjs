import React, { useState } from 'react';

import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import LinkTo from '@components/LinkTo';
import { pluralize } from '@utils';
import { RoutineInPlanInfo } from '@store/services/routines';
import RoutinePopupControl from '@components/RoutinePopupControl';

import {
  RoutineCardContainer,
  RoutineCardCover,
  RoutineCardCreator,
  RoutineCardCreatorAvatar,
  RoutineCardInfo,
  RoutineCardInfoContainer,
  RoutineCardInfoIcon,
  RoutineCardInfoText,
  RoutineCardTitle,
} from '../RoutineCards.styled';
import {
  RoutineInPlanCardButton,
  RoutineInPlanCardInfo,
  RoutineInPlanCardTitle,
} from './RoutineInPlanCard.styled';

interface RoutineInPlanCardProps {
  routine: RoutineInPlanInfo;
  onUsingChange?(): void;
}

function RoutineInPlanCard({
  routine,
  onUsingChange,
}: RoutineInPlanCardProps &
  typeof RoutineInPlanCard.defaultProps): JSX.Element {
  const {
    cover,
    title,
    attachmentsCount,
    daysCount,
    creator,
    routineUserInfo,
  } = routine;

  const [showWidget, setShowWidget] = useState(false);
  return (
    <RoutineCardContainer>
      <RoutineCardCover src={cover.url} layout="fill" objectFit="cover" />
      <RoutineCardCreator onClick={(e) => e.stopPropagation()}>
        <LinkTo href={`/profile/${creator.slug}`}>
          <RoutineCardCreatorAvatar
            src={creator.avatar}
            width={40}
            height={40}
          />
        </LinkTo>
      </RoutineCardCreator>
      <RoutineCardInfoContainer>
        <RoutineInPlanCardTitle>
          <Tooltip title={title} arrow>
            <RoutineCardTitle size="bodySmallExtraBold">
              {title}
            </RoutineCardTitle>
          </Tooltip>
          <RoutineInPlanCardButton onClick={() => setShowWidget(true)}>
            <MoreVertIcon />
          </RoutineInPlanCardButton>
        </RoutineInPlanCardTitle>

        <RoutineInPlanCardInfo>
          <Chip
            size="small"
            label={routineUserInfo.isUsed ? 'Active' : 'Inactive'}
            color={routineUserInfo.isUsed ? 'success' : 'default'}
          />
          <RoutineCardInfo>
            <RoutineCardInfoIcon src="/fileIcon.svg" width={14} height={17} />
            <RoutineCardInfoText size="validationCaption">
              {pluralize(attachmentsCount, 'attachment')}
            </RoutineCardInfoText>
          </RoutineCardInfo>
          <RoutineCardInfo>
            <RoutineCardInfoIcon src="/calendar.svg" width={14} height={13} />
            <RoutineCardInfoText size="validationCaption">
              {pluralize(daysCount, 'day')}
            </RoutineCardInfoText>
          </RoutineCardInfo>
        </RoutineInPlanCardInfo>
      </RoutineCardInfoContainer>
      <RoutinePopupControl
        isOpen={showWidget}
        onClose={() => setShowWidget(false)}
        routine={routine}
        onUsingChange={onUsingChange}
      />
    </RoutineCardContainer>
  );
}

RoutineInPlanCard.defaultProps = {
  onUsingChange: () => {},
};

export default RoutineInPlanCard;
