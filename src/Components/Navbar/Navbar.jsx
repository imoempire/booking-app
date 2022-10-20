import React from 'react'
import logo from '../../Assets/Logo.png'
import avatar from '../../Assets/Avatar.png'
import {IoIosNotificationsOutline} from 'react-icons/io'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
         <div className="nav__menu">
            {/* List */}
            <div className="nav__list">
               <div className="nav__logo">
                  <img src={logo} alt="" />
               </div>
               <div className="nav__user">
                  <span className="notification">
                     <IoIosNotificationsOutline color="#9CA3AF" size={'1.5rem'}/>
                  </span>
                  <span className="avatar">
                     <img src={avatar} alt="" />
                  </span>
               </div>
            </div>
            {/* End List */}
         </div>
      </nav>
    </>
  )
}

export default Navbar