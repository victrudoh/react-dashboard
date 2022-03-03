import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 0.5rem;
  display: block;
  box-shadow: 0 4px 25px 0 rgb(0 0 0 / 10%);
  position: relative;
  transition: all 0.3s ease-in-out;
  padding: 0 1rem;
  margin-bottom: 2.2rem;
  min-height: 350px;
  max-height: 450px;
  min-width: 450px;
  max-width: 500px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0;
`;

export const Title = styled.div`
  h4 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: #2c2c2c;
    font-size: 18.48px;
  }
`;

export const BodyWrapper = styled.div`
  overflow: unset;
  transition: all 0.3s ease-in-out;
  position: relative;
`;

export const Body = styled.div`
  padding: 1.5rem;
`;

export const BodyInner = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin-top: 1.5rem;

  video {
      width: 100%;
      height: 240px;

      @media screen and (max-width: 768px) {
          width: 100%;
      }
  }
`;