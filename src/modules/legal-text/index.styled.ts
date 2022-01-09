import styled from 'styled-components';

export const LegalTextContainer = styled.div`
  padding: 20px;

  h2 {
    font-size: 1.3rem;
    margin: 0;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.6;
    font-size: 1rem;
  }

  a {
    color: var(--text-primary-color);
    text-decoration: none;
  }
`;

export const LegalTextList = styled.ol<{
  $type?: 'disc' | 'decimal' | 'square';
  $size?: 'small' | 'large';
}>`
  list-style-type: ${({ $type = 'disc' }) => $type};
  font-size: ${({ $size = 'small' }) => ($size === 'small' ? 1 : 1.3)}rem;
  padding-left: 30px;
`;

export const LegalTextTermsList = styled.ol<{
  $size?: 'small' | 'large';
  $padding?: boolean;
}>`
  list-style-type: ${({ $size = 'small' }) =>
    $size === 'small' ? 'lower-latin' : 'upper-latin'};
  font-size: 1rem;
  padding-left: ${({ $padding }) => ($padding ? '20px' : 0)};
  color: rgba(0, 0, 0, 0.6);
`;

export const LegalTextTermsListCircle = styled.ol`
  list-style-type: circle;
  padding-left: 20px;
`;
