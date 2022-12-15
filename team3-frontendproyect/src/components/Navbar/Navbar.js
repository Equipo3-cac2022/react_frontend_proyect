import React from 'react'
import "./Navbar.css"
import logo from "../../assets/images/notflix-logo-medium.png"
import avatar from "../../assets/images/Netflix-avatar.png"
import { Link } from 'react-router-dom'
import DarkMode from '../DarkMode/DarkMode'




const Navbar = () => {



  return (
    <div className='login-top' id='hide' >
      <div className='toolbar' >
        <img src={logo} alt="logo" className="logo" to="Billboards" />
        <ul className='nav'>
          <li className='nav-item'><Link className="nav nav-link" to="Login">Login</Link></li>
          <li className='nav-item'><Link className="nav nav-link" to="Billboards">Billboards</Link></li>
          <li className='nav-item'><Link className="nav nav-link" to="Heroes">Heroes</Link></li>
          <li className='nav-item' style={{ alignSelf: 'center' }}><DarkMode></DarkMode></li>
        </ul>
        <img src={avatar} alt="logo" className="avatar" />
      </div>
    </div>
  )


}


export default Navbar