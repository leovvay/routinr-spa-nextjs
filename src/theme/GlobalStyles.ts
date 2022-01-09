import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import fontFaces from './fonts/styles';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  ${fontFaces}
  
  :root {
    ${colors};

    --font-primary: "Muli", sans-serif;
    --font-secondary: "inter";
    --layout-width: 1100px;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    ${({ theme }) => theme.typography.body};
    box-sizing: border-box;
    background-color: var(--main-bg-color)
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background-color: var(--main-bg-color)
  }

  html {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  body {
    flex-grow: 1;
  }
  
  
  html,
  body {
    font-family: var(--font-primary);
    background-color: var(--main-bg-color);
  }
  
  pre {
    font-family: var(--font-primary);
  }
  
  #__next {
    height: 100%;
  }
`;

export default GlobalStyles;
