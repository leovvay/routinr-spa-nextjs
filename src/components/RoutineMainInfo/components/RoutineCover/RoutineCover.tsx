import React, { useMemo } from 'react';

import styled from 'styled-components';

import { Routine } from '@store/services/routines';
import Image from '@components/Image';

import {
  RoutineCoverContainer,
  RoutineCoverYouTube,
} from './RoutineCover.styled';

interface RoutineCoverProps {
  routine: Routine;
  className?: string;
}

function RoutineCover({ routine, className }: RoutineCoverProps): JSX.Element {
  const cover = useMemo(() => {
    if (routine.youtubeUrl)
      return <RoutineCoverYouTube url={routine.youtubeUrl} />;
    if (routine.promoVideo) return <video src={routine.promoVideo} />;
    return <Image src={routine.cover.url} layout="fill" objectFit="cover" />;
  }, [routine.cover.url, routine.promoVideo, routine.youtubeUrl]);

  return (
    <RoutineCoverContainer className={className}>{cover}</RoutineCoverContainer>
  );
}

RoutineCover.defaultProps = {
  className: undefined,
};

export default styled(RoutineCover)``;
