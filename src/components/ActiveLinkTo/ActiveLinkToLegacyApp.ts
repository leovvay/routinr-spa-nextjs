import React from 'react';
import { LinkProps } from 'next/link';

import styled from 'styled-components';

import ActiveLinkTo from './ActiveLinkTo';

export default styled(ActiveLinkTo).attrs((props) => ({
  href: `${process.env.NEXT_PUBLIC_EMBER_HOST}${props.href}`,
}))`` as React.ComponentType<LinkProps>;
