import React from 'react'
import { Wrapper, Header, Container, ContentTop, ContentTable, ContentTableInner, ContentBottom } from './LiveCalls.Styles'

const LiveCalls = () => {
  return (
    <Wrapper>
      <Header>
        <h2>LIVE CALLS</h2>
      </Header>
      <Container>
        <ContentTop>
          <button>
            <div className="buttonflex">
              <span className="bx bx-refresh"></span>
              <h5>Refresh</h5>
            </div>
          </button>
        </ContentTop>
        <ContentTable>
            <header>
                <div className="search">
                    <input type="text" name="search" id="search" placeholder='search' />
                    <i></i>
                </div>
            </header>
            <ContentTableInner>
                <table className="tableheadOutter">
                    <div className="tableheadmid">
                        <div className="tableheadmain">
                            <tr>
                                <th colSpan={1} rowSpan={1}>
                                    <div className="th_text">
                                        <span>ID</span>
                                    </div>
                                </th>
                                <th colSpan={1} rowSpan={1}>
                                    <div className="th_text">
                                        <span>Created at</span>
                                    </div>
                                </th>
                                <th colSpan={1} rowSpan={1}>
                                    <div className="th_text">
                                        <span>Phone no.</span>
                                    </div>
                                </th>
                                <th colSpan={1} rowSpan={1}>
                                    <div className="th_text">
                                        <span>Caller ID</span>
                                    </div>
                                </th>
                                <th colSpan={1} rowSpan={1}>
                                    <div className="th_text">
                                        <span>Dtmf</span>
                                    </div>
                                </th>
                                <th colSpan={1} rowSpan={1}>
                                    <div className="th_text">
                                        <span>Call Status</span>
                                    </div>
                                </th>
                            </tr>
                        </div>
                    </div>
                </table>
                <div className="nodata">
                    No data availabel
                </div>
            </ContentTableInner>
        </ContentTable>
        <ContentBottom></ContentBottom>
      </Container>
    </Wrapper>
  );
}

export default LiveCalls