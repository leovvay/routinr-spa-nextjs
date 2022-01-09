import styled from 'styled-components';

export const NotificationCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px 20px;

  background-color: var(--white);
`;

export const NotificationCardBody = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 16px;
`;
