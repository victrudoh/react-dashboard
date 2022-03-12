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

export const Body = styled.div`
  /* background-color: red; */
  padding: 2rem;

  h2 {
    display: flex;
    font-weight: 600;
    margin: 1rem 0;
  }

  i {
    position: absolute;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    font-size: 1rem;
    left: 1rem;
    color: inherit;
    text-align: center;
  }

  input {
    padding: 0.7rem;
    border-radius: 5px;
    display: flex;
    width: 100%;
    border: 1px solid #c3c3c3;

    &:focus {
      border: 1px solid var(--main-color);
    }
  }

  input::placeholder {
    color: #c3c3c3;
    font-weight: 200;
    font-size: 12px;
  }
`;