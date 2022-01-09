import React from 'react';

import Image from '@components/Image/Image';
import {
  ReportButtonContainer,
  ReportButtonText,
} from '@components/ReportButton/ReportButton.styled';
import { useIsMobileVersion } from '@hooks';

interface ReportButtonProps {
  type: 'routine' | 'post' | 'profile';
  onClick(): void;
}

function ReportButton({ type, onClick }: ReportButtonProps): JSX.Element {
  const isMobile = useIsMobileVersion();

  return (
    <ReportButtonContainer onClick={onClick}>
      <ReportButtonText size={isMobile ? 'bodyLead' : 'h3'} weight={700}>
        <Image src="/flag-outlined.svg" width={30} height={30} />
        Report this {type}
      </ReportButtonText>
    </ReportButtonContainer>
  );
}

export default ReportButton;
