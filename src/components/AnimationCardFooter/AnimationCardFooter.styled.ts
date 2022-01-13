import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AnimCardFooter = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  padding: 4px 8px;
`;

export const Row = styled.div`
  display: flex;
  gap: 2px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
