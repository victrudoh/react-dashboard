import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--main-bg);
  box-shadow: var(--box-shadow);
  padding: 1rem;
  width: 50%;
  border-radius: var(--border-radius);
  max-height: 600px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    max-height: 1500px;
  }
`;

export const Title = styled.div`
  text-align: left;
  margin: 2rem 0;
  font-weight: 500;
  font-size: 20px;
  /* background-color: red; */
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  margin-bottom: 2rem;
  /* background-color: green; */

  @media screen and (max-width: 1060px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 2px 6px;
  /* background-color: blue; */
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: yellow; */
`;

export const Details = styled.div`
    display: flex;
    gap: 0.3rem;

    h3 {
        font-size: 15px;
        font-weight: 500;
    }
`;

export const Status = styled.div`
  background-color: ${(props) =>
    props.status === "inactive" ? "#ff9f43" : "#28c76f"};
  border-radius: 14px;
  padding: 0.4rem;
  font-size: 12px;
  color: var(--txt-white);
`;

export const Buy = styled.a`
  font-size: 12px;
  border-bottom: 2px solid var(--second-color);
  transform: all 300ms ease 0s;
  padding-bottom: 0.2rem;
  color: var(--second-color);
  cursor: pointer;
  transform: all 300ms ease-in-out;
  display: inline-block;

  &:hover {
    border-bottom: 2px solid var(--main-color);
    transform: translate(0, 4px);
    /* padding-bottom: 0.2rem; */
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: rgba(0, 0, 0, 0.06);
  z-index: 50;
  position: relative;
  display: inline-block;
  border-radius: 18px;
  overflow: hidden;

  .lineAbove {
    z-index: 100;
    height: 100%;
    border-radius: 18px;
    transition: all 0.5s ease 0s;
    background-color: var(--main-color);
    /* width: calc((${(props) => props.daysLeft}/33) * 100%); */
    width: calc((19/33) * 100%);
  }
`;

export const ProgressDigits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0;
  font-size: 12px;
  font-weight: 700;
  /* margin-top: 1.7rem; */
  margin-bottom: -0.7rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  .daysLeft {
    color: var(--main-color);
  }

  .totalDays {
    color: var(--second-color);
  }
`;