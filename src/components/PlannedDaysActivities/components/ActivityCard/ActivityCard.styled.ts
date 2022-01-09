import styled, { css } from 'styled-components';

import Touchable from '@components/Touchable';

export const ActivityCardCover = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ActivityCardCoverButton = styled(Touchable)`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ActivityCardTitle = styled(Touchable)`
  justify-content: flex-start;
`;

export const ActivityCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px 0 16%;
`;

export const ActivityCardTime = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const ActivityCardLine = styled.div`
  width: 20px;
  height: 1px;
  margin: 0 10px;
  border-bottom: 1px solid var(--grey);
`;

const mobileContainerStyles = css`
  height: unset;
  grid-template-columns: 1fr;
  background-color: inherit;
  grid-gap: 15px;

  ${ActivityCardCover} {
    grid-row: 1;
    height: 90px;
    overflow: hidden;

    border-radius: 10px;
    box-shadow: 0 4px 6px rgb(116 116 116 / 20%);
  }

  ${ActivityCardInfo} {
    padding-left: 30px;
    background-color: inherit;
  }
`;

export const ActivityCardContainer = styled.div<{
  $forceMobile: boolean;
}>`
  height: 380px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  background-color: var(--white);
  border-radius: 4px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    ${mobileContainerStyles}
  }

  ${({ $forceMobile }) => $forceMobile && mobileContainerStyles}
`;
