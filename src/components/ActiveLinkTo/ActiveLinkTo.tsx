import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { Children, ReactElement } from 'react';

import LinkTo from '../LinkTo';

export default function ActiveLinkTo({
  children,
  ...props
}: React.PropsWithChildren<LinkProps>): JSX.Element {
  const { asPath, pathname } = useRouter();
  const child = Children.only(children) as React.ReactElement;

  const isActive =
    pathname === props.href ||
    asPath === props.href ||
    pathname === props.as ||
    asPath === props.as;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line react/jsx-props-no-spreading
    <LinkTo {...props}>
      {React.cloneElement(child as ReactElement, {
        isActive,
        className: isActive
          ? `${child.props.className} active`
          : child.props.className,
      })}
    </LinkTo>
  );
}
