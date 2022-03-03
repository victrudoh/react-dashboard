import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  h2 {
    color: #636363;
    margin-bottom: 0.25rem;
    font-size: 24.36px;
    font-weight: 500;
    line-height: 1.2;
  }
`;

export const Container = styled.div`
    /* background: black; */
    /* display: flex; */
    /* padding: 0 auto; */
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    margin: 0 -1rem;
  }
`;

export const Col = styled.div`
  padding: 0 1rem;
  margin-bottom: 2.2rem;

  @media (min-width: 992px) .lg\:w-1\/2 {
    width: 50%;
  }
`;


