import React, { useMemo } from 'react';

import { useIsMobileVersion } from '@hooks';

import {
  RoutineBenefitsContainer,
  RoutineBenefitsItem,
  RoutineBenefitsList,
  RoutineBenefitsListItem,
} from './RoutineBenefits.styled';

interface RoutineBenefitsProps {
  benefits: string;
}

function RoutineBenefits({ benefits }: RoutineBenefitsProps): JSX.Element {
  const isMobile = useIsMobileVersion();

  const textSize = isMobile ? 'bodySmallBold' : 'bodyLead';
  const benefitsArray = useMemo(
    () => benefits.split('\n').filter((benefit) => benefit),
    [benefits]
  );

  return (
    <RoutineBenefitsContainer>
      <RoutineBenefitsList>
        {benefitsArray.map((benefit) => (
          <RoutineBenefitsItem key={benefit}>
            <RoutineBenefitsListItem size={textSize} weight={500}>
              {benefit}
            </RoutineBenefitsListItem>
          </RoutineBenefitsItem>
        ))}
      </RoutineBenefitsList>
    </RoutineBenefitsContainer>
  );
}

export default RoutineBenefits;
