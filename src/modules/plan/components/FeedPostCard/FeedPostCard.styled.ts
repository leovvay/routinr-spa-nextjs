import styled, { css } from 'styled-components';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Card from '@mui/material/Card';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const FeedPostCardExpandMore = styled(IconButton)<ExpandMoreProps>`
  transform: rotate(0deg);
  margin-left: auto;
  transition: transform 0.2s;

  ${({ expand }) =>
    expand &&
    css`
      transform: rotate(180deg);
    `}
`;

export const FeedPostCardCover = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
`;

export const FeedPostCardContainer = styled(Card)`
  width: 100%;
`;
