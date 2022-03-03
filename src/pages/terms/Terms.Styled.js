import styled from "styled-components";

export const Container = styled.div`

`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
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
`;

export const Row = styled.div`
  line-height: 27px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  padding: 0.75rem;
  text-align: left;

  h5 {
    width: 100%;
    font-size: 15.96px;
    font-weight: 500px;
    line-height: 1.2;
    color: #2c2c2c;
  }
`;

export const Text = styled.div`
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
  font-weight: 200px;
  font-size: 15px;

    li {
      margin-left: 1rem;
    }
`;

