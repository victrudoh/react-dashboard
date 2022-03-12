import styled from "styled-components";

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;

  h2 {
    color: #636363;
    margin-bottom: 0.25rem;
    font-size: 24.36px;
    font-weight: 500;
    line-height: 1.2;
    font-family: inherit;
  }
`;

export const Container = styled.div``;

export const ContentTop = styled.div`
  text-align: right;

  button {
    padding: 0.679rem 2rem;
    transition: all 0.2s ease;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    background: transparent;
    font-size: 1rem;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    color: var(--second-color);
    border: 1px solid var(--second-color);

    &:hover {
      background-color: #83acf744;
    }

    .buttonflex {
      display: flex;
      gap: 0.3rem;
    }
  }

  span {
    display: inline-flex;
    align-items: center;
    position: relative;
  }

  h5 {
    font-weight: 300;
  }
`;

export const ContentTable = styled.div`
  background: transparent;
  border-radius: 5px;

  header {
    display: flex;
    flex-wrap: wrap;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .search {
      justify-content: center;
      /* max-width: 200px; */
      position: relative;
      padding: 1rem 0;
      margin-left: 0;
      display: flex;
      align-items: center;

      input {
        padding: 10px 28px;
        border: 2px solid rgba(0, 0, 0, 0.1);
        font-size: 0.9rem;
        border-radius: 20px;
        font-size: 0.7rem;
        width: 200px;
        color: rgba(0, 0, 0, 0.7);
        -webkit-transition: all 0.25s ease;
        transition: all 0.25s ease;
        
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
    }

    /* @media (max-width: 768px) {
      width: 100%;
    } */
  }
`;

export const ContentTableInner = styled.div`
  width: 100%;
  overflow: auto;

  .tableheadOutter {
    background: #f8f8f8;
    border: 2px solid #f8f8f8;
    width: 100%;
    overflow: auto;
    /* z-index: 400; */
    position: relative;
  }

  .tableheadmid {
    border-collapse: separate;
    border-spacing: 0 1.3rem;
    padding: 0 1rem;
    font-size: 1rem;
    width: 100%;
    margin: 0;
    min-width: 400px;
    position: relative;
  }

  .tableheadmain {
    z-index: 200;
    width: 100%;
    position: relative;

    tr {
      background: none;
      box-shadow: none;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 200;
    }

    th {
      border: 0;
      text-align: left;
      font-size: 0.85rem;
      padding: 10px 15px;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }

    .th_text {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
    }
  }

  .nodata {
    padding: 1.5rem;
    text-align: center;
    font-size: 13px;
    font-weight: 200;
  }
`;

export const ContentBottom = styled.div``;
