import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
`;

export const Header = styled.span`
    font-size: 23px;
    font-weight: 540;
    display: flex;
    margin-top: -1.5rem;
    margin-bottom: 1rem;
    color: var(--txt-color);
`;

export const Card = styled.div`
  background-color: var(--main-bg);
  padding: .8rem;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
`;

export const Bluetext = styled.div`
  background-color: #c0d5fc;
  color: var(--main-color);
  font-size: 13px;
  border-radius: 6px;
  padding: .7rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width:768px) {
      font-size: 12px;
  }

`;

export const Search = styled.div`
  label {
    font-size: 12px;
    color: gray;
    font-weight: 200;
    display: flex;
    margin: 0.7rem 0;
  }

  input {
    border: 0.5px solid grey;
    padding: 0.5rem;
    width: 50%;
    display: flex;
    border-radius: 5px;
    margin: 0.3rem 0;

    @media (max-width: 768px) {
      width: 100%;
      display: block;
    }
  }
`;

export const Button = styled.button`
  background-color: var(--main-color);
  color: whitesmoke;
  width: 50%;
  padding: 0.5rem;
  display: flex;
  border-radius: 5px;
  margin: 1rem 0;
  justify-content: center;

  &:hover {
    box-shadow: rgba(26, 87, 202, 0.466) 0px 0px 4px 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;
