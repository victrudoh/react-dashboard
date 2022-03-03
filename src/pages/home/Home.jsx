import React from "react";

import { Wrapper, Header } from "./Home.Styles";

import Subscribes from "./subsribes/Subscribes";
import Balance from "./balance/Balance";
import News from "./news/News";

const Home = () => {
  return (
    <>
      <Header>
        <h3>Dashboard</h3>
      </Header>
      <Wrapper>
        <Subscribes />
        <Balance />
      </Wrapper>
      <News />

      {/* <News>
        <div className="top">News</div>
        <div className="body">
          <li>
            <ul>Stuff</ul>
            <ul>Stuff</ul>
            <ul>Stuff</ul>
          </li>
        </div>
      </News> */}
    </>
  );
};

export default Home;
