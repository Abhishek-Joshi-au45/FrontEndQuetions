import React from 'react';
import LoginPopup from './LoginPopup';
import './header.css'

const Header = () => {
  return (
    <div id='header' className='bg-primary' style={{background: '', marginLeft:'50px', marginRight:'50px', marginBottom:'10px',borderRadius:'100px'}}>
    <ul className="nav justify-content-center">
    <li className="nav-item" style={{paddingTop:'30px'}}>
    <a className="nav-link active" aria-current="page" href="#" ><strong style={{color:'white'}}>HOME</strong></a>
    </li>
    <li className="nav-item" style={{paddingTop:'30px'}}>
    <a className="nav-link" href="#"><strong style={{color:'white'}}>RECIPE SUBMISSION</strong></a>
    </li>
    <li className="nav-item">
    <img src='./nutraverse.png' alt="Logo" height='100px' />
    </li>
    <li className="nav-item" style={{paddingTop:'30px'}}>
    <a className="nav-link" href="#"><strong style={{color:'white'}}>GALLERY</strong></a>
    </li>
    <li className="nav-item" style={{paddingTop:'30px'}}>
    <a className="nav-link" href='#'><strong style={{color:'white'}}>SCOREBOARD</strong></a>
    </li>
    <li className="nav-item" style={{paddingTop:'30px'}}>
      <LoginPopup />
    </li>
    </ul>
    </div>
  );
};

export default Header;
