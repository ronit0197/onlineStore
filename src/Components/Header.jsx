import React from 'react'
import * as Icon from 'react-bootstrap-icons'

const Header = () => {
  return (
    <div className='header'>
      <div className="left">
        <div>
          <h6 className='header-welcome'>Welcome to Urban Basket</h6>
          <h1>Exclusive offers for you</h1>
          <p>
            Shirts, Pants, Trousars, T-Shirts, Printed T-Shirts<br />
            Joggers, Full T-Shirts, Full Shirts, Half Shirts<br /> and many more...
          </p>
          <button className='custom-btn'>Latest Collection <Icon.ArrowRight /></button>
        </div>
      </div>
      <div className="right">
        <img src="/Assets/Images/header.png" alt="Header_img" />
      </div>
    </div>
  )
}

export default Header