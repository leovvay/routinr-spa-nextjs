import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  padding: 9px 24px;
  border-radius: 45px;
  border: 2px solid #fafaff;
  &:hover {
    background-color: rgba(252, 252, 253, 0.1);
  }
`;

export default ButtonContainer;
