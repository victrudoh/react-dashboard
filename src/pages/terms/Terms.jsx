import React from 'react'

import {
  Container,
  Header,
  Title,
  Content,
  ContentInner,
  Body,
  Row,
  Text,
} from "./Terms.Styled";

const Terms = () => {
  return (
    <Container>
      <Header>
        <Title>
          <h2>Terms & Conditions</h2>
        </Title>
      </Header>
      <Content>
        <ContentInner>
          <Body>
            <Row>
              <h5>1. Terms</h5>
              <Text>
                By accessing the website at https://ispoof.com, you are agreeing
                to be bound by these terms of service, all applicable laws and
                regulations, and agree that you are responsible for compliance
                with any applicable local laws. If you do not agree with any of
                these terms, you are prohibited from using or accessing this
                site. The materials contained in this website are protected by
                applicable copyright and trademark law. Your iSpoof account is
                subject for immediate termination should you fail to comply with
                any of these terms.
              </Text>
              <h5>2. Calling</h5>
              <Text>
                By using the iSpoof VOIP services you agree to abide by the
                following terms and regulations:
                <p>
                  1. Made calls must comply with all applicable laws and
                  regulations;
                </p>
                <p>
                  2. you may not impersonate government bodies or financial
                  institutions for malicious purposes;
                </p>
                <p>
                  3. You may not use the iSpoof service to harass, harm, and/or
                  threaten other persons and/or companies
                </p>
              </Text>
              <h5>3. SMS Messaging</h5>
              <Text>
                By using the iSpoof service you agree to abide by the following
                terms and regulations when sending SMS with iSpoof:
                <ul>
                  <li>
                    1.Sent SMS must comply with all applicable laws and
                    regulations;
                  </li>
                  <li>
                    2.you may not impersonate government bodies or financial
                    institutions for malicious purposes;
                  </li>
                  <li>
                    3.spamming, "SMS bombing", phishing, scamming, and any
                    similar activities are strictly prohibited;
                  </li>
                  <li>
                    4.4. you may not use the iSpoof service to harass, harm,
                    and/or threaten other persons and/or companies
                  </li>
                </ul>
                2. All URLs must be manually approved before being included in
                outgoing SMS. To have your URL whitelisted, please contact us.
                Link shorteners will not be whitelisted unless you own the
                domain.
              </Text>
              <h5>4. Sales</h5>
              <Text>
                1. All sales are final, but refunds may be issues based on our
                own discretion and if you meet the following criteria:
                <ul>
                  <li>
                    1.your SMS/Calls are unable to reach your target number;
                  </li>
                  <li>
                    2.your target country and/or network must be on our list of
                    supported countries;
                  </li>
                  <li>
                    3.if your complaint is not being able to use a custom sender
                    ID, your target country/network must be listed to support
                    „Spoofing“
                  </li>
                  <li>
                    4.4.you may not use the iSpoof service to harass, harm,
                    and/or threaten other persons and/or companies
                  </li>
                </ul>
                2. Harassing support staff will not be tolerated and may result
                in loss of refund eligibility and/or account suspension.
              </Text>
              <h5>5. Your Data</h5>
              <Text>
                1. How we treat your data, and general information about our
                policies
                <ul>
                  <li>
                    1.All SMS messages and Call logs, are logged in our database
                    to prevent abuse;
                  </li>
                  <li>
                    2.SMS/Call logs are only accessible by the sole owner, and
                    will never be shared with any other entity
                  </li>
                  <li>
                    3.iSpoof stores the following obligatory user information:
                    site activity, username, email, transaction logs and sms
                    logs. IP addresses are masked.;
                  </li>
                  <li>
                    4.you may request account deletion and/or your account data
                    by contacting us here. Your logs can be deleted from our
                    servers, but for legal reasons they will remain stored in an
                    offline volume only accessible by the sole owner;
                  </li>
                </ul>
              </Text>
              <h5>6. Disclaimer</h5>
              <Text>
                1.iSpoof is not liable for any damages araising in contract,
                tort or otherwise from th use of or inability to use iSpoof or
                any material contained in it, or from any action decision taken
                as a resault of using the site
                <br />
                2.The materials on iSpoof's website are provided on an 'as is'
                basis. iSpoof makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
                <br />
                3.Further, iSpoof does not warrant or make any representations
                concerning the accuracy, likely results, or reliability of the
                use of the materials on its website or otherwise relating to
                such materials or on any sites linked to this site.
              </Text>
              <h5>7. Limitations</h5>
              <Text>
                In no event shall iSpoof or its subsidiaries be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on iSpoof's website, even
                if iSpoof or a iSpoof authorized representative has been
                notified orally or in writing of the possibility of such damage.
                Because some jurisdictions do not allow limitations on implied
                warranties, or limitations of liability for consequential or
                incidental damages, these limitations may not apply to you.
              </Text>
              <h5>8. Accuracy of materials</h5>
              <Text>
                The materials appearing on iSpoof's website could include
                technical, typographical, or photographic errors. iSpoof does
                not warrant that any of the materials on its website are
                accurate, complete or current. iSpoof may make changes to the
                materials contained on its website at any time without notice.
                However iSpoof does not make any commitment to update the
                materials.
              </Text>
              <h5>9. Links</h5>
              <Text>
                iSpoof has not reviewed all of the sites linked to its website
                and is not responsible for the contents of any such linked site.
                The inclusion of any link does not imply endorsement by iSpoof
                of the site. Use of any such linked website is at the user's own
                risk.
              </Text>
              <h5>10. Modifications</h5>
              <Text>
                iSpoof may revise these terms of service for its website at any
                time without notice. By using this website you are agreeing to
                be bound by the then current version of these terms of service.
              </Text>
              <h5>11. Governing Law</h5>
              <Text>
                These terms and conditions are governed by and construed in
                accordance with the laws of the United Kingdom and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that location.
              </Text>
            </Row>
          </Body>
        </ContentInner>
      </Content>
    </Container>
  );
}

export default Terms