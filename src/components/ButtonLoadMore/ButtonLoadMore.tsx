import React from 'react';

import Loader from '@components/Loader';

import { ButtonLoadMoreStyled } from './ButtonLoadMore.styled';

interface ButtonLoadMoreProps {
  fetchNextPage(): void;
  isFetchingNextPage: boolean;
  className?: string;
}

function ButtonLoadMore({
  fetchNextPage,
  isFetchingNextPage,
  className,
}: ButtonLoadMoreProps): JSX.Element {
  return (
    <ButtonLoadMoreStyled
      onClick={fetchNextPage}
      disabled={isFetchingNextPage}
      className={className}
      shadow
    >
      {isFetchingNextPage ? <Loader size={16} /> : 'View more'}
    </ButtonLoadMoreStyled>
  );
}

ButtonLoadMore.defaultProps = {
  className: undefined,
};

export default ButtonLoadMore;
