import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const BenefitsEditorContainer = styled.div`
  font-family: var(--font-primary);
  background-color: var(--white);
  border: 1px solid var(--main-border-color);
  border-radius: 4px;
  min-height: 80px;

  & .ql-editor {
    opacity: 0.64;
    font-size: 15px;

    ul {
      padding-left: 0;
    }
  }
`;
