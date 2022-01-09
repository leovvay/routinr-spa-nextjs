import styled from 'styled-components';

export const CreatorModalForm = styled.form`
  width: 480px;

  @media (max-width: 580px) {
    width: unset;
  }
`;

export const CreatorModalSection = styled.section<{ row?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 10px;

  ${({ row = false }) =>
    row &&
    `
    flex-direction: row;
    align-items: center;
  `}
`;
