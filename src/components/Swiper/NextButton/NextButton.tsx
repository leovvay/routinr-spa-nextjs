import React from 'react';

import styled from 'styled-components';

import Image from '@components/Image';
import { TouchableProps } from '@components/Touchable';

import { NextButtonStyled } from './NextButton.styled';

function NextButton(props: TouchableProps): JSX.Element {
  return (
    <NextButtonStyled {...props}>
      <Image src="/next-btn.svg" width={32} height={32} />
    </NextButtonStyled>
  );
}

NextButton.defaultProps = {
  className: undefined,
  onClick() {},
};

export default styled(NextButton)``;
