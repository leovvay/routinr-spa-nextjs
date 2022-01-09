import styled from 'styled-components';

import {
  ContentInfoDialog,
  ContentInfoDialogAbout,
  ContentInfoDialogActions,
  ContentInfoDialogContent,
} from '../ContentInfo.styled';

export const ModalMembershipInfoDialog = styled(ContentInfoDialog)`
  & .MuiDialog-paper {
    background-color: var(--main-bg-color);
  }
`;

export const ModalMembershipInfoContentTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 210px);
  justify-content: center;
  gap: 20px;
`;

export const ModalMembershipInfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: var(--white);
`;

export const ModalMembershipInfoDescription = styled(ContentInfoDialogAbout)`
  margin-top: 10px;
`;

export const ModalMembershipInfoContentContainer = styled(
  ContentInfoDialogContent
)`
  padding: 30px 57px;
`;

export const ModalMembershipInfoActions = styled(ContentInfoDialogActions)`
  grid-template-columns: 196px;
`;
