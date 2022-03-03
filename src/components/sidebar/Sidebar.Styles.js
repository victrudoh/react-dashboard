import styled from "styled-components";

export const SidebarStyle = styled.div`
  min-width: var(--sidebar-width);
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: var(--main-bg);
  box-shadow: var(--box-shadow);
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    /* min-width: 50%; */
    /* display: none; */
  }
`;

export const SidebarLogo = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 45px;
  }

  @media screen and (max-width: 768px) {
    height: 60px;

    img {
        height: 30px;
    }
}
`;

export const SidebarItemStyle = styled.div`
  padding: 0 20px;
`;

// export const SidebarItemIinner = styled.div`
//   ${props =>
//     props.active`
//       background: white;
//       color: black;
//     `}
// `;
