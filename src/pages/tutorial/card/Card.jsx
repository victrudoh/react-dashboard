import React from 'react'

import {
  Container,
  Header,
  Title,
  BodyWrapper,
  Body,
  BodyInner,
} from "./Card.Styles";

const Card = ({ title }) => {
  return (
    <Container>
      <Header>
        <Title>
          <h4>{title}</h4>
        </Title>
      </Header>
      <BodyWrapper>
        <Body>
          <BodyInner>
            <video controls={"controls"}>
              <source
                src="https://panel.ispoof.cc/tutorial-videos/introduction.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </BodyInner>
        </Body>
      </BodyWrapper>
    </Container>
  );
}

export default Card