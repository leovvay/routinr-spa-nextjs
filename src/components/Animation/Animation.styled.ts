import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import Image from '@components/Image';

interface AnimContainerProps {
  isHidden?: Boolean;
  top?: number;
}

export const AnimContainer = styled.div<AnimContainerProps>`
  position: absolute;
  ${({ top }) =>
    top &&
    css`
      top: ${top}px;
    `}
  left: 255px;
  width: 297px;
  height: 280px;
  ${({ isHidden }) =>
    isHidden &&
    css`
      overflow: hidden;
    `}
`;

export const Container = styled.div`
  position: relative;
`;

interface AnimCardProps {
  top: number;
  left: number;
  background: string;
}

export const AnimCard = styled(motion.div)<AnimCardProps>`
  position: absolute;
  overflow: hidden;
  width: 84px;
  height: 84px;
  top: ${({ top }) => `${top}px;`}
  left: calc((100% - 356px) / 2 + ${({ left }) => `${left}px`});
  background: ${({ background }) => `${background}`};
  border-radius: 8px;
  z-index: 2;
`;

export const AnimCardHeader = styled(motion.div)`
  width: 84px;
  display: flex;
  flex-direction: column;
  padding: 4px;
  margin-left: 5px;
`;

export const AnimCardContent = styled.div`
  position: relative;
  text-align: right;
`;

export const AnimImageContainer = styled(motion.div)`
  position: relative;
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: 5px;
`;

interface AnimationCardImageProps {
  isTopRadius?: boolean;
}

export const AnimationCardImage = styled(Image)<AnimationCardImageProps>`
  border-radius: ${({ isTopRadius }) => (isTopRadius ? '4px 4px 0 0' : '4px')};
`;
