import styled, { css } from 'styled-components';
import Dialog from '@mui/material/Dialog';

import Text from '@components/Text';
import LinkTo from '@components/LinkTo';
import Button from '@components/Button/Button';

const shareCss = css`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);

  font-size: 24px;
`;

export const CompleteModalDialog = styled(Dialog)`
  font-family: var(--font-primary);

  & .MuiDialog-paper {
    gap: 32px;
    padding: 40px 32px 44px;
  }
`;

export const CompleteModalTitle = styled(Text)`
  text-align: center;
`;

export const CompleteModalFBShare = styled(LinkTo)`
  color: var(--white);
  background-color: #3d5a96;

  ${shareCss}
`;

export const CompleteModalTwitterShare = styled(CompleteModalFBShare)`
  background-color: #2aa3ef;
`;

export const CompleteModalINShare = styled(CompleteModalFBShare)`
  background-color: #007ab7;
`;

export const CompleteModalShareContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const CompleteModalCopyContainer = styled.div`
  display: flex;
`;

export const CompleteModalShareInput = styled.input.attrs({
  readonly: true,
})`
  border: 1px solid var(--main-border-color);
  border-radius: 4px 0 0 4px;
  width: calc(100% - 80px);
  padding: 15px 16px;
  border-right: none;
`;

export const CompleteModalCopyButton = styled(Button)`
  border-radius: 0 4px 4px 0;
  width: 80px;
  padding: 12px 16px;
  font-size: 16px;
`;

export const CompleteModalHelpText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CompleteModalGuideLink = styled(LinkTo)`
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 700;
`;

export const CompleteModalActions = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > * {
    width: calc((100% - 48px) / 2);
    padding: 5px;
    display: flex;
    justify-content: center;

    font-size: 16px;
    font-weight: 700;
    color: var(--white);
    background-color: var(--primary-color);
    border-radius: 25px;
  }
`;
