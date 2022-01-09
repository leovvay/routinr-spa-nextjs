import { css } from 'styled-components';

const rem = (size: string) => `${parseInt(size, 10) / 16}rem`;

function getTextStyles(
  fontWeight: number,
  fontSize: string,
  lineHeight: number
) {
  return css`
    font-weight: ${fontWeight};
    font-size: ${rem(fontSize)};
    line-height: ${lineHeight};
    margin: 0;
  `;
}

const typography = {
  h0: getTextStyles(800, '34px', 1.34),
  h1: getTextStyles(500, '30px', 1.34),
  h2: getTextStyles(500, '26px', 1.23),
  h3: getTextStyles(800, '24px', 1.25),
  h4: getTextStyles(500, '22px', 1.28),
  h5: getTextStyles(800, '20px', 1.28),
  h6: getTextStyles(800, '18px', 1.28),

  bodyLead: getTextStyles(700, '18px', 1),

  body: getTextStyles(400, '16px', 1.5),
  bodyMedium: getTextStyles(500, '16px', 1.5),
  bodyBold: getTextStyles(600, '16px', 1.5),

  bodySmall: getTextStyles(400, '14px', 1.29),
  bodySmallMedium: getTextStyles(500, '14px', 1.29),
  bodySmallBold: getTextStyles(600, '14px', 1.29),
  bodySmallExtraBold: getTextStyles(800, '14px', 1.29),

  bodyCaption: getTextStyles(400, '13px', 1.23),
  bodyCaptionBold: getTextStyles(800, '13px', 1.23),

  bodyCaptionSmall: getTextStyles(400, '11px', 1.23),

  footerCaption: getTextStyles(600, '10px', 1.29),

  validationCaption: getTextStyles(500, '12px', 1.23),
};

export default typography;
