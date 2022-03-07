import React from 'react'

import {
  Wrapper,
  Header,
  Content,
  ContentInner,
  Body,
  Service,
  Left,
  Right
} from "./ServiceStatus.Styles";

const ServiceStatus = () => {
  return (
    <Wrapper>
      <Header>
        <h2>Service Status</h2>
      </Header>
      <Content>
        <ContentInner>
          <Body>
            <span>Service State</span>
            <p>
              You can see the status of our services instantly And if there is a
              problem in any section, be informed
            </p>
            <Service>
              <Left>
                <span>
                  <h4>Telepin Service</h4>
                </span>
              </Left>
              <Right>
                <span>Operation</span>
              </Right>
            </Service>
            <Service>
              <Left>
                <span>
                  <h4>IVR Transaction Service</h4>
                </span>
              </Left>
              <Right>
                <span>Operation</span>
              </Right>
            </Service>
            <Service>
              <Left>
                <span>
                  <h4>Web Phone</h4>
                </span>
              </Left>
              <Right>
                <span>Operation</span>
              </Right>
            </Service>
            <Service>
              <Left>
                <span>
                  <h4>OTP UK Service</h4>
                </span>
              </Left>
              <Right>
                <span>Operation</span>
              </Right>
            </Service>
            <Service>
              <Left>
                <span>
                  <h4>OTP US Service</h4>
                </span>
              </Left>
              <Right>
                <span>Operation</span>
              </Right>
            </Service>
            <Service>
              <Left>
                <span>
                  <h4>OTP FR Service</h4>
                </span>
              </Left>
              <Right>
                <span>Operation</span>
              </Right>
            </Service>
            <Service>
              <Left>
                <span>
                  <h4>OTP AU Service</h4>
                </span>
              </Left>
              <Right>
                <span>Operation</span>
              </Right>
            </Service>
            <Service>
              <Left>
                <span>
                  <h4>Card IVR</h4>
                </span>
              </Left>
              <Right>
                <span>Operation</span>
              </Right>
            </Service>
          </Body>
        </ContentInner>
      </Content>
    </Wrapper>
  );
}

export default ServiceStatus