import React from 'react'

import {
  Wrapper,
  Header,
  Container,
  ContentTop,
  ContentTable,
  ContentTableInner,
  ContentBottom,
} from "./MyTickets.Styles";

const MyTickets = () => {
  return (
    <Wrapper>
      <Header>
        <h2>My Tickets</h2>
      </Header>
      <Container>
        <ContentTop>
          <button>
            <div className="buttonflex">
              <span className="bx bx-plus"></span>
              <h5>New Ticket</h5>
            </div>
          </button>
        </ContentTop>
        <ContentTable>
          <header>
            <div className="search">
              <input
                type="text"
                name="search"
                id="search"
              />
              <i className="bx bx-search"></i>
            </div>
          </header>
          <ContentTableInner>
            <table className="tableheadOutter">
              <div className="tableheadmid">
                <div className="tableheadmain">
                  <tr>
                    <th colSpan={1} rowSpan={1}>
                      <div className="th_text">
                        <span>#</span>
                      </div>
                    </th>
                    <th colSpan={1} rowSpan={1}>
                      <div className="th_text">
                        <span>Subject</span>
                      </div>
                    </th>
                    <th colSpan={1} rowSpan={1}>
                      <div className="th_text">
                        <span>Date</span>
                      </div>
                    </th>
                    <th colSpan={1} rowSpan={1}>
                      <div className="th_text">
                        <span>Status</span>
                      </div>
                    </th>
                    <th colSpan={1} rowSpan={1}>
                      <div className="th_text">
                        <span>Manage</span>
                      </div>
                    </th>
                  </tr>
                </div>
              </div>
            </table>
            <div className="nodata">No data availabel</div>
          </ContentTableInner>
        </ContentTable>
        <ContentBottom></ContentBottom>
      </Container>
    </Wrapper>
  );
}

export default MyTickets