import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 29px 4vw;

  background-color: var(--white);
  border-top: 2px solid var(--footer-border-color);
`;

export const LogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
`;

export const MenuContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--text-subtitle-color);

  &:not(:first-child):before {
    content: '•';
    margin: 0 10px;
  }
`;

export const StoresContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
