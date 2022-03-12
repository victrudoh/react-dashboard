import styled, { css } from 'styled-components'
// import { rgba } from 'polish';

export const Row = styled.div`
    display: flex;
    position: relative;
    /* gap: 1rem; */
    /* cursor: pointer; */
    /* background: black; */
`;

const transition = css`
    transition: transform 0.45s;
`;

export const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0%;
  width: 50%;
  /* width: 33.33%; */
  height: 2px;
  /* background: var(--main-color); */
  background: linear-gradient(30deg, var(--main-color), var(--second-color));
  border-radius: var(--border-radius);
  box-shadow: rgba(26, 87, 202, 0.466) 0px 0px 6px 1px;
  transform: translateX(${(p) => (p.active === 0 ? 0 : p.active * 115)}%);
  ${transition}
`;

export const Button = styled.button`
  flex: 1 1 50%;
  /* flex: 1 1 33.33%; */
  outline: none;
  height: 30px;
  cursor: pointer;
  border-bottom: 1px solid red;
  color: ${(p) => (p.active ? "#2967d8" : "#636363")};
  background-color: var(--second-bg);
  border: unset;
`;