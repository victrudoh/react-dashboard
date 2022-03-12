import React, { useState } from "react";

import { Header, Body, PageContainer, TabsWrapper, Card, Content, Tab } from "./Subscribe.Styles";

import Tabs from './tabs/Tabs'

//TAB contents
import SubscribesTab from "./tabs/subscribes_tab/SubscribesTab";
import MinutesTab from "./tabs/minutes_tab/MinutesTab";

const TABS = [SubscribesTab(), MinutesTab()];

const Subscribe = () => {

    const [active, setActive] = useState(0);

  return (
    <>
      <Header>
        <h2>Subscribe & Spoof Plans</h2>
      </Header>
      <Body>
        <span>Subscribe & Spoof time plans</span>
        <PageContainer>
          <TabsWrapper>
            <Card>
              <Tabs active={active} setActive={setActive} />
              <Content active={active}>
                {TABS.map((tab, index) => (
                  <Tab key={index}>{tab}</Tab>
                ))}
              </Content>
            </Card>
          </TabsWrapper>
        </PageContainer>
      </Body>
    </>

    // <Wrapper>
    //   <Header>
    //     <h2>Subscribe & Spoof Plans</h2>
    //   </Header>
    //   <Content>
    //     <ContentInner>
    //       <Body>
    //         <span>Subscribe & Spoof time plans</span>
    //         <BodyContainer>
    //           <CardBody>
    //             <Tabs>
    //               <UlTabs>
    //                 <ul>
    //                   <li activeClassName="active">
    //                     <button type="button">
    //                       <i className="bx bx-award"></i>
    //                       <span>Subscribes</span>
    //                     </button>
    //                   </li>
    //                   <li>
    //                     <button type="button">
    //                       <i className="bx bx-phone-call"></i>
    //                       <span>Minutes</span>
    //                     </button>
    //                   </li>
    //                 </ul>
    //                 <span className="tab-line"></span>
    //               </UlTabs>
    //             </Tabs>
    //           </CardBody>
    //         </BodyContainer>
    //       </Body>
    //     </ContentInner>
    //   </Content>
    // </Wrapper>
  );
}

export default Subscribe