import styled, { css } from "styled-components";

// export const Wrapper = styled.div``;

const transition = css`
  transition: transform 0.45s;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  margin-top: -1.5rem;
  align-items: center;

  h2 {
    color: #636363;
    font-size: 24.36px;
    font-weight: 500;
    line-height: 1.2;
    font-family: inherit;
  }
`;

export const Body = styled.div`
  padding: 1.5rem;
  box-shadow: 0 4px 25px 0 rgb(0 0 0 / 10%);
  border-radius: var(--border-radius);

  span {
    text-align: left;
    font-weight: 400;
    display: flex;
    margin-bottom: 1rem;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex: 1;
  /* min-height: 100vh; */
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

export const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 80%;
  padding: 0 10px;
  background: var(--second-bg);
`;

export const Card = styled.div`
  overflow: hidden;
  position: relative;
  width: 200px;
  height: 50vh;
  /* background: black; */
`;

export const Content = styled.div`
  /* position: absolute; */
  height: 100%;
  display: flex;
  gap: 300px;
  transform: translateX(
    ${(p) => (p.active === 0 ? 0 : `-${p.active * 380}px`)}
  );
    ${transition}
    padding: 10px;
    /* color: red; */
`;

export const Tab = styled.div`
  /* width: 100%; */
  display: flex;
  gap: 3rem;
`;




// export const ContentInner = styled.div`
//   overflow: unset;
//   transition: all 0.3s ease-in-out;
//   position: relative;
// `;

// export const Body = styled.div`
//   padding: 1.5rem;

//   span {
//     text-align: left;
//     font-weight: 400;
//     display: flex;
//   }
// `;

// export const BodyContainer = styled.div`
//   position: relative;
//   transition: all 0.3s ease-in-out;
//   overflow: unset;
// `;

// export const CardBody = styled.div`
//   padding: 1.5rem;
// `;

// export const Tabs = styled.div`
//   width: 100%;
//   overflow: hidden;
//   position: relative;
// `;

// export const UlTabs = styled.div`
//   position: relative;

//   ul {
//     display: flex;
//     width: 100%;
//     padding-left: 0;
//     box-shadow: 0 0 25px 0 rgb(0 0 0 / 4%);
//     position: relative;
//     list-style-type: none;
//     margin: 0;
//     padding: 0;

//     li {
//       white-space: nowrap;
//       display: block;
//       position: relative;
//       text-align: -webkit-match-parent;

//       button {
//         display: flex;
//         align-items: center;
//         -webkit-box-sizing: border-box;
//         box-sizing: border-box;
//         /* display: block; */
//         position: relative;
//         width: 100%;
//         background: transparent;
//         margin: 0;
//         padding: 10px;
//         border: 0;
//         cursor: pointer;
//         -webkit-transition: all 0.2s ease;
//         transition: all 0.2s ease;
//         z-index: 100;
//         font-size: 1rem;
//         font-weight: 500;

//         &:focus {
//           outline: none;
//         }

//         .active {
//           padding-top: 8px;
//           padding-bottom: 12px;
//           color: rgba(var(--main-color), 1) !important;
//         }

//         i {
//           color: inherit;
//           font-weight: 100;
//           text-align: center;
//           font-size: 1rem;
//           font-style: normal;
//           font-weight: normal;
//           font-variant: normal;
//           text-transform: none;
//           line-height: 1;
//           -webkit-font-smoothing: antialiased;

//           /* &::before {
//             content: "\e82e";
//           } */
//         }

//         span {
//           padding-left: 9px;
//         }
//       }
//     }
//   }

//   span {
//     left: 0px;
//     width: 121px;
//     height: 2px;
//     transform: scaleX(1);

//     .tab-line {
//       background: linear-gradient(
//         30deg,
//         rgba(var(--vs-primary), 1),
//         rgba(var(--vs-primary), 0.5)
//       ) !important;
//       box-shadow: 0 0 8px 0 rgba(var(--vs-primary), 0.4) !important;
//       display: block;
//       position: absolute;
//       transition: all 0.2s ease;
//       will-change: left, right;
//       direction: ltr;
//     }
//   }
// `;