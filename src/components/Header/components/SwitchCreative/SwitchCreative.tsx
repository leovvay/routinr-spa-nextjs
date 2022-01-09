import React from 'react';

import Image from '@components/Image';
import { useIsMobileVersion } from '@hooks';

import { SwitchCreativeProps } from './SwitchCreative.types';

import {
  SwitchCreativeContainer,
  SwitchCreativeLabel,
} from './SwitchCreative.styled';

export default function SwitchCreative({
  isCreator,
  fullWidth = false,
  handleChange,
}: SwitchCreativeProps): JSX.Element {
  const isMobile = useIsMobileVersion();

  return (
    <SwitchCreativeContainer onClick={handleChange} $fullWidth={fullWidth}>
      <SwitchCreativeLabel isMobile={isMobile}>
        {'Switch to '}
        {isCreator ? 'user' : 'creator'}
      </SwitchCreativeLabel>
      <Image src="/switch.svg" alt="switch" width={16} height={19} />
    </SwitchCreativeContainer>
  );
}
