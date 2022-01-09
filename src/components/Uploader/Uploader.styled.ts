import styled from 'styled-components';

import Text from '@components/Text';

export const UploaderContainer = styled.div`
  padding: 20px 20px 10px;
  background-color: var(--main-bg-color);
  border: 1px dashed var(--main-border-color);
`;

export const UploaderHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 20px;
`;

export const UploaderContent = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const UploaderFooter = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export const UploaderError = styled(Text).attrs({
  size: 'validationCaption',
})`
  display: flex;
  justify-content: center;

  color: var(--red);
`;
