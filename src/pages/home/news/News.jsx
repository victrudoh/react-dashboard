import React from "react";

import {
  Container,
  Header,
  DividerLeft,
  Title,
  DividerRight,
  Body,
  BodyAgain,
  NewsTitle,
  NewsSubject,
  NewsDate,
  NewsDetails,
} from "./News.Styles";

const News = () => {
  return (
    <Container>
      <Header>
        <DividerLeft></DividerLeft>
        <Title>News</Title>
        <DividerRight></DividerRight>
      </Header>
      <Body>
        <BodyAgain>
          <ul>
            <li>
              <NewsTitle>
                <NewsSubject>
                  <h4>New U.K. 🇬🇧OTP ADVANCED FEATURE</h4>
                </NewsSubject>
                <NewsDate>
                  <span className="bx bx-category-alt"></span>
                  <h4>2021-12-01</h4>
                </NewsDate>
              </NewsTitle>
              <NewsDetails>
                <p>
                  New 🇬🇧 U.K. otp advance feature has arrived 80% sucess rate of
                  otp being intercepted
                </p>
              </NewsDetails>
            </li>
            <li>
              <NewsTitle>
                <NewsSubject>
                  <h4>OTP UK 🇬🇧 BACK UP AND RUNNING !</h4>
                </NewsSubject>
                <NewsDate>
                  <span className="bx bx-category-alt"></span>
                  <h4>2021-07-26</h4>
                </NewsDate>
              </NewsTitle>
              <NewsDetails>
                <p>
                  After a week or so we have relaunched otp service U.K. with
                  major improvements and success rate has been tried and tested
                  over 50 times before we decided to launch so hope you guys
                  have great success :) BIG THANKS from the ispoof team
                  👨🏼‍💻👩🏻‍💻🧑🏼‍💻
                </p>
              </NewsDetails>
            </li>
            <li>
              <NewsTitle>
                <NewsSubject>
                  <h4>PLEASE READ</h4>
                </NewsSubject>
                <NewsDate>
                  <span className="bx bx-category-alt"></span>
                  <h4>2021-07-11</h4>
                </NewsDate>
              </NewsTitle>
              <NewsDetails>
                <p>
                  📣WELCOME BACK EVERYONE
                  <br />
                  <br />
                  If you joined our service or topped up between 16th June 2021
                  - 03rd July 2021
                  <br />
                  <br />
                  you may have trouble logging in you will need to create a new
                  account unfortunately if you also topped up in that time you
                  will need to provide screen shot with txid as this is your
                  proof of payment if you no longer have that unfortunately
                  under no circumstances we can not assist keep your txid
                  private as this is proof for your account only and will be
                  marked as paid On our system please message on live chat once
                  checked create account and we will add funds back
                  <br /> <br />
                  <br /> <br />
                  -Thanks from the ispoof team
                </p>
              </NewsDetails>
            </li>
          </ul>
        </BodyAgain>
      </Body>
    </Container>
  );
};

export default News;
