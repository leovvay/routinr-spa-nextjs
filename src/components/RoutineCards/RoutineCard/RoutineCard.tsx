import React, { memo } from 'react';

import Tooltip from '@mui/material/Tooltip';

import { Routine } from '@store/services/routines';
import { pluralize } from '@utils';
import ButtonBuy from '@components/ButtonBuy';
import LinkTo from '@components/LinkTo';

import {
  RoutineCardButtonBuy,
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

interface RoutineCardRoutine
  extends Pick<
    Routine,
    'title' | 'attachmentsCount' | 'daysCount' | 'price' | 'isFree'
  > {
  cover: { url: string };
  creator: Pick<Routine['creator'], 'slug' | 'avatar'>;
}

interface RoutineCardProps {
  routine: RoutineCardRoutine;
}

function RoutineCard({ routine }: RoutineCardProps): JSX.Element {
  const { cover, title, attachmentsCount, daysCount, price, isFree, creator } =
    routine;

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
        <Tooltip title={title} arrow>
          <RoutineCardTitle size="h6">{title}</RoutineCardTitle>
        </Tooltip>
        <RoutineCardInfo>
          <RoutineCardInfoIcon src="/fileIcon.svg" width={14} height={17} />
          <RoutineCardInfoText size="bodySmallBold">
            {pluralize(attachmentsCount, 'attachment')}
          </RoutineCardInfoText>
        </RoutineCardInfo>
        <RoutineCardInfo>
          <RoutineCardInfoIcon src="/calendar.svg" width={14} height={13} />
          <RoutineCardInfoText size="bodySmallBold">
            {pluralize(daysCount, 'day')}
          </RoutineCardInfoText>
        </RoutineCardInfo>
        <RoutineCardButtonBuy>
          <ButtonBuy
            isFree={isFree}
            price={price}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </RoutineCardButtonBuy>
      </RoutineCardInfoContainer>
    </RoutineCardContainer>
  );
}

export default memo(RoutineCard);
