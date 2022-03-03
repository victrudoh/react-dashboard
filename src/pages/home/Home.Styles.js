import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  /* width: 90%; */
  /* margin: 0 auto; */
  gap: 2rem;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;

  .top {
      padding: 1rem;
  }

  @media screen and (max-width: 1060px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: grey;
  text-align: left;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: -2rem;
  margin-bottom: 2rem;
`;

export const Subscribes = styled.div`
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
    padding: 3rem;
    width: 50%;
    border-radius: var(--border-radius);
    
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const News = styled.div`
  /* display: flex;
    flex-flow: row wrap; */
  margin: 3rem 0;
  list-style: none;

  .top {
    border-bottom: 2px solid var(--second-color);
    border-radius: var(--border-radius);
  }

  .body ul {
    margin: 0.8rem 0;
    border-left: 4px solid var(--second-color);
    border-bottom: 1px solid var(--second-color);
    text-align: left;
    padding: 0.5rem 1rem;
    /* box-shadow: var(--box-shadow);
    border-radius: var(--border-radius); */
  }
`;

