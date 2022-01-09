import styled from 'styled-components';

export const ButtonShareContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: var(--text-primary-color);

  *:not(:first-child) {
    margin-left: 10px;
  }
`;

export const ButtonShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid var(--grey);
  color: var(--text-subtitle-color);
  background-color: var(--white);
`;
