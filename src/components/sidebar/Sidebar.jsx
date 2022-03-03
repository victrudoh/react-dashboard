import React from 'react'

import { Link } from 'react-router-dom'

//Styles
import { SidebarStyle, SidebarLogo, SidebarItemStyle } from './Sidebar.Styles'
import './sidebar.css'

//Logo
import logo from '../../assets/images/logo.png'

//Routes stuff
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'


const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <SidebarItemStyle>
          <div className={`sidebar__item-inner ${active}`}>
            {/* <SidebarItemIinner active={active}> */}
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            {/* </SidebarItemIinner> */}
            </div>
        </SidebarItemStyle>
    )
}

const Sidebar = props => {

  const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

  return (
    <SidebarStyle>
      <SidebarLogo>
        <img src={logo} alt="Logo" />
      </SidebarLogo>
      {
        sidebar_items.map((item, index) => (
          <Link to={item.route} key={index}>
              <SidebarItem
                title={item.display_name}
                icon={item.icon}
                active={index === activeItem}
              />
          </Link>
        ))
      }
      {/* SERVICES
      {
        sidebar_items.map((item, index) => (
          <Link to={item.route} key={index}>
            <SidebarItem
                title={item.display_name}
                icon={item.icon}
                active={index === activeItem_1}
              />
          </Link>
        ))
      }
      CALL LOGS
      {
        sidebar_items.map((item, index) => (
          <Link to={item.route} key={index}>
            <div>
              {item.display_name}
            </div>
          </Link>
        ))
      }
      ACCOUNTS
      {
        sidebar_items.map((item, index) => (
          <Link to={item.route} key={index}>
            <div>
              {item.display_name}
            </div>
          </Link>
        ))
      } */}


    </SidebarStyle>
  )
}

export default Sidebar