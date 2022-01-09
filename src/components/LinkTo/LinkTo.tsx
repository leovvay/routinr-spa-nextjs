import React, { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';

import styled, { css } from 'styled-components';

interface LinkToProps extends LinkProps {
  className?: string;
  target?: string;
}

const defaultProps = {
  className: undefined,
  target: undefined,
};

function LinkTo({
  href,
  children,
  className,
  target,
  ...props
}: PropsWithChildren<LinkToProps>): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link href={href} passHref {...props}>
      <a href="replaced" className={className} target={target}>
        {children}
      </a>
    </Link>
  );
}

LinkTo.defaultProps = defaultProps;

export default styled(LinkTo)<{ blue?: boolean }>`
  display: inline-flex;

  ${({ blue }) =>
    blue &&
    css`
      color: var(--text-primary-color);
    `}
`;
