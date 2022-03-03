import React from 'react'

import { Container, Amount, AddMoney, Telegram } from './Balance.Styles'

//Telegram image
import telegram from '../../../assets/images/telegram.jpg'

const Balance = () => {
  return (
    <>
      <Container>
        <Amount>
          <span>
            £
          </span>
          <h3>18.7</h3>
        </Amount>
        <h4>Your Balance</h4>
        <AddMoney>Add Money</AddMoney>
        <Telegram>
          <a href="/">
            <img src={telegram} alt="no media" />
          </a>
        </Telegram>
      </Container>
    </>
  );
}

export default Balance