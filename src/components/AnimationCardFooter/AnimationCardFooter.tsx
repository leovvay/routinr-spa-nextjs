import React from 'react';

import { MotionStyle } from 'framer-motion';

import Image from '@components/Image';
import Text from '@components/Text';

import { AnimCardFooter, Row, Column } from './AnimationCardFooter.styled';

interface AnimationCardFooterProps {
  clockIcon: string;
  zoomIcon: string;
  color: string;
  titleText: string;
  timeText: string;
  style: MotionStyle;
}

export default function AnimationCardFooter({
  clockIcon,
  zoomIcon,
  color,
  titleText,
  timeText,
  style,
}: AnimationCardFooterProps): JSX.Element {
  return (
    <AnimCardFooter style={style}>
      <Column>
        <Text
          color={color}
          fontFamily="var(--font-secondary)"
          fontSize={8}
          lineHeight={10}
          letterSpacing="0.01em"
        >
          {titleText}
        </Text>
        <Row>
          <Image src={clockIcon} width={7} height={7} />
          <Text
            color={color}
            fontFamily="var(--font-secondary)"
            fontSize={6}
            lineHeight={8}
            letterSpacing="0.01em"
            weight={400}
          >
            {timeText}
          </Text>
        </Row>
      </Column>
      <Image src={zoomIcon} width={10} height={10} />
    </AnimCardFooter>
  );
}
