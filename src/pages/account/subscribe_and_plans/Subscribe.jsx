import React from 'react'
import { CardBody } from 'reactstrap';

import { Wrapper, Header, Content, ContentInner, Body } from "./Subscribe.Styles";

const Subscribe = () => {
  return (
    <Wrapper>
      <Header>
        <h2>Subscribe & Spoof Plans</h2>
      </Header>
      <Content>
        <ContentInner>
          <Body>
            <span>Subscribe & Spoof time plans</span>
            <CardBody>

            </CardBody>
          </Body>
        </ContentInner>
      </Content>
    </Wrapper>
  );
}

export default Subscribe