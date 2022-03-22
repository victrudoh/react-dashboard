import styled from "styled-components";

export const Wrapper = styled.div `
  min-width: var(--sidebar-width);
  height: 100%;
  width: var(--sidebar-width);
  position: fixed;
  left: 0;
  top: 0;
  background-color: var(--main-bg);
  box-shadow: var(--box-shadow);
  z-index: 100;

  &:hover {
    overflow-x: hidden;
  }

  @media (max-width: 768px) {
    /* display: none; */
  }

  /* @media screen and (max-width: 1200px) {
    display: block;
  } */
`;



export const SidebarTop = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.4rem;
  margin-left: 1.4rem;
  /* position: fixed;
  z-index: 50; */
`;

export const SidebarLogo = styled.div `
  display: flex;
  gap: 0.8rem;
  align-items: center;

  img {
    width: 1.8rem;
    height: 1.8rem;
  }

  .logoName {
    margin-top: 0.2rem;
    color: var(--main-color);
    font-size: 22px;
    font-weight: 600;
    animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards
      running fadein;
  }
`;

export const SidebarCloseBtn = styled.div `
  & {
    display: none;
    @media (max-width: 1200px) {
      display: block;
    }
  }

  span {
    font-size: 1.6rem;
    margin-right: 0.8rem;
    width: 1.5rem;
    height: 1.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const SidebarDown = styled.div `
  display: flex;
  flex-direction: column;
  height: 86vh;
  position: relative;
  top: 3rem;
  padding: 0 16px;

  h3 {
    font-weight: 400;
    font-size: 16px;
  }

  a {
    gap: 0.5rem;
    /* position: relative; */
    /* height: 3.7rem; */
    transition: all 300ms ease;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    font-weight: 600;
    transition: all 0.3s ease 0s;
  }

  a:hover {
    transform: translateX(10px);
  }

  span {
    font-size: 1.6rem;
  }

  .active {
    background-image: linear-gradient(
      to right,
      var(--main-color),
      var(--second-color)
    );
    color: var(--txt-white);
    border-radius: 6px;
    box-shadow: rgba(26, 87, 202, 0.466) 0px 0px 9px 5px;
  }
`;

export const SidebarCategory = styled.div `
  font-weight: 500;
  font-size: 13px;
  margin: 2.4rem 0 0.5rem 0.5rem; //top right bottom left
`;