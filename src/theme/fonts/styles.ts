// noinspection CssUnknownTarget

import { css } from 'styled-components';

const fontFaces = css`
  /* latin */
  @font-face {
    font-family: 'Muli';
    font-style: normal;
    font-weight: 400;
    src: local('Muli Regular'), local('Muli-Regular'),
      url('/fonts/Muli/Muli-Regular.ttf') format('truetype');
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Muli';
    font-style: normal;
    font-weight: 600;
    src: local('Muli SemiBold'), local('Muli-SemiBold'),
      url('/fonts/Muli/Muli-SemiBold.ttf') format('truetype');
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Muli';
    font-style: normal;
    font-weight: 700;
    src: local('Muli Bold'), local('Muli-Bold'),
      url('/fonts/Muli/Muli-Bold.ttf') format('truetype');
    font-display: swap;
  }

  /* latin */
  @font-face {
    font-family: 'Muli';
    font-style: normal;
    font-weight: 800;
    src: local('Muli ExtraBold'), local('Muli-ExtraBold'),
      url('/fonts/Muli/Muli-ExtraBold.ttf') format('truetype');
    font-display: swap;
  }
`;

export default fontFaces;
