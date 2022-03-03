import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--main-bg);
  box-shadow: var(--box-shadow);
  padding: 3rem;
  width: 50%;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;

  @media screen and (max-width: 1020px) {
    width: 100%;
    height: auto;
  }
`;

export const Amount = styled.div`

  display: flex;
  padding: 1rem;
  margin-top: -3rem;

  span {
    font-size: 25px;
    display: flex;
    align-items: end;
    color: grey;
  }

  h3 {
    color: var(--main-color);
    font-size: 60px;
    font-weight: 800;
  }
`;

export const AddMoney = styled.a`
  background: linear-gradient(#474ad4, #2a62d8);
  border-radius: var(--border-radius);
  color: var(--txt-white);
  padding: 0.6rem 1.8rem;
  font-weight: 200px;
  font-size: 14px;
  margin: 2rem;

  &:hover {
    color: var(--txt-white);
    background: linear-gradient(#2a62d8, #474ad4);
  }
`;

export const Telegram = styled.a`

  img{
      border-radius: var(--border-radius);
  }
`;
