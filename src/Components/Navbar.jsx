import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Helper function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  const [menuSystem, setSystem] = useState("close");

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/">
          <img className='nav-logo' src="/Assets/Logo/logo.png" alt="Site Logo" />
        </Link>
      </div>
      <div className='nav-menu me-3'>
        <ul className={menuSystem === 'open' ? 'navlinks open' : 'navlinks close'}>
          <li>
            <Link className='link' to='/'>
              Home
            </Link>
            {isActive('/') ? <div className='menu-divider active'></div> : <div className='menu-divider'></div>}
          </li>
          <li>
            <Link className='link' to='/men'>
              Men
            </Link>
            {isActive('/men') ? <div className='menu-divider active'></div> : <div className='menu-divider'></div>}
          </li>
          <li>
            <Link className='link' to='/women'>
              Women
            </Link>
            {isActive('/women') ? <div className='menu-divider active'></div> : <div className='menu-divider'></div>}
          </li>
          <li>
            <Link className='link' to='/jewelery'>
              Jewelery
            </Link>
            {isActive('/jewelery') ? <div className='menu-divider active'></div> : <div className='menu-divider'></div>}
          </li>
          <li>
            <Link className='link' to='/contact'>
              Contact Us
            </Link>
            {isActive('/contact') ? <div className='menu-divider active'></div> : <div className='menu-divider'></div>}
          </li>
          <li className='menu-close'>
            <Icon.X className='menu-close-icon' color='black' size={25} onClick={() => { setSystem("close") }} />
          </li>
        </ul>
        <div className='icons'>
          <Link className='link' to='/login'><Icon.PersonCircle className='menu-icons' color='black' size={20} /></Link>
          <Link className='link' to='/search'><Icon.Search className='menu-icons' color='black' size={20} /></Link>
          <Link className='link' to='/cart' size={20}>
            <div className='cart'>
              <span className='cart-total bg-success'>2</span>
              <Icon.Bag color='black' size={20} />
            </div>
          </Link>
        </div>
        <div className='menu-open'>
          <Icon.List className='menu-open-icon ms-3' color='black' size={25} onClick={() => { setSystem("open") }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
