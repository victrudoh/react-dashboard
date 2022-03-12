import React from 'react'

import { Wrapper, Header, Card, Bluetext, Search, Button } from "./Donate.Styles";

const Donate = () => {
  return (
    <>
      <Wrapper>
        <Header>Donate</Header>
        <Card>
          <Bluetext>
            <p>
              We would appreciate any donations for development towards to our
              services this helps to keep our services at a high standard and
              helps towards bringing out new features so if you made some good £
              from using our service donate it will bring you more luck Thanks
              from the ispoof team 🙂
            </p>
          </Bluetext>
          <Search>
            <label>Enter your amount in (£)</label>
            <input type="number" name="amount" id="amount" />
          </Search>
          <Button>Donate</Button>
        </Card>
      </Wrapper>
    </>
  );
}

export default Donate