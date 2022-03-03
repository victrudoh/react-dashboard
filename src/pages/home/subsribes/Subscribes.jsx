import React from 'react'

import { Container, Title, Wrapper, Content, InnerContent, Details, Status, Buy, ProgressBar, ProgressDigits } from './Subscribes.Styles'

const Subscribes = () => {
  return (
    <Container>
      <Title>My Subscribes</Title>
      <Wrapper>
        <Content>
          <InnerContent>
            <Details>
              <span className="bx bx-category-alt"></span>
              <h3>Tele pin</h3>
            </Details>
            <Status status={"inactive"}>Inactive</Status>
          </InnerContent>
          <Buy>Buy Subscribe</Buy>
        </Content>
        <Content>
          <InnerContent>
            <Details>
              <span className="bx bx-category-alt"></span>
              <h3>Transaction IVR</h3>
            </Details>
            <Status status={"inactive"}>Inactive</Status>
          </InnerContent>
          <Buy>Buy Subscribe</Buy>
        </Content>
      </Wrapper>
      <Wrapper>
        <Content>
          <InnerContent>
            <Details>
              <span className="bx bx-category-alt"></span>
              <h3>OTP Service UK</h3>
            </Details>
            <Status status={"active"}>Active</Status>
          </InnerContent>
          <ProgressDigits>
            <div className="daysLeft">19 D</div>
            <div className="totalDays">33 Days</div>
          </ProgressDigits>
          <ProgressBar>
            <div className="lineAbove" daysLeft={19}></div>
          </ProgressBar>
        </Content>
        <Content>
          <InnerContent>
            <Details>
              <span className="bx bx-category-alt"></span>
              <h3>Web Phone & Sip Phone</h3>
            </Details>
            <Status status={"active"}>Active</Status>
          </InnerContent>
          <ProgressDigits>
            <div className="daysLeft">19 D</div>
            <div className="totalDays">33 Days</div>
          </ProgressDigits>
          <ProgressBar>
            <div className="lineAbove" daysLeft={19}></div>
          </ProgressBar>
        </Content>
      </Wrapper>
      <Wrapper>
        <Content>
          <InnerContent>
            <Details>
              <span className="bx bx-category-alt"></span>
              <h3>Card IVR</h3>
            </Details>
            <Status status={"inactive"}>Inactive</Status>
          </InnerContent>
          <Buy>Buy Subscribe</Buy>
        </Content>
        <Content>
          <InnerContent>
            <Details>
              <span className="bx bx-category-alt"></span>
              <h3>OTP USA</h3>
            </Details>
            <Status status={"active"}>Active</Status>
          </InnerContent>
          <ProgressDigits>
            <div className="daysLeft">19 D</div>
            <div className="totalDays">33 Days</div>
          </ProgressDigits>
          <ProgressBar>
            <div className="lineAbove" daysLeft={19}></div>
          </ProgressBar>
        </Content>
      </Wrapper>
      <Wrapper>
        <Content>
          <InnerContent>
            <Details>
              <span className="bx bx-category-alt"></span>
              <h3>OTP France</h3>
            </Details>
            <Status status={"inactive"}>Inactive</Status>
          </InnerContent>
          <Buy>Buy Subscribe</Buy>
        </Content>
        <Content>
          <InnerContent>
            <Details>
              <span className="bx bx-category-alt"></span>
              <h3>OTP Australia</h3>
            </Details>
            <Status status={"active"}>Active</Status>
          </InnerContent>
          <ProgressDigits>
            <div className="daysLeft">19 D</div>
            <div className="totalDays">33 Days</div>
          </ProgressDigits>
          <ProgressBar>
            <div className="lineAbove" daysLeft={19}></div>
          </ProgressBar>
        </Content>
      </Wrapper>
      <Wrapper>
        <Content>
          <InnerContent>
            <Details>
              <span className="bx bx-category-alt"></span>
              <h3>OTP Advance UK Service</h3>
            </Details>
            <Status status={"inactive"}>Inactive</Status>
          </InnerContent>
          <Buy>Buy Subscribe</Buy>
        </Content>
        <Content>
          <InnerContent>
            <Details>
              <span className="bx bx-category-alt"></span>
              <h3>OTP Advance US Service</h3>
            </Details>
            <Status status={"inactive"}>Inactive</Status>
          </InnerContent>
          <Buy>Buy Subscribe</Buy>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default Subscribes