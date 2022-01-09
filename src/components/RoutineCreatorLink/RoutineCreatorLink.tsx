import React from 'react';

import { useIsMobileVersion } from '@hooks';
import Avatar from '@components/Avatar';
import { Routine } from '@store/services/routines';

import {
  RoutineCreatorHandle,
  RoutineCreatorLinkLink,
} from './RoutineCreatorLink.styled';

interface RoutineCreatorLinkProps {
  creator: Routine['creator'];
}

function RoutineCreatorLink({ creator }: RoutineCreatorLinkProps): JSX.Element {
  const isMobile = useIsMobileVersion();

  const avatarEdge = isMobile ? 40 : 48;
  const creatorHandleSize = isMobile ? 'bodySmallMedium' : 'bodyBold';

  return (
    <RoutineCreatorLinkLink href={`/profile/${creator.slug}`}>
      <Avatar src={creator.avatar} height={avatarEdge} width={avatarEdge} />
      <RoutineCreatorHandle size={creatorHandleSize}>
        @{creator.handle}
      </RoutineCreatorHandle>
    </RoutineCreatorLinkLink>
  );
}

export default RoutineCreatorLink;
