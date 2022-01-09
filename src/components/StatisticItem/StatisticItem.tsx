import React, { memo } from 'react';

import Image from '@components/Image';
import Text from '@components/Text';
import { useIsMobileVersion } from '@hooks';

import {
  StatisticItemContainer,
  StatisticItemTextContainer,
} from './StatisticItem.styled';

interface StatisticItemProps {
  icon: string;
  text: string;
  count: number;
  className?: string;
  noPaddings?: boolean;
}

function StatisticItem({
  icon,
  text,
  count,
  className,
  noPaddings,
}: StatisticItemProps): JSX.Element {
  const isMobile = useIsMobileVersion();
  const textSize = isMobile ? 'validationCaption' : 'bodyLead';
  const iconWidth = isMobile ? 28 : 40;
  const iconHeight = isMobile ? 25 : 40;
  return (
    <StatisticItemContainer className={className} $noPaddings={noPaddings}>
      <Image src={icon} width={iconWidth} height={iconHeight} />
      <StatisticItemTextContainer>
        <Text size={textSize}>{count}</Text>
        <Text size={textSize} weight={600}>
          {text}
        </Text>
      </StatisticItemTextContainer>
    </StatisticItemContainer>
  );
}

StatisticItem.defaultProps = {
  className: undefined,
  noPaddings: false,
};

export default memo(StatisticItem);
