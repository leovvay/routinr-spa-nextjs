import { LinkProps } from 'next/link';
import React from 'react';

import ActiveLinkTo, { ActiveLinkToLegacyApp } from '@components/ActiveLinkTo';

import LinkContent from './NavActiveLink.styled';

interface NavActiveLinkProps extends LinkProps {
  legacy?: boolean;
  disableHover?: boolean;
}

type Props = NavActiveLinkProps & typeof defaultProps;

const defaultProps = {
  legacy: false,
  disableHover: false,
  className: undefined,
};

export default function NavActiveLink({
  href,
  children,
  legacy,
  disableHover,
  className,
}: React.PropsWithChildren<Props>): JSX.Element {
  const LinkComponent = legacy ? ActiveLinkToLegacyApp : ActiveLinkTo;
  return (
    <LinkComponent href={href}>
      <LinkContent disableHover={disableHover} className={className}>
        {children}
      </LinkContent>
    </LinkComponent>
  );
}

NavActiveLink.defaultProps = defaultProps;
