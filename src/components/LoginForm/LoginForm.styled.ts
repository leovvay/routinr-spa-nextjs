import styled from 'styled-components';

import { TextLight } from '@components/Text';
import LinkTo from '@components/LinkTo';
import Button from '@components/Button';

export const LoginTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--main-border-color);
`;

export const LoginLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const LoginSignUpButton = styled(TextLight)`
  &:hover {
    color: var(--text-primary-color);
    cursor: pointer;
  }
`;

export const LoginInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 16px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.7);

  &:focus {
    outline-width: 0;
  }
`;

export const LoginLabel = styled.label`
  width: 100%;
  padding: 10px 10px 10px 10%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
`;

export const LoginForgotLink = styled(LinkTo)`
  margin: 20px auto;
  font-size: 14px;
`;

export const LoginSocialLink = styled(LinkTo)`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  color: var(--text-subtitle-color);
  border: 1px solid var(--main-border-color);
  width: 45%;
  border-radius: 8px;
`;

export const LoginButton = styled(Button)`
  width: 70%;
  margin: 60px auto 0;
`;
