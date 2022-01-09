import React, { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { RoundButtonProps } from './RoundButton.types';

import ButtonContainer from './RoundButton.styled';

function RoundButton({
  children,
  onClick = () => {},
  className = '',
  ...props
}: PropsWithChildren<RoundButtonProps>): JSX.Element {
  return (
    <ButtonContainer onClick={onClick} className={className} {...props}>
      {children}
    </ButtonContainer>
  );
}

export default styled(RoundButton)``;
