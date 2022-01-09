import React from 'react';
import { useRouter } from 'next/router';

import {
  useAddRoutineToPlanMutation,
  useRemoveRoutineFromPlanMutation,
} from '@store/services/plan';
import { RoutineWithUserInfo } from '@store/services/routines';
import { useUser } from '@hooks';

import {
  RoutineActionButtonText,
  RoutineBuyButton,
} from '@modules/routines/[slug]/index.styled';

import { RoutineDesktopActionButton } from '../RoutineDesktop/RoutineDesktop.styled';

interface RoutineActionButtonProps {
  routine: RoutineWithUserInfo;
  onUpdate(): void;
  onBuy(): void;
}

function RoutineActionButton({
  routine,
  onUpdate,
  onBuy,
}: RoutineActionButtonProps): JSX.Element {
  const { currentUser } = useUser();
  const router = useRouter();

  const [addRoutineToPlan] = useAddRoutineToPlanMutation();
  const [removeRoutineFromPlan] = useRemoveRoutineFromPlanMutation();

  const { isPurchased, isUsed } = routine.routineUserInfo;

  const handleAction = async () => {
    if (isUsed) {
      await removeRoutineFromPlan(Number(routine.id));
    } else {
      await addRoutineToPlan(Number(routine.id));
      router.push('/plan');
    }
    onUpdate();
  };

  return isPurchased && currentUser ? (
    <RoutineDesktopActionButton onClick={handleAction}>
      <RoutineActionButtonText weight={700}>
        {isUsed ? 'Stop using' : 'Add to plan'}
      </RoutineActionButtonText>
    </RoutineDesktopActionButton>
  ) : (
    <RoutineBuyButton
      price={routine.price}
      isFree={routine.isFree}
      onClick={onBuy}
      withoutIcon
    />
  );
}

export default RoutineActionButton;
