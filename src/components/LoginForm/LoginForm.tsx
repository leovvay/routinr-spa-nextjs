import React, { useState } from 'react';

import Stack from '@mui/material/Stack';

import SignUpWithEmail from '@components/LoginForm/components/SignUpWithEmail';

import Login from './components/Login';
import SignUp from './components/SignUp';
import CompleteRegistration from './components/CompleteRegistration';

type AuthStep = 'login' | 'signUp' | 'emailSignUp' | 'completeRegistration';

interface LoginFormProps {
  initialStep?: AuthStep;
}

type Props = LoginFormProps & typeof defaultProps;

const defaultProps = {
  initialStep: 'login',
};

function LoginForm({ initialStep }: Props): JSX.Element {
  const [step, setStep] = useState<AuthStep>(initialStep);

  return (
    <Stack paddingY={2}>
      {step === 'login' && <Login onSignUp={() => setStep('signUp')} />}
      {step === 'signUp' && (
        <SignUp
          onSignIn={() => setStep('login')}
          onEmailSignUp={() => setStep('emailSignUp')}
        />
      )}
      {step === 'emailSignUp' && (
        <SignUpWithEmail onSignIn={() => setStep('login')} />
      )}
      {step === 'completeRegistration' && <CompleteRegistration />}
    </Stack>
  );
}

LoginForm.defaultProps = defaultProps;

export default LoginForm;
