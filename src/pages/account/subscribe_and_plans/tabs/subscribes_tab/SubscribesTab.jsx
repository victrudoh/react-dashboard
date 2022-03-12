import React from 'react'

//React-bootstrap
import { Dropdown, DropdownButton } from "react-bootstrap";


//styles
import { Container } from './SubscribesTab.Styles'

const SubscribesTab = () => {
  return (
    <>
      <Container>
        <label>Quick filter by service</label>
        <select name="services" id="services" placeholder="All services"  >
          <option value="web_phone">Web Phone & Sip Phone</option>
          <option value="web_phone">Phone & Sip Phone</option>
          <option value="web_phone"> & Sip Phone</option>
          <option value="web_phone">Web & Sip Phone</option>
        </select>

        {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton> */}

        {/* <option value="list">
          <ul>
            <li>Effect</li>
          </ul>
        </option> */}

        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </Container>
    </>
  );
}

export default SubscribesTab