import styled from 'styled-components';

import LinkTo from '@components/LinkTo/LinkTo';
import Text from '@components/Text';
import Touchable from '@components/Touchable';
import ButtonBuy from '@components/ButtonBuy';
import ButtonShare from '@components/ButtonShare';

export const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 25px;
`;

export const TagItem = styled(LinkTo).attrs({
  blue: true,
})``;

export const SectionTitle = styled(Text)`
  display: flex;
  align-items: center;
  gap: 17px;
  margin-bottom: 18px;

  @media screen and (max-width: 768px) {
    gap: 12px;
    margin-bottom: 16px;
  }
`;

export const RoutinePageButton = styled(Touchable)`
  border-radius: 25px;
  padding: 10px 35px;
  border: 1px solid var(--grey);
`;

export const RoutineActionButtonText = styled(Text)`
  color: var(--text-primary-color);
`;

export const RoutineBuyButton = styled(ButtonBuy)`
  width: 43%;
`;

export const RoutineShareButton = styled(ButtonShare)`
  width: 40%;

  > div:first-child {
    width: 100%;
  }
`;
