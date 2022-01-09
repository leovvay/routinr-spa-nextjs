import { FlattenSimpleInterpolation } from 'styled-components';

import typography from '@theme/typography';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    typography: Record<keyof typeof typography, FlattenSimpleInterpolation>;
  }
}
