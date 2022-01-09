import React, { memo } from 'react';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { ButtonProps } from '@components/Button';
import { currencyFormat } from '@utils';

import {
  ButtonBuyContainer,
  ButtonBuyContent,
  ButtonBuyText,
} from './ButtonBuy.styled';

interface ButtonBuyProps extends ButtonProps {
  price: number;
  isFree: boolean;
  withoutIcon?: boolean;
}
function ButtonBuy({
  isFree,
  price,
  withoutIcon,
  ...buttonProps
}: ButtonBuyProps): JSX.Element {
  const amount = currencyFormat(price);
  return (
    <ButtonBuyContainer {...buttonProps}>
      {isFree ? (
        <ButtonBuyText size="bodySmallBold">Free</ButtonBuyText>
      ) : (
        <ButtonBuyContent $withoutIcon={withoutIcon}>
          {withoutIcon ? (
            <ButtonBuyText size="bodyBold" weight={700}>
              Buy for {amount}
            </ButtonBuyText>
          ) : (
            <>
              <ButtonBuyText size="bodySmallBold">
                <ShoppingCartOutlinedIcon fontSize="small" />
                Buy
              </ButtonBuyText>
              <ButtonBuyText size="bodySmallBold">{amount}</ButtonBuyText>
            </>
          )}
        </ButtonBuyContent>
      )}
    </ButtonBuyContainer>
  );
}

ButtonBuy.defaultProps = {
  className: undefined,
  shadow: false,
  withoutIcon: false,
  size: 'small',
};

export default memo(ButtonBuy);
