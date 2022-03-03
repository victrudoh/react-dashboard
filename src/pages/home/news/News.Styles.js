import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
`;

export const Header = styled.div`
  width: 100%;
  position: relative;
  clear: both;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 15px 0px;
`;

export const Title = styled.div`
  cursor: default;
  user-select: none;
  position: relative;
  white-space: nowrap;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 0.9375em;
  background: transparent;
`;

export const DividerLeft = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const DividerRight = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -1rem;
  padding: 0.75rem !important;
`;

export const BodyAgain = styled.div`
  width: 100%;

  ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }

  li {
    border-left: 3px solid #2196f3;
    padding: 0 10px;
    margin-bottom: 0.9rem;
  }
`;

export const NewsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 7px 7px -5px rgb(33 150 243 / 8%);
  margin-bottom: 10px;
  padding-bottom: 5px;
`;

export const NewsSubject = styled.div`
  font-weight: 700;
`;

export const NewsDate = styled.div`
  display: flex;
  gap: 0.2rem;
`;

export const NewsDetails = styled.div`
    text-align: left;
    
    p {
        font-size: 14px;
    }
`;