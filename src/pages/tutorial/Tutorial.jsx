import React from 'react'

import { Wrapper, Header, Title, Container, Row, Col } from "./Tutorial.Styles";
import Card from './card/Card';

const Tutorial = () => {
  return (
    <>
      {/* <Wrapper> */}
      <Header>
        <Title>
          <h2>Tutorial</h2>
        </Title>
      </Header>
      <Container>
        <Row>
          <Col>
            <Card title={"Introduction"} />
          </Col>
          <Col>
            <Card
              title={"How to connect your SIP phone to your ispoof dashboard"}
            />
          </Col>
          <Col>
            <Card title={"How to use the OTP service"} />
          </Col>
          <Col>
            <Card title={"How to change your number"} />
          </Col>
        </Row>
      </Container>
      {/* </Wrapper> */}
    </>
  );
}

export default Tutorial