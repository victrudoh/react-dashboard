import React from 'react'

//Dependencies
import { NavLink, Link } from 'react-router-dom'

//Styles
import { Wrapper, TopbarLeft, TopbarRight, User, UserName, Status } from './Topbar.Styles'

//Components
import Dropdown from '../dropdown/Dropdown'


const notifications = "Scribble scribble"

const curr_user = {
    display_name: 'victrudoh@gmail.com',
    status: 'Available'
}

const renderNotificationItem = (item, index) => (
<div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
</div>
)

const Topbar = () => {

  return (
    
    <Wrapper>
        <TopbarLeft>
            <a href="/"><span className='bx bx-exit'></span></a>
            <div className='break'>
                Balance: £18.17 | Minutes : 10 h 48 m 51 s
                <NavLink to="/" className='Addmoney'>Add Money</NavLink>
            </div>
        </TopbarLeft>
        <TopbarRight>
            <Dropdown
                icon='bx bx-bell'
                badge='12'
                contentData={notifications}
                renderItems={(item, index) => renderNotificationItem(item, index)}
                renderFooter={() => <Link to='/'>View All</Link>}
            />

            <User>
                <UserName>{curr_user.display_name}</UserName>
                <Status>{curr_user.status}</Status>
            </User>

        </TopbarRight>
    </Wrapper>

  )
}

export default Topbar