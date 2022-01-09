import styled from 'styled-components';

import LinkTo from './LinkTo';

export default styled(LinkTo).attrs((props) => ({
  href: `${process.env.NEXT_PUBLIC_EMBER_HOST}${props.href}`,
}))``;
