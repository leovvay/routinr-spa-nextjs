import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  padding: 85px 72px;

  background-color: black;
  border-top: 2px solid var(--footer-border-color);
`;

export const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    gap: 48px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 48px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--text-subtitle-color);
`;
