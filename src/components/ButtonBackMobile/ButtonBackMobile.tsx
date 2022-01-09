import React from 'react';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { BackButtonContainer } from './ButtonBackMobile.styled';

interface ButtonBackMobileProps {
  onClick(): void;
  className?: string;
  color?: string;
  noShadow?: boolean;
}

type Props = ButtonBackMobileProps & typeof defaultProps;

const defaultProps = {
  noShadow: false,
  className: undefined,
  color: 'var(--white)',
};

function ButtonBackMobile({
  onClick,
  className,
  color,
  noShadow,
}: Props): JSX.Element {
  return (
    <BackButtonContainer
      onClick={onClick}
      className={className}
      $color={color}
      $noShadow={noShadow}
    >
      <ArrowBackIosRoundedIcon color="inherit" />
    </BackButtonContainer>
  );
}

ButtonBackMobile.defaultProps = defaultProps;

export default ButtonBackMobile;
