import styled, { css } from 'styled-components';

import Text from '@components/Text';
import Followers from '@components/Followers';

export const DashboardContainer = styled.div`
  padding: 68px 10%;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const CreatorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 23px;

  border-bottom: 1px solid var(--main-border-color);

  ${Followers} {
    ${Text} {
      text-align: right;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: unset;
    border-bottom: unset;

    ${Followers} {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid var(--main-border-color);

      ${Text} {
        text-align: left;
      }
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Handle = styled(Text)`
  color: var(--text-primary-color);
`;

export const MainContent = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 40px;

  margin-top: 30px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LinksContainer = styled.div``;

export const ActionCardButton = styled.div`
  width: fit-content;
  padding: 8px 18px;
  border-radius: 22px;
  color: var(--white);
  background-color: var(--green);

  &:hover {
    background-color: var(--green-dark);
  }
`;

export const ActionCard = styled.div<{
  variant: 'success' | 'warning' | 'info';
}>`
  grid-column: 1 / span 2;
  grid-row: 1;
  align-self: start;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  border-radius: 8px;

  ${({ variant }) =>
    variant === 'success' &&
    css`
      background-color: var(--success-bg-color);
    `}
  ${({ variant }) =>
    variant === 'info' &&
    css`
      background-color: var(--info-bg-color);

      ${ActionCardButton} {
        background-color: var(--primary-color);

        &:hover {
          background-color: var(--primary-color-dark);
        }
      }
    `}
  ${({ variant }) =>
    variant === 'warning' &&
    css`
      background-color: var(--warning-bg-color);
    `}
`;

export const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
