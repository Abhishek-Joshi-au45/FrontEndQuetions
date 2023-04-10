import React from 'react';

const Footer = () => {
  return (
    <div>
    <div id='nav' className='bg-primary' style={{margin:'50px',borderRadius:'100px' , color:'black'}}>
    <ul className="nav justify-content-center">
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#" ><strong style={{color:'white'}}>Copyright ©2023 Nutralite</strong></a>
    </li>
    <li className="nav-item" style={{color:'red'}}>
    <a className="nav-link" href="#"><strong style={{color:'white'}}>|</strong></a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#"><strong style={{color:'white'}}>T&Cs and Privacy Policy</strong></a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href='#'><strong style={{color:'white'}}>|</strong></a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href='#'><strong style={{color:'white'}}>Digital Agency Tonic Worldwide</strong></a>
    </li>
    </ul>
    </div>

    <div>
      <p>Powered by <img src='./logo.png'  alt='LOGO'/></p>
    </div>
    </div>
  );
};

export default Footer;
