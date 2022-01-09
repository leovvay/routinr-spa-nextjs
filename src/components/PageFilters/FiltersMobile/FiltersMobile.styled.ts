import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

import Text from '@components/Text';
import Touchable from '@components/Touchable';

export const FiltersMobileDialog = styled(Dialog)`
  & .MuiDialog-paper {
    padding: 30px 20px;
    background-color: var(--text-primary-color);
  }
`;

export const FiltersMobileButton = styled(Button)`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1;
`;

export const FiltersMobileSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

export const FiltersMobileTitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const FiltersMobileIcon = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 50%;
`;

export const FiltersMobileText = styled(Text).attrs({
  weight: 700,
})`
  color: var(--white);
`;

export const FiltersMobileTitle = styled(Text)`
  color: var(--primary-color);
`;

export const FiltersMobileOptionText = styled(FiltersMobileText)`
  opacity: 0.7;
`;

export const FiltersMobileOption = styled(Touchable)`
  justify-content: start;
`;

export const FiltersMobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
