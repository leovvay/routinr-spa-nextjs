import React, { memo } from 'react';

import Image from '@components/Image';
import Text from '@components/Text';
import Button from '@components/Button';
import Touchable from '@components/Touchable';
import ButtonShare from '@components/ButtonShare';
import { Routine } from '@store/services/routines';
import ButtonBuy from '@components/ButtonBuy';
import StatisticItem from '@components/StatisticItem';

import {
  ContentInfoDialog,
  ContentInfoDialogActions,
  ContentInfoDialogContent,
  ContentInfoDialogHeaderActions,
  ContentInfoDialogTitle,
  ContentInfoDialogAvatar,
  ContentInfoDialogHeaderInfoContainer,
  ContentInfoDialogHeaderContentInfo,
  ContentInfoDialogContentSection,
  ContentInfoDialogActionButton,
  ContentInfoDialogAbout,
  ContentInfoCoverContainer,
  ContentInfoCoverGradient,
} from '../ContentInfo.styled';
import { ModalRoutineInfoStatistic } from './ModalRoutineInfo.styled';

interface ModalRoutineInfoProps {
  routine: Routine;
  onClose(): void;
}

function ModalRoutineInfo({
  routine,
  onClose,
}: ModalRoutineInfoProps): JSX.Element {
  return (
    <ContentInfoDialog open onClose={onClose} scroll="body">
      <ContentInfoDialogTitle>
        <ContentInfoDialogHeaderInfoContainer>
          <ContentInfoDialogAvatar
            src={routine.creator.avatar}
            width={70}
            height={70}
          />
          <ContentInfoDialogHeaderContentInfo>
            <Text size="h3" as="p" weight={600}>
              {routine.title}
            </Text>
          </ContentInfoDialogHeaderContentInfo>
        </ContentInfoDialogHeaderInfoContainer>
        <ContentInfoDialogHeaderActions>
          <ButtonShare
            title={routine.title}
            type="routine"
            slug={routine.slug}
            userId={routine.creator.id}
          />
          <Touchable onClick={onClose}>
            <Image src="/close-white.svg" width={25} height={25} />
          </Touchable>
        </ContentInfoDialogHeaderActions>
      </ContentInfoDialogTitle>
      <ContentInfoCoverContainer>
        <Image src={routine.cover.url} layout="fill" objectFit="cover" />
        <ContentInfoCoverGradient />
      </ContentInfoCoverContainer>
      <ContentInfoDialogContent>
        <ModalRoutineInfoStatistic>
          <StatisticItem
            icon="/followers.svg"
            count={routine.usageCount}
            text="use this"
          />
          <StatisticItem
            icon="/calendar.svg"
            count={routine.daysCount}
            text="days"
          />
        </ModalRoutineInfoStatistic>
        <ContentInfoDialogContentSection>
          <Text size="h6" weight={700} as="h6">
            Routine notes
          </Text>
          <ContentInfoDialogAbout size="bodySmall" as="pre">
            {routine.description}
          </ContentInfoDialogAbout>
        </ContentInfoDialogContentSection>
      </ContentInfoDialogContent>
      <ContentInfoDialogActions>
        <ContentInfoDialogActionButton href={`/routines/${routine.slug}`}>
          <Button
            variant="outlined"
            shadow
            startIcon={<Image src="/profile-icon.svg" width={22} height={20} />}
          >
            <Text>More info</Text>
          </Button>
        </ContentInfoDialogActionButton>
        <ContentInfoDialogActionButton href={`/routines/${routine.slug}`}>
          <ButtonBuy
            onClick={() => {}}
            price={routine.price}
            isFree={routine.isFree}
            size="medium"
            shadow
          />
        </ContentInfoDialogActionButton>
      </ContentInfoDialogActions>
    </ContentInfoDialog>
  );
}

export default memo(ModalRoutineInfo);
