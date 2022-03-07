import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--topnav-height);
  box-shadow: var(--box-shadow-topNav);
  border-radius: var(--border-radius);
  margin: 20px;
  background-color: var(--main-bg);
  font-size: 1rem;
  /* position: fixed; */
  /* width: 100%; */
  /* position: absolute; */
  /* top: 0; */
  


  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    /* width: 100%; */
  }
`;

export const TopbarLeft = styled.div`
  display: flex;
  align-items: center;

  span {
    display: none;
    font-size: 1.6rem;
    width: 1.5rem;
    height: 1.5rem;

    &:hover{
      cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
      display: block;
    }
  }

  .break {
    @media screen and (max-width: 1060px) {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 0.5rem;
      font-size: 0.6rem;
    }
  }

  .Addmoney {
    border: 1px solid var(--main-color);
    width: 100px;
    padding: 6px 15px;
    border-radius: 8px;
    color: var(--main-color);
    margin-left: 15px;

    @media screen and (max-width: 768px) {
      margin-left: 0;
    }
  }

  .Addmoney:hover {
    background: #5286e750;
  }
`;

export const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const UserName = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const Status = styled.div`
  font-size: 1em;
  font-weight: 300;
`;