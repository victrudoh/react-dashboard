import styled from 'styled-components';

export const LayoutStyle = styled.div`
  color: var(--txt-color);
  background-color: var(--second-bg);
`;

export const LayoutContent = styled.div`
  padding-left: var(--sidebar-width);
  min-height: 100vh;
  text-align: center;

  @media screen and (max-width: 1200px) {
    /* padding: 0.1rem; */
    padding-left: 0;
    text-align: center;
  }
`;

export const LayoutContentMain = styled.div`
  padding: 30px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;