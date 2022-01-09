import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import MuiDrawer from '@mui/material/Drawer';

import Avatar from '@components/Avatar';
import LinkTo from '@components/LinkTo';
import Button from '@components/Button';
import Text from '@components/Text';
import ButtonBackMobile from '@components/ButtonBackMobile';

export const ContentInfoDialog = styled(Dialog)`
  & .MuiBackdrop-root {
    background-color: var(--modal-backdrop-color);
    opacity: 0.8 !important;
  }

  & .MuiDialog-paper {
    width: 600px;
  }
`;
export const ContentInfoDialogActions = styled(DialogActions)`
  padding: 30px;
  display: grid;
  grid-template-columns: 200px 200px;
  justify-content: center;
`;
export const ContentInfoDialogContent = DialogContent;
export const ContentInfoDialogContentText = DialogContentText;
export const ContentInfoDialogTitle = styled(DialogTitle).attrs({
  disableTypography: true,
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 23px;
  background-color: var(--text-primary-color);
  color: var(--white);
`;

export const ContentInfoDialogHeaderActions = styled.div`
  display: flex;
  align-items: center;

  *:not(:first-child) {
    margin-left: 20px;
  }
`;

export const ContentInfoDialogHeaderInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentInfoDialogHeaderContentInfo = styled.div`
  margin-left: 20px;
`;

export const ContentInfoDialogContentSection = styled.section`
  padding: 20px 0;
  border-bottom: 1px solid var(--main-border-color);

  @media screen and (max-width: 768px) {
    &:last-child {
      border-bottom: unset;
    }
  }
`;

export const ContentInfoDialogAvatar = styled(Avatar)`
  @media screen and (min-width: 768px) {
    border: 3px solid var(--main-border-color) !important;
  }
`;

export const ContentInfoDialogActionButton = styled(LinkTo)`
  & ${Button} {
    width: 100%;
  }
`;

export const ContentInfoDialogStatistic = styled(
  ContentInfoDialogContentSection
)`
  display: flex;
  padding: 50px 0;
  justify-content: space-around;
`;

export const ContentInfoDialogAbout = styled(Text)`
  max-height: 265px;
  padding-right: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    height: 46px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--text-subtitle-color);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 10px;
  }

  &::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 10px;
  }
`;

export const ContentInfoCoverContainer = styled.div`
  width: 100%;
  height: 420px;
  position: relative;
`;

export const ContentInfoCoverGradient = styled.div`
  content: '';
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(
    to top,
    var(--text-primary-color),
    rgba(46, 126, 255, 0.2) 30%
  );
`;

export const ContentInfoDrawer = styled(MuiDrawer)`
  & .MuiDrawer-paper {
    width: 80%;
    max-width: 400px;
  }
`;

export const ContentInfoDrawerStatistic = styled(ContentInfoDialogStatistic)`
  padding: 25px 0;
`;

export const ContentInfoDrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;
`;

export const ContentInfoDrawerBackButton = styled(ButtonBackMobile)`
  transform: rotate(180deg);
`;

export const ContentInfoDrawerMoreButton = styled(LinkTo)`
  display: flex;
  justify-content: space-between;
`;
