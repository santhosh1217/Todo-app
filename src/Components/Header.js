import React from 'react';
import logo from "../Assets/Images/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light" >
  <div className="container-fluid">
    <a className="navbar-brand" href="">
      <img className='logo' src={logo} alt="" ></img>
      <span className='title'>To-Do App</span>
    </a>
  </div>
</nav>
  )
}

export default Header