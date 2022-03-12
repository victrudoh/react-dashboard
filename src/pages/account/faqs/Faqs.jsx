import React from 'react'

import { Wrapper, Header, Body } from "./Faqs.Styles";

const Faqs = () => {
  return (
    <>
      <Wrapper>
        <Header>Frequently Asked Questions</Header>
        <Body>
          <h2>Have Any Questions?</h2>
          <input type="text" name="search" id="search" placeholder='Search' />
        {/* <i className="bx bx-search"></i> */}
        </Body>
      </Wrapper>
    </>
  );
}

export default Faqs