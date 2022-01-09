import React from 'react';

import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from '@mui/icons-material/Email';

import {
  LoginLogo,
  LoginSignUpButton,
  LoginTitle,
} from '@components/LoginForm/LoginForm.styled';
import Image from '@components/Image/';
import Text, { TextLight } from '@components/Text';
import { useLegacyAppLogin } from '@hooks';
import LinkTo from '@components/LinkTo';

import {
  SignUpButton,
  SignUpFb,
  SignUpGoogle,
  SignUpLinks,
} from './SignUp.styled';

interface SignUpProps {
  onSignIn(): void;
  onEmailSignUp(): void;
}

function SignUp({ onSignIn, onEmailSignUp }: SignUpProps): JSX.Element {
  const { fbAuthLink, googleAuthLink } = useLegacyAppLogin();

  return (
    <Stack spacing={4}>
      <LoginTitle>
        <LoginLogo>
          <Image src="/logoR.svg" width={50} height={54} />
          <TextLight size="h3" weight={800}>
            Sign up
          </TextLight>
        </LoginLogo>
        <LoginSignUpButton size="bodySmallExtraBold" onClick={onSignIn}>
          SIGN-IN HERE
        </LoginSignUpButton>
      </LoginTitle>
      <Stack spacing={3}>
        <LinkTo href={fbAuthLink}>
          <SignUpFb startIcon={<FacebookOutlinedIcon />} fullWidth>
            <Text fontSize={17} weight={700}>
              Sign up with Facebook
            </Text>
          </SignUpFb>
        </LinkTo>
        <LinkTo href={googleAuthLink}>
          <SignUpGoogle startIcon={<GoogleIcon />} fullWidth>
            <Text fontSize={17} weight={700}>
              Sign up with Google
            </Text>
          </SignUpGoogle>
        </LinkTo>
        <SignUpButton startIcon={<EmailIcon />} onClick={onEmailSignUp}>
          <Text fontSize={17} weight={700}>
            Sign up with Email
          </Text>
        </SignUpButton>
      </Stack>
      <Text size="bodyCaptionBold" weight={600}>
        By clicking one of the buttons above, I agree with Routinr{' '}
        <SignUpLinks href="/legal-text/terms">Terms of Service</SignUpLinks> and
        <SignUpLinks href="/legal-text">Privacy Policy</SignUpLinks>. We&apos;ll
        share offers and info with you by email. You can update your email
        preferences anytime.
      </Text>
    </Stack>
  );
}

export default SignUp;
