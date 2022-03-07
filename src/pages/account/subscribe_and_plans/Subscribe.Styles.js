import styled from "styled-components";

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;

  h2 {
    color: #636363;
    font-size: 24.36px;
    font-weight: 500;
    line-height: 1.2;
    font-family: inherit;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 0.5rem;
  display: block;
  box-shadow: 0 4px 25px 0 rgb(0 0 0 / 10%);
  position: relative;
  transition: all 0.3s ease-in-out;
`;

export const ContentInner = styled.div`
  overflow: unset;
  transition: all 0.3s ease-in-out;
  position: relative;
`;

export const Body = styled.div`
  padding: 1.5rem;

  span {
    text-align: left;
    font-weight: 400;
    display: flex;
  }

  /* p {
    color: var(--main-color);
    display: flex;
    margin: 1rem 0;
    padding: 0.6rem;
    border-radius: 5px;
    background-color: #c0d5fc;
    font-size: 12px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  } */
`;