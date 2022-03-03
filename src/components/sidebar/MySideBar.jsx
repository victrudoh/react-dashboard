import React from 'react'

import { NavLink } from 'react-router-dom'

//Logo
import logo from '../../assets/images/favicon.png'

//Styles
import { Wrapper, SidebarTop, SidebarLogo, SidebarCloseBtn, SidebarDown, SidebarCategory } from './MySideBar.Styles'

// import { Dropdown, NavDropdown } from 'react-bootstrap'
// import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'


const MySideBar = () => {

  return (
    <>
      <aside>
        <Wrapper>
          <SidebarTop>
            <SidebarLogo>
              <img src={logo} alt="logo" />
              <div className="logoName">Spoof.cc</div>
            </SidebarLogo>
            <SidebarCloseBtn>
              <a href="/">
                <span className="bx bx-exit"></span>
              </a>
            </SidebarCloseBtn>
          </SidebarTop>

          <SidebarDown>
            <NavLink activeClassName="active" exact to="/">
              <span className="bx bx-category-alt"></span>
              <h3>Dashboard</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/tutorial">
              <span className="bx bx-user-pin"></span>
              <h3>Tutorial</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/terms">
              <span className="bx bx-package"></span>
              <h3>Terms</h3>
            </NavLink>
            {/* <br></br> */}
            <SidebarCategory>SERVICES</SidebarCategory>
            {/* <br></br> */}
            <NavLink activeClassName="active" to="/telepin">
              <span className="bx bx-user-pin"></span>
              <h3>Telepin</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/transaction_IVR">
              <span className="bx bx-category-alt"></span>
              <h3>Transaction IVR</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/webphone">
              <span className="bx bx-package"></span>
              <h3>Web phone</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/otp_UK">
              <span className="bx bx-package"></span>
              <h3>OTP UK</h3>
            </NavLink>
            {/* <Dropdown>
                    <Dropdown.Toggle>
                            <span className='bx bx-category-alt'></span>
                            <h3>Dropdown</h3>                        
                    </Dropdown.Toggle>
                        
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <NavLink activeClassName='active' exact to="/drop">
                                <span className='bx bx-category-alt'></span>
                                <h3>Dashboard</h3>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <NavLink activeClassName='active' exact to="/drop1">
                                <span className='bx bx-category-alt'></span>
                                <h3>Dashboard</h3>
                            </NavLink>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
            <NavLink activeClassName="active" to="/otp_USA">
              <span className="bx bx-package"></span>
              <h3>OTP USA/CA</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/otp_FR">
              <span className="bx bx-package"></span>
              <h3>OTP FR</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/otp_AU">
              <span className="bx bx-package"></span>
              <h3>OTP AU</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/card_IVR">
              <span className="bx bx-package"></span>
              <h3>Card IVR</h3>
            </NavLink>
            {/* <br></br> */}
            <SidebarCategory>CALL LOGS</SidebarCategory>
            {/* <br></br> */}
            <NavLink activeClassName="active" to="/live_Calls">
              <span className="bx bx-package"></span>
              <h3>Live Calls</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/call_log_report">
              <span className="bx bx-package"></span>
              <h3>Call Log Report</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/service_status">
              <span className="bx bx-package"></span>
              <h3>Service Status</h3>
            </NavLink>
            {/* <br></br> */}
            <SidebarCategory>ACCOUNT</SidebarCategory>
            {/* <br></br> */}
            <NavLink activeClassName="active" to="/subscribe">
              <span className="bx bx-package"></span>
              <h3>Subscribe & Plans</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/wallet">
              <span className="bx bx-package"></span>
              <h3>Wallet</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/donate">
              <span className="bx bx-package"></span>
              <h3>Donate us</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/my_tickets">
              <span className="bx bx-package"></span>
              <h3>My Tickets</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/faq">
              <span className="bx bx-package"></span>
              <h3>Faq</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/profile">
              <span className="bx bx-package"></span>
              <h3>Profile</h3>
            </NavLink>
            <NavLink activeClassName="active" to="/logout">
              <span className="bx bx-cog"></span>
              <h3>Logout</h3>
            </NavLink>
          </SidebarDown>
        </Wrapper>
      </aside>
    </>
  );
}

export default MySideBar